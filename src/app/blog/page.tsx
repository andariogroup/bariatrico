import { PageHeader } from "@/components/sections/page-header";
import { BlogCard } from "@/components/sections/blog-card";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";
import { blogPosts, getBlogCategories } from "@/content/blog";
import { images } from "@/utils/images";

export const metadata = createMetadata({
  title: "Blog Médico | Educación en Cirugía Bariátrica",
  description:
    "Artículos educativos sobre cirugía bariátrica, nutrición postoperatoria, mitos y más. Información médica confiable.",
  path: "/blog",
});

const postsWithImages = blogPosts.map((post) => ({
  ...post,
  image:
    images.blog[post.slug as keyof typeof images.blog] ?? images.blog.default,
}));

export default function BlogPage() {
  const categories = getBlogCategories();

  return (
    <>
      <PageHeader
        title="Blog Médico"
        description="Información confiable sobre cirugía bariátrica, nutrición y bienestar."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-sm">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {postsWithImages.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
