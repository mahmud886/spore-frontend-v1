import ResultPage from "@/app/components/result/ResultPage";
import { generateDynamicMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import ResultContent from "./ResultContent";

// Generate dynamic metadata for the result page
export async function generateMetadata({ searchParams }) {
  const dynamicMetadata = await generateDynamicMetadata("/result", searchParams);

  // Add metadataBase to the dynamic metadata
  return {
    ...dynamicMetadata,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sporefall.com"),
  };
}

// Server component that wraps the client component
export default function ResultPageServer({ searchParams }) {
  return (
    <Suspense fallback={<ResultPage />}>
      <ResultContent searchParams={searchParams} />
    </Suspense>
  );
}
