import SporeBlogSection from "../shared/SporeBlogSection";
import { Wrapper } from "../shared/Wrapper";
import CountdownSection from "./CountdownSection";
import HeroHeader from "./HeroHeader";
import IdentityArtifactSection from "./IdentityArtifactSection";
import PollResultSection from "./PollResultSection";
import ProductsSection from "./ProductsSection";
import UserProfileSection from "./UserProfileSection";

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
        <HeroHeader {...heroHeaderProps} />

        <PollResultSection {...pollResultProps} />
        <CountdownSection {...countdownProps} />
        <IdentityArtifactSection {...identityArtifactProps} />
        <UserProfileSection {...userProfileProps} />
        <ProductsSection {...productsProps} />
        <SporeBlogSection {...blogProps} />
      </Wrapper>
    </>
  );
}
