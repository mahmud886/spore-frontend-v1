import { createClient } from "@/lib/supabase-server";

/**
 * Generate dynamic metadata for different page types
 * @param {string} pathname - Current URL pathname
 * @param {URLSearchParams} searchParams - URL search parameters
 * @param {Object} defaultMetadata - Default metadata values
 * @returns {Object} Metadata object with Open Graph tags
 */
export async function generateDynamicMetadata(pathname, searchParamsPromise, defaultMetadata = {}) {
  // Await the searchParams Promise
  const searchParams = await searchParamsPromise;

  // Base metadata with defaults
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com";
  const baseMetadata = {
    title: defaultMetadata.title || "SPORE FALL | Sci-Fi Narrative Series",
    description: defaultMetadata.description || "The city of Lionara is quarantined. A spore is rewriting human fate.",
    openGraph: {
      title: defaultMetadata.title || "SPORE FALL | Sci-Fi Narrative Series",
      description:
        defaultMetadata.description || "The city of Lionara is quarantined. A spore is rewriting human fate.",
      url: `${baseUrl}${pathname}`,
      type: "website",
      locale: "en_US",
      siteName: "SPORE FALL",
      images: [
        {
          url: `${baseUrl}/api/default-og-image?size=facebook`,
          width: 1200,
          height: 630,
          type: "image/svg+xml",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultMetadata.title || "SPORE FALL | Sci-Fi Narrative Series",
      description:
        defaultMetadata.description || "The city of Lionara is quarantined. A spore is rewriting human fate.",
      images: [`${baseUrl}/api/default-og-image?size=twitter`],
    },
    ...defaultMetadata,
  };

  // Handle specific route patterns
  if (pathname === "/result") {
    // Extract episode or poll ID from URL parameters
    const episodeId = searchParams?.episode || null;
    const pollId = searchParams?.poll || searchParams?.pollId || null;

    // Extract from UTM content parameter (e.g., poll_f07ad07b-3d30-4d3e-a080-bfe4819fba90)
    const utmContent = searchParams?.utm_content || null;
    let pollIdFromUtm = null;
    if (utmContent && utmContent.startsWith("poll_")) {
      pollIdFromUtm = utmContent.replace("poll_", "");
    }

    // Determine the actual poll ID to use
    const finalPollId = pollId || pollIdFromUtm;

    try {
      if (finalPollId) {
        // Fetch specific poll data for dynamic metadata
        const supabase = await createClient();
        const { data: pollData, error } = await supabase
          .from("polls")
          .select(
            `
            id,
            title,
            description,
            poll_options(
              name,
              vote_count
            )
          `,
          )
          .eq("id", finalPollId)
          .single();

        if (!error && pollData) {
          const options = pollData.poll_options || [];
          const totalVotes = options.reduce((sum, option) => sum + (option.vote_count || 0), 0);
          const primaryOption = options.reduce(
            (max, option) => ((option.vote_count || 0) > (max.vote_count || 0) ? option : max),
            { name: "Choices", vote_count: 0 },
          );

          const voteNoun = totalVotes === 1 ? "vote" : "votes";
          const secondaryOption = options.find((opt) => opt.name !== primaryOption.name) || {
            name: "Other",
            vote_count: 0,
          };

          // Build canonical URL with query parameters
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com";
          const canonicalUrl = `${baseUrl}${pathname.replace(/\/+/g, "/")}${pathname.includes("?") ? "&" : "?"}utm_content=poll_${pollData.id}`;

          return {
            title: `${pollData.title} - SporeFall Results`,
            description: `Poll Results: ${primaryOption.name} leads with ${primaryOption.vote_count} votes vs ${secondaryOption.name} with ${secondaryOption.vote_count} votes. Total: ${totalVotes} ${voteNoun}. City factions compete.`,
            openGraph: {
              title: `${pollData.title} - SporeFall Results`,
              description: `Poll Results: ${primaryOption.name} leads with ${primaryOption.vote_count} votes vs ${secondaryOption.name} with ${secondaryOption.vote_count} votes. Total: ${totalVotes} ${voteNoun}. City factions compete.`,
              images: [
                {
                  url: `${baseUrl}/api/polls/${encodeURIComponent(pollData.id)}/image?size=facebook`,
                  width: 1200,
                  height: 630,
                  type: "image/svg+xml",
                },
              ],
              url: canonicalUrl,
              type: "website",
              locale: "en_US",
              siteName: "SPORE FALL",
              determiner: "",
            },
            twitter: {
              card: "summary_large_image",
              title: `${pollData.title} - SporeFall Results`,
              description: `Poll Results: ${primaryOption.name} leads with ${primaryOption.vote_count} votes vs ${secondaryOption.name} with ${secondaryOption.vote_count} votes. Total: ${totalVotes} ${voteNoun}. City factions compete.`,
              images: [`${baseUrl}/api/polls/${encodeURIComponent(pollData.id)}/image?size=twitter`],
            },
          };
        }
      } else if (episodeId) {
        // Fetch first available poll for episode (fallback for compatibility)
        const supabase = await createClient();
        const { data: pollList, error: episodePollError } = await supabase
          .from("polls")
          .select("id, title, poll_options(vote_count, name)")
          .eq("episode_id", episodeId)
          .eq("status", "LIVE")
          .limit(1)
          .maybeSingle(); // use single row - no square bracket index

        if (!episodePollError && pollList?.id) {
          const options = pollList.poll_options || [];
          const totalVotes = options.reduce((sum, option) => sum + (option.vote_count || 0), 0);
          const primaryOption = options.reduce(
            (max, option) => ((option.vote_count || 0) > (max.vote_count || 0) ? option : max),
            { name: "Choices", vote_count: 0 },
          );
          const secondaryOption = options.find((opt) => opt.name !== primaryOption.name) || {
            name: "Other",
            vote_count: 0,
          };
          const voteNoun = totalVotes === 1 ? "vote" : "votes";

          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com";
          const canonicalUrl = `${baseUrl}${pathname.replace(/\/+/g, "/")}${pathname.includes("?") ? "&" : "?"}episode=${episodeId}`;

          return {
            title: `Poll results - ${pollList.title?.toString()?.toUpperCase()}`,
            description: `Poll Results: ${primaryOption.name} leads with ${primaryOption.vote_count} votes vs ${secondaryOption.name} with ${secondaryOption.vote_count} votes. Total: ${totalVotes} ${voteNoun}. City factions compete.`,
            openGraph: {
              title: `Poll results - ${pollList.title?.toString()?.toUpperCase()}`,
              description: `Poll Results: ${primaryOption.name} leads with ${primaryOption.vote_count} votes vs ${secondaryOption.name} with ${secondaryOption.vote_count} votes. Total: ${totalVotes} ${voteNoun}. City factions compete.`,
              images: [
                {
                  url: `${baseUrl}/api/polls/${pollList.id}/image?size=facebook`,
                  width: 1200,
                  height: 630,
                  type: "image/svg+xml",
                },
              ],
              url: canonicalUrl,
              type: "website",
              locale: "en_US",
              siteName: "SPORE FALL",
              determiner: "",
            },
            twitter: {
              card: "summary_large_image",
              title: `Poll results - ${pollList.title?.toString()?.toUpperCase()}`,
              description: `Poll Results: ${primaryOption.name} leads with ${primaryOption.vote_count} votes vs ${secondaryOption.name} with ${secondaryOption.vote_count} votes. Total: ${totalVotes} ${voteNoun}. City factions compete.`,
              images: [`${baseUrl}/api/polls/${pollList.id}/image?size=twitter`],
            },
          };
        }
      }
    } catch (error) {
      console.error("Error generating dynamic metadata:", error);
      // Fall through to default metadata
    }
  }

  // Return base metadata for all other cases
  return baseMetadata;
}
