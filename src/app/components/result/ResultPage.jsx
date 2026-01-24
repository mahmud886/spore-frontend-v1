import SporeBlogSection from "../shared/SporeBlogSection";
import { Wrapper } from "../shared/Wrapper";
import CountdownSection from "./CountdownSection";
import HeroHeader from "./HeroHeader";
import MobilizeNetworkCard from "./MobilizeNetworkCard";
import PollResultSection from "./PollResultSection";
import ProductsSection from "./ProductsSection";

export default function ResultPage({
  heroHeaderProps,
  countdownProps,
  pollResultProps,
  identityArtifactProps,
  userProfileProps,
  productsProps,
  blogProps,
}) {
  return (
    <>
      <Wrapper>
        <div id="home">
          <HeroHeader {...heroHeaderProps} />
        </div>

        <PollResultSection {...pollResultProps} />
        <CountdownSection {...countdownProps} />
        <MobilizeNetworkCard
          title="Share to unlock the next drop"
          description="Broadcast this signal. A hidden reward unlocks at the end."
          platforms={[
            "FACEBOOK",
            "WHATSAPP",
            "DISCORD",
            "TELEGRAM",
            "LINKEDIN",
            "X_SHARE",
            "THREADS",
            "TIKTOK",
            "IG_STORY",
            "REDDIT",
          ]}
        />
        {/* <IdentityArtifactSection {...identityArtifactProps} /> */}
        {/* <UserProfileSection {...userProfileProps} /> */}
        <div id="shop">
          <ProductsSection {...productsProps} />
        </div>
        <div id="spore-log">
          <SporeBlogSection {...blogProps} />
        </div>
      </Wrapper>
    </>
  );
}
