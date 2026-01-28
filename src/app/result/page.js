import ResultPage from "@/app/components/result/ResultPage";
import { generateDynamicMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import ResultContent from "./ResultContent";

// Generate dynamic metadata for the result page
export async function generateMetadata({ searchParams }) {
  const dynamicMetadata = await generateDynamicMetadata("/result", searchParams);

  // Add metadataBase to the dynamic metadata
  const result = {
    ...dynamicMetadata,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com"),
  };

  // Ensure explicit og:image is always present
  if (!result.openGraph?.images?.length) {
    result.openGraph = {
      ...result.openGraph,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com"}/api/default-og-image?size=facebook`,
          width: 1200,
          height: 630,
          type: "image/svg+xml",
        },
      ],
    };
  }

  return result;
}

// Server component that wraps the client component
export default async function ResultPageServer({ searchParams }) {
  // Properly await the searchParams Promise
  const resolvedSearchParams = await searchParams;

  const episodeId = resolvedSearchParams?.episode || null;
  const pollId = resolvedSearchParams?.poll || resolvedSearchParams?.pollId || null;
  const utmContent = resolvedSearchParams?.utm_content || null;

  return (
    <Suspense fallback={<ResultPage />}>
      <ResultContent episodeId={episodeId} pollId={pollId} utmContent={utmContent} />
    </Suspense>
  );
}
