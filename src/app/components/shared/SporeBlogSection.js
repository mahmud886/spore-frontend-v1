import BlogCard from './BlogCard';

const defaultBlogPosts = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC45c8Mo8wNG4I85SKtg9kS82tantC4iRBJq3kkiuxQn3XpeUQc4S6yfA3Jplg_rab4pynZzMHM9mf47ctn7Lt9U9gFTVKMRHkQf2Gz_0x9JkXx_MHPEeI7W6nJz-hpoZVK71pidQcfBcSAIwh6AvbORRRScKk8Xk6KOAav1vtCdaz9sbV_qmSg9sTQJIaR2kHAjahVZZcSPkzgITf7os4wlWRxiw2wJeqy2T97seIhMP3ctRJmATzSCpVUT7kPfDqHr5JQlaaERG4',
    imageAlt: 'Mountain path',
    id: 'XYZ_#3255AD',
    timestamp: '2 hour ago',
    title: 'Patient Zero Identified',
    excerpt:
      'Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.',
    link: '#',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApC85PY8s0mFa8ZAaWhqsqK8eXckVYC4qbsj3xXAWbXKnlRNMfYld1MajM_yB3j3wCzO2lBOWj7GjVBZRtj7JX1gJFkp5Z7e_YRqMs6TH7uU8NnpkGRifK-MDjFTrEjh3OA179438rOqdNDTzR5-AeVESA4SRgRuDexKnhnszamAGFpLKjO55QIALgQJi3z4cgfJ0163AqJNeosW02PthJZZl-i9HnKfeg4l1klad6xatWKbtqEWMJwAqSAFebgfetOo_sJJhOyGI',
    imageAlt: 'Abstract wood rings',
    id: 'XYZ_#3255AD',
    timestamp: '2 hour ago',
    title: 'Wall Construction',
    excerpt:
      'Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.',
    link: '#',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD1Kkv8urDU7Ls2Ky2VlEO77_mquFjTwaF8cdYUOAKUe52n2JsfoEEzhQTWoA7RlBLPRSKgZ5vEPhQCb-gF9jmoD8c-ZN09agmn5NslerTku8l7CPoLUcjw4tfAyHLTB7-1U0O39jLX77TSLoMJslNAYcd0FATHiPLCjqSMYE1BvsyDz05HiAeCq9ygiP0OWlQrFjNaAlBMi2yUfC0a1c4unE4RdFVCu9cq3RFpoKRPfjI7612a3Vh-Ja32H3-S3rkMhQu0DTUx2I',
    imageAlt: 'Field landscape',
    id: 'CONTAINMENT',
    timestamp: '2 hour ago',
    title: 'Multiation Rate',
    excerpt:
      'Surveillance drones have captured footage of the initial contagion site. Containment protocols were... delayed.',
    link: '#',
  },
];

export default function SporeBlogSection({
  posts = defaultBlogPosts,
  title = 'Spore Logs // Field Notes',
  className = 'mb-24',
  sectionClassName = '',
}) {
  return (
    <section className={`${className} ${sectionClassName}`}>
      <div className="flex items-center space-x-4 mb-8">
        <span className="text-primary text-xl">||</span>
        <h2 className="text-3xl font-display font-bold uppercase tracking-tight">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
