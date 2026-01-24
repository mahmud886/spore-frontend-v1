"use client";

import BlogCard from "./BlogCard";
import Carousel from "./Carousel";
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
      <Carousel
        items={posts}
        renderItem={(post, index) => <BlogCard key={index} post={post} />}
        itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        titleComponent={<SectionTitle>{title}</SectionTitle>}
      />
    </section>
  );
}
