import { createClient } from "@/lib/supabase-server";
import { ImageResponse } from "@vercel/og";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";
import sharp from "sharp";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function GET(request, { params }) {
  try {
    const supabase = await createClient();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { searchParams } = new URL(request.url);
    const size = searchParams.get("size") || "facebook";

    if (!id) {
      return NextResponse.json({ error: "Poll ID is required" }, { status: 400 });
    }

    const pollId = id;

    // Fetch poll data
    const { data: poll, error: pollError } = await supabase.from("polls").select("*").eq("id", pollId).single();

    if (pollError || !poll) {
      return NextResponse.json({ error: "Poll not found", details: pollError?.message }, { status: 404 });
    }

    // Fetch poll options
    const { data: options, error: optionsError } = await supabase
      .from("poll_options")
      .select("*")
      .eq("poll_id", pollId)
      .order("display_order", { ascending: true })
      .order("id", { ascending: true });

    if (optionsError) {
      return NextResponse.json({ error: "Failed to fetch options", details: optionsError.message }, { status: 500 });
    }

    // Calculate percentages
    const totalVotes = (options || []).reduce((sum, opt) => sum + (opt.vote_count || 0), 0);
    const option1 = options?.[0] || { name: "EVOLVE", vote_count: 0 };
    const option2 = options?.[1] || { name: "RESIST", vote_count: 0 };
    const votes1 = option1.vote_count || 0;
    const votes2 = option2.vote_count || 0;
    const percentage1 = totalVotes > 0 ? Math.round((votes1 / totalVotes) * 100) : 50;
    const percentage2 = totalVotes > 0 ? Math.round((votes2 / totalVotes) * 100) : 50;

    // Image dimensions
    const dimensions = {
      facebook: { width: 1200, height: 830 },
      twitter: { width: 1200, height: 850 },
      linkedin: { width: 1200, height: 827 },
      default: { width: 1200, height: 830 },
    };

    const { width, height } = dimensions[size] || dimensions.default;

    // Calculate 20% bottom spacing
    const bottomSpacing = Math.round(height * 0.2) + "px";

    // Get poll question and options text
    const pollQuestion = poll.title || poll.question || "THE CITY STANDS DIVIDED";
    const option1Name = (option1.name || option1.text || option1.option_text || "EVOLVE").toUpperCase();
    const option2Name = (option2.name || option2.text || option2.option_text || "RESIST").toUpperCase();

    // Load images from public folder and convert WebP to PNG
    const publicPath = join(process.cwd(), "public");
    let bgImage, facesImage, logoImage, fontData;

    try {
      // Read image files
      const [bgBuffer, facesBuffer, logoBuffer, fontBuffer] = await Promise.all([
        readFile(join(publicPath, "assets/images/social-share/social-bg.webp")),
        readFile(join(publicPath, "assets/images/social-share/social-image.webp")),
        readFile(join(publicPath, "assets/images/social-share/social-logo.png")),
        readFile(join(publicPath, "assets/fonts/mokoto/mokoto.ttf")).catch(() => null),
      ]);

      // Convert and optimize images to PNG using sharp
      // Aggressively compress to reduce file size (target: <300kb)
      const [bgPng, facesPng, logoPng] = await Promise.all([
        sharp(bgBuffer)
          .resize(1200, 830, { fit: "cover", withoutEnlargement: true })
          .png({
            quality: 70,
            compressionLevel: 9,
            palette: true,
            effort: 7, // Higher effort for better compression
          })
          .toBuffer(),
        sharp(facesBuffer)
          .resize(600, null, { fit: "contain", withoutEnlargement: true })
          .png({
            quality: 70,
            compressionLevel: 9,
            palette: true,
            effort: 7,
          })
          .toBuffer(),
        sharp(logoBuffer)
          .resize(200, null, { fit: "contain", withoutEnlargement: true })
          .png({
            quality: 70,
            compressionLevel: 9,
            palette: true,
            effort: 7,
          })
          .toBuffer(),
      ]);

      // Convert buffers to ArrayBuffer for @vercel/og
      bgImage = bgPng.buffer.slice(bgPng.byteOffset, bgPng.byteOffset + bgPng.byteLength);
      facesImage = facesPng.buffer.slice(facesPng.byteOffset, facesPng.byteOffset + facesPng.byteLength);
      logoImage = logoPng.buffer.slice(logoPng.byteOffset, logoPng.byteOffset + logoPng.byteLength);

      if (fontBuffer) {
        fontData = fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength);
      }
    } catch (err) {
      console.error("Error loading assets:", err.message);
      console.error("Stack:", err.stack);
    }

    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#000000",
        }}
      >
        {/* Background Image */}
        {bgImage ? (
          <img
            src={bgImage}
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div style={{ display: "none" }} />
        )}

        {/* Main Content Container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "90px 150px",
            paddingBottom: bottomSpacing,
            position: "relative",
          }}
        >
          {/* Poll Question */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "48px",
                fontWeight: "bold",
                color: "#C2FF02",
                fontFamily: "Mokoto",
                textTransform: "uppercase",
                lineHeight: "1.2",
                textShadow: "0 0 20px rgba(194, 255, 2, 0.8)",
                maxWidth: "900px",
              }}
            >
              {pollQuestion.toUpperCase()}
            </div>
          </div>

          {/* Faces Image and Logo Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "600px",
              height: "300px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Faces Image */}
            {facesImage ? (
              <img
                src={facesImage}
                alt=""
                style={{
                  width: "600px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div style={{ display: "none" }} />
            )}

            {/* Logo Overlay */}
            {logoImage ? (
              <img
                src={logoImage}
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "200px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div style={{ display: "none" }} />
            )}
          </div>

          {/* Options and Percentages */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "900px",
              marginBottom: "100px",
              gap: "10px",
              position: "relative",
            }}
          >
            {/* Option 1 (Left - RESIST) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#C2FF02",
                  fontFamily: "Mokoto",
                  textTransform: "uppercase",
                  marginBottom: "15px",
                }}
              >
                {option1Name}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#C2FF02",
                    fontFamily: "Mokoto",
                    marginBottom: "20px",
                    height: "35px",
                    lineHeight: "35px",
                    textAlign: "center",
                  }}
                >
                  {percentage1}%
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "50px",
                    backgroundColor: "rgba(26, 26, 46, 0.8)",
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      position: "absolute",
                      width: `${percentage1}%`,
                      height: "100%",
                      left: 0,
                      top: 0,
                      backgroundColor: "#C2FF02",
                      borderRadius: "8px",
                      boxShadow: "0 0 20px rgba(194, 255, 2, 0.6)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Option 2 (Right - EVOLVE) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#00BFFF",
                  fontFamily: "Mokoto",
                  textTransform: "uppercase",
                  marginBottom: "15px",
                }}
              >
                {option2Name}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#00BFFF",
                    fontFamily: "Mokoto",
                    marginBottom: "20px",
                    height: "35px",
                    lineHeight: "35px",
                  }}
                >
                  {percentage2}%
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "50px",
                    backgroundColor: "rgba(26, 26, 46, 0.8)",
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      position: "absolute",
                      width: `${percentage2}%`,
                      height: "100%",
                      left: 0,
                      top: 0,
                      backgroundColor: "#00BFFF",
                      borderRadius: "8px",
                      boxShadow: "0 0 20px rgba(0, 191, 255, 0.6)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hashtag and Website */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: bottomSpacing,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#C2FF02",
                fontFamily: "Mokoto",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              #RESISTOREVOLVE
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "42px",
                fontWeight: "bold",
                color: "#FFFFFF",
                fontFamily: "Mokoto",
                textTransform: "uppercase",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
              }}
            >
              SPOREFALL.COM
            </div>
          </div>
        </div>
      </div>,
      {
        width,
        height,
        fonts: fontData
          ? [
              {
                name: "Mokoto",
                data: fontData,
                style: "normal",
              },
            ]
          : [],
        // Optimize image output to reduce file size
        quality: 75, // Reduced quality to keep file size under 300kb
      },
    );
  } catch (error) {
    console.error("Error generating poll image:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    // Return a simple error image instead of JSON
    try {
      return new ImageResponse(
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            color: "#C2FF02",
            fontSize: "32px",
            fontFamily: "Arial",
          }}
        >
          Error: {error.message}
        </div>,
        { width: 1200, height: 630 },
      );
    } catch (imgError) {
      return NextResponse.json(
        {
          error: "Failed to generate image",
          details: error.message,
          stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        },
        { status: 500 },
      );
    }
  }
}
