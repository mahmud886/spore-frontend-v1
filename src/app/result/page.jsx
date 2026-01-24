"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResultPage from "../components/result/ResultPage";

function ResultContent() {
  const searchParams = useSearchParams();
  const episodeId = searchParams.get("episode");
  const [pollData, setPollData] = useState(null);
  const [loading, setLoading] = useState(!!episodeId);

  // Fetch poll data by episode ID
  useEffect(() => {
    if (!episodeId) {
      setLoading(false);
      return;
    }

    const fetchPollData = async () => {
      try {
        console.log("Fetching poll data for episode:", episodeId);
        const response = await fetch(`/api/polls/episode/${encodeURIComponent(episodeId)}`);

        if (!response.ok) {
          console.error("Failed to fetch poll data");
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Poll data received:", data);

        if (data.polls && data.polls.length > 0) {
          // Get the first LIVE poll or the first poll
          const poll = data.polls.find((p) => p.status === "LIVE") || data.polls[0];
          setPollData(poll);
        }
      } catch (error) {
        console.error("Error fetching poll data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPollData();
  }, [episodeId]);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  // Calculate poll result props from pollData
  const getPollResultProps = () => {
    if (!pollData || !pollData.options || pollData.options.length < 2) {
      // Default props if no poll data
      return {
        faction1: {
          name: "EVOLVE",
          subLabel: "BASTION PARTY",
          percentage: 50,
        },
        faction2: {
          name: "RESIST",
          subLabel: "THE NEW ALLIANCE",
          percentage: 50,
        },
        centerLabel: "THE CITY STANDS DIVIDED",
      };
    }

    const option1 = pollData.options[0];
    const option2 = pollData.options[1];

    const votes1 = option1.votes || option1.vote_count || 0;
    const votes2 = option2.votes || option2.vote_count || 0;
    const totalVotes = votes1 + votes2;

    const percentage1 = totalVotes > 0 ? Math.round((votes1 / totalVotes) * 100) : 50;
    const percentage2 = totalVotes > 0 ? Math.round((votes2 / totalVotes) * 100) : 50;

    return {
      faction1: {
        name: (option1.text || option1.option_text || "EVOLVE").toUpperCase(),
        subLabel: option1.description || "BASTION PARTY",
        percentage: percentage1,
      },
      faction2: {
        name: (option2.text || option2.option_text || "RESIST").toUpperCase(),
        subLabel: option2.description || "THE NEW ALLIANCE",
        percentage: percentage2,
      },
      centerLabel: pollData.question || pollData.title || "THE CITY STANDS DIVIDED",
    };
  };

  return <ResultPage pollResultProps={getPollResultProps()} />;
}

export default function Result() {
  return (
    <Suspense fallback={<ResultPage />}>
      <ResultContent />
    </Suspense>
  );
}
