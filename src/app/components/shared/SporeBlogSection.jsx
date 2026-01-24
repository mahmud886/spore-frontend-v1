import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { SectionTitle } from "./SectionTitle";

const defaultBlogPosts = [
  {
    image: "/assets/images/blogs/blog-1.png",
    imageAlt: "Mountain path",
    id: "XYZ_#3255AD",
    timestamp: "2 hour ago",
    title: "Patient Zero Identified",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
  {
    image: "/assets/images/blogs/blog-2.png",
    imageAlt: "Abstract wood rings",
    id: "XYZ_#3255AD",
    timestamp: "2 hour ago",
    title: "Wall Construction",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
  {
    image: "/assets/images/blogs/blog-3.png",
    imageAlt: "Field landscape",
    id: "CONTAINMENT",
    timestamp: "2 hour ago",
    title: "Multiation Rate",
    excerpt:
      "Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.",
    link: "#",
  },
  {
    image: "/assets/images/blogs/blog-1.png",
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
