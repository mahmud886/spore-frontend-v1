/*
import { createClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";
import sharp from "sharp";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";
export const preferredRegion = "home";

export async function GET(request, { params }) {
  try {
    const supabase = await createClient();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { searchParams } = new URL(request.url);
    const size = searchParams.get("size") || "facebook";
    const format = searchParams.get("format") || "svg";

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

    // Define sizes for different platforms
    const sizes = {
      facebook: { width: 1200, height: 630 },
      twitter: { width: 1200, height: 675 },
      instagram: { width: 1080, height: 1080 },
      tiktok: { width: 1080, height: 1920 },
      linkedin: { width: 1200, height: 627 },
      pinterest: { width: 1000, height: 1500 },
      whatsapp: { width: 800, height: 800 }, // Optimized for mobile messaging
      default: { width: 1200, height: 630 },
    };

    const dimensions = sizes[size] || sizes.default;
    const width = dimensions.width;
    const height = dimensions.height;

    // Layout settings with margins
    const horizontalMargin = width * 0.1; // 10% left and right
    const verticalMargin = height * 0.1; // 10% top and bottom
    const contentWidth = width - horizontalMargin * 2;
    const contentHeight = height - verticalMargin * 2;

    // Calculate positions
    const questionY = verticalMargin + 60;
    const logoY = verticalMargin + contentHeight * 0.25 + 40; // Logo at 25% of content area
    const firstOptionY = verticalMargin + contentHeight * 0.45; // Options at 45% of content area
    const barHeight = 70;
    const columnSpacing = 40; // Space between columns
    const barWidth = (contentWidth - columnSpacing) / 2; // Half width for 2 columns

    // Get poll question and options text
    const pollQuestion = poll.title || poll.question || "THE CITY STANDS DIVIDED";
    const option1Name = (option1.name || option1.text || option1.option_text || "EVOLVE").toUpperCase();
    const option2Name = (option2.name || option2.text || option2.option_text || "RESIST").toUpperCase();

    // Truncate question if too long
    const maxQuestionLength = 60;
    const displayQuestion =
      pollQuestion.length > maxQuestionLength ? pollQuestion.substring(0, maxQuestionLength) + "..." : pollQuestion;

    // Skip font embedding to reduce file size - use web-safe fonts instead
    const fontDataUri = "";

    // Create SVG for options
    const optionBars = [];

    // First option (left - RESIST)
    optionBars.push(`
      <g>
        <!-- Tool label on top of bar -->
        <text x="${horizontalMargin + barWidth / 2}" y="${firstOptionY - 15}" font-size="26" font-weight="700" fill="#C2FF02" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif">${option1Name}</text>

        <!-- Background bar (semi-transparent dark) -->
        <rect x="${horizontalMargin}" y="${firstOptionY}" width="${barWidth}" height="${barHeight}" rx="12" fill="rgba(26, 26, 46, 0.8)"/>

        <!-- Colored bar showing percentage -->
        <rect x="${horizontalMargin}" y="${firstOptionY}" width="${(barWidth * percentage1) / 100}" height="${barHeight}" rx="12" fill="#C2FF02"/>

        <!-- Percentage and votes (below the bar) -->
        <text x="${horizontalMargin + barWidth / 2}" y="${firstOptionY + barHeight + 25}" font-size="24" font-weight="600" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif">${percentage1}% · ${votes1} ${votes1 === 1 ? "vote" : "votes"}</text>
      </g>
    `);

    // Second option (right - EVOLVE)
    optionBars.push(`
      <g>
        <!-- Tool label on top of bar -->
        <text x="${horizontalMargin + barWidth + columnSpacing + barWidth / 2}" y="${firstOptionY - 15}" font-size="26" font-weight="700" fill="#00BFFF" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif">${option2Name}</text>

        <!-- Background bar (semi-transparent dark) -->
        <rect x="${horizontalMargin + barWidth + columnSpacing}" y="${firstOptionY}" width="${barWidth}" height="${barHeight}" rx="12" fill="rgba(26, 26, 46, 0.8)"/>

        <!-- Colored bar showing percentage -->
        <rect x="${horizontalMargin + barWidth + columnSpacing}" y="${firstOptionY}" width="${(barWidth * percentage2) / 100}" height="${barHeight}" rx="12" fill="#00BFFF"/>

        <!-- Percentage and votes (below the bar) -->
        <text x="${horizontalMargin + barWidth + columnSpacing + barWidth / 2}" y="${firstOptionY + barHeight + 25}" font-size="24" font-weight="600" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif">${percentage2}% · ${votes2} ${votes2 === 1 ? "vote" : "votes"}</text>
      </g>
    `);

    // For Next.js App Router, we'll reference the background image from the public folder
    const backgroundImageSrc = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://sporefall.com'}/og-image-bg.png`;

    // Check if the background image exists by attempting to construct the SVG with image reference
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Background image or fallback -->
        <image x="0" y="0" width="${width}" height="${height}" href="${backgroundImageSrc}" preserveAspectRatio="xMidYMid slice" opacity="0.3" />

        <!-- Main overlay for better contrast -->
        <rect width="${width}" height="${height}" fill="#000000" opacity="0.3"/>

        <!-- Question at top (center aligned) -->
        <text x="${width / 2}" y="${questionY}" font-size="38" font-weight="bold" fill="#C2FF02" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">
          ${displayQuestion}
        </text>

        <!-- Logo in middle (center aligned) -->
        <text x="${width / 2}" y="${logoY}" font-size="72" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" fill="#C2FF02" dominant-baseline="middle">
          📊
        </text>

        <!-- Option bars (center aligned) -->
        <g font-family="Arial,Helvetica,sans-serif">
          ${optionBars.join("")}
        </g>

        <!-- Total Votes -->
        <text x="${width / 2}" y="${height - verticalMargin - 110}" font-size="32" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">Total Votes: ${totalVotes}</text>

        <!-- Vote text -->
        <text x="${width / 2}" y="${height - verticalMargin - 60}" font-size="34" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">#RESISTOREVOLVE</text>

        <!-- Poll Application -->
        <text x="${width / 2}" y="${height - verticalMargin - 10}" font-size="30" font-weight="normal" fill="#E5E7EB" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">SPOREFALL.COM</text>
      </svg>
    `;

    // Convert to PNG if requested for better social media compatibility
    if (format === "png") {
      try {
        const pngBuffer = await sharp(Buffer.from(svg))
          .png({
            quality: 80,
            compressionLevel: 9,
          })
          .toBuffer();

        return new Response(pngBuffer, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=300",
            "Content-Encoding": "gzip",
          },
        });
      } catch (error) {
        console.error("Error converting SVG to PNG:", error);
        // Fall back to SVG if conversion fails
        return new Response(svg, {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=60",
            "Content-Encoding": "gzip",
          },
        });
      }
    }

    // Default SVG response
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=60",
        "Content-Encoding": "gzip",
      },
    });
  } catch (error) {
    console.error("Error generating poll image:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    return new Response(
      `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
         <rect width="1200" height="630" fill="#000"/>
         <text x="600" y="315" font-size="32" font-family="Arial" fill="#C2FF02" text-anchor="middle" alignment-baseline="middle">
           Error: ${error.message}
         </text>
       </svg>`,
      {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=60",
          "Content-Encoding": "gzip",
        },
      },
    );
  }
}
*/

// Return a basic SVG with the background color and text

import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const imagePath = path.join(
      process.cwd(),
      "public",
      "og-image-bg.png"
    );

    const inputBuffer = await readFile(imagePath);

    const optimizedBuffer = await sharp(inputBuffer)
      .resize(1200, 630)
      .jpeg({
        quality: 10,      // 🔥 sweet spot
        progressive: true
      })
      .toBuffer();

    return new Response(optimizedBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Length": optimizedBuffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("OG image error:", error);
    return new Response("OG image error", { status: 500 });
  }
}