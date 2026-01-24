import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { SectionTitle } from "./SectionTitle";

const defaultBlogPosts = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC45c8Mo8wNG4I85SKtg9kS82tantC4iRBJq3kkiuxQn3XpeUQc4S6yfA3Jplg_rab4pynZzMHM9mf47ctn7Lt9U9gFTVKMRHkQf2Gz_0x9JkXx_MHPEeI7W6nJz-hpoZVK71pidQcfBcSAIwh6AvbORRRScKk8Xk6KOAav1vtCdaz9sbV_qmSg9sTQJIaR2kHAjahVZZcSPkzgITf7os4wlWRxiw2wJeqy2T97seIhMP3ctRJmATzSCpVUT7kPfDqHr5JQlaaERG4",
    imageAlt: "Mountain path",
    id: "XYZ_#3255AD",
    timestamp: "2 hour ago",
    title: "Patient Zero Identified",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApC85PY8s0mFa8ZAaWhqsqK8eXckVYC4qbsj3xXAWbXKnlRNMfYld1MajM_yB3j3wCzO2lBOWj7GjVBZRtj7JX1gJFkp5Z7e_YRqMs6TH7uU8NnpkGRifK-MDjFTrEjh3OA179438rOqdNDTzR5-AeVESA4SRgRuDexKnhnszamAGFpLKjO55QIALgQJi3z4cgfJ0163AqJNeosW02PthJZZl-i9HnKfeg4l1klad6xatWKbtqEWMJwAqSAFebgfetOo_sJJhOyGI",
    imageAlt: "Abstract wood rings",
    id: "XYZ_#3255AD",
    timestamp: "2 hour ago",
    title: "Wall Construction",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD1Kkv8urDU7Ls2Ky2VlEO77_mquFjTwaF8cdYUOAKUe52n2JsfoEEzhQTWoA7RlBLPRSKgZ5vEPhQCb-gF9jmoD8c-ZN09agmn5NslerTku8l7CPoLUcjw4tfAyHLTB7-1U0O39jLX77TSLoMJslNAYcd0FATHiPLCjqSMYE1BvsyDz05HiAeCq9ygiP0OWlQrFjNaAlBMi2yUfC0a1c4unE4RdFVCu9cq3RFpoKRPfjI7612a3Vh-Ja32H3-S3rkMhQu0DTUx2I",
    imageAlt: "Field landscape",
    id: "CONTAINMENT",
    timestamp: "2 hour ago",
    title: "Multiation Rate",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFa4jS2TmEI_MEE1oADVuf3cfgtR-YhJUy0GrRztu7j18HUMIIgjNinAyueqsFnZ53PslSzmL-Xe8LxprN-Ve5ASAon9UX7AyqS8LTQHa6WjV_nlx614Bu0h9rSOnEarBqC4GyG6LCYWuRThsZGwaNzDU1npR4CM0hRmRaEQp6XOLeYEjqPR7i8nSCgE2i7VDgFLnYyZ3Ezskd1tLe8tSpPm1-NHV4srrEJdqRT8gikpUuyACko4WLih0I745fcT8C15ZcO9pvBx8",
    imageAlt: "Mutation analysis",
    id: "MUTATION_001",
    timestamp: "4 min ago",
    title: "Mutation Rate",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
];

export default function SporeBlogSection({
  posts = defaultBlogPosts,
  title = "Spore Logs",
  className = "mb-24",
  sectionClassName = "",
}) {
  return (
    <section className={`${className} ${sectionClassName}`}>
      <div className="flex items-center justify-between mb-12">
        <SectionTitle>{title}</SectionTitle>
        <div className="flex gap-2 sm:gap-4 items-center">
          <button className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-colors bg-black/30">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="px-2 sm:px-4 py-1 sm:py-1.5 border-2 border-primary bg-primary text-black font-mono text-xs sm:text-sm tracking-widest rounded">
            1 OF 35
          </div>
          <button className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-colors bg-black/30">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.slice(0, 4).map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
