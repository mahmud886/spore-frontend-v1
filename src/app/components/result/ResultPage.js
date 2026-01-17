import SporeBlogSection from '../shared/SporeBlogSection';
import CountdownSection from './CountdownSection';
import HeroHeader from './HeroHeader';
import IdentityArtifactSection from './IdentityArtifactSection';
import PollResultSection from './PollResultSection';
import ProductsSection from './ProductsSection';
import UserProfileSection from './UserProfileSection';

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
      <section className="text-center mb-24">
        <HeroHeader {...heroHeaderProps} />
        <CountdownSection {...countdownProps} />
      </section>
      <PollResultSection {...pollResultProps} />
      <IdentityArtifactSection {...identityArtifactProps} />
      <UserProfileSection {...userProfileProps} />
      <ProductsSection {...productsProps} />
      <SporeBlogSection {...blogProps} />
    </>
  );
}
