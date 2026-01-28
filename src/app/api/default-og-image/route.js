import sharp from "sharp";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";
export const preferredRegion = "home";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const size = searchParams.get("size") || "facebook";
    const format = searchParams.get("format") || "svg";

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

    // Create simple background with solid color
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Simple solid background -->
        <rect width="${width}" height="${height}" fill="#0f0f23"/>

        <!-- Main overlay for better contrast -->
        <rect width="${width}" height="${height}" fill="#000000" opacity="0.3"/>

        <!-- Question at top (center aligned) -->
        <text x="${width / 2}" y="${questionY}" font-size="38" font-weight="bold" fill="#C2FF02" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">
          Welcome to SPORE FALL
        </text>

        <!-- Logo in middle (center aligned) -->
        <text x="${width / 2}" y="${logoY}" font-size="72" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" fill="#C2FF02" dominant-baseline="middle">
          🧬
        </text>

        <!-- Subtitle -->
        <text x="${width / 2}" y="${logoY + 80}" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">
          The city of Lionara is quarantined
        </text>

        <!-- Spore text -->
        <text x="${width / 2}" y="${height - verticalMargin - 110}" font-size="32" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">A spore is rewriting human fate</text>

        <!-- Hashtag -->
        <text x="${width / 2}" y="${height - verticalMargin - 60}" font-size="34" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" dominant-baseline="middle">#RESISTOREVOLVE</text>

        <!-- Site name -->
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
          },
        });
      } catch (error) {
        console.error("Error converting SVG to PNG:", error);
        // Fall back to SVG if conversion fails
        return new Response(svg, {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=60",
          },
        });
      }
    }

    // Default SVG response
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    console.error("Error generating default OG image:", error);

    return new Response(
      `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
         <rect width="1200" height="630" fill="#000"/>
         <text x="600" y="315" font-size="32" font-family="Arial" fill="#C2FF02" text-anchor="middle" alignment-baseline="middle">
           Default Image Error
         </text>
       </svg>`,
      {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=60",
        },
      },
    );
  }
}