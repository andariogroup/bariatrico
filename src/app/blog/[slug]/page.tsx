import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata, articleSchema } from "@/lib/seo";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { images } from "@/utils/images";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: images.blog[slug as keyof typeof images.blog] ?? images.blog.default,
  });
}

function renderMarkdownContent(content: string) {
  const sections = content.split("\n## ").map((section, i) => {
    if (i === 0) {
      return section.split("\n\n").map((p, j) =>
        j === 0 && !p.startsWith("#") ? (
          <p key={j} className="text-muted-foreground leading-relaxed">
            {p}
          </p>
        ) : p.startsWith("## ") ? (
          <h2 key={j} className="mt-8 text-xl font-bold">
            {p.replace("## ", "")}
          </h2>
        ) : (
          <p key={j} className="mt-4 text-muted-foreground leading-relaxed">
            {p}
          </p>
        )
      );
    }
    const [heading, ...body] = section.split("\n");
    return (
      <div key={i}>
        <h2 className="mt-8 text-xl font-bold">{heading}</h2>
        {body.join("\n").split("\n\n").map((p, j) => (
          <p key={j} className="mt-4 text-muted-foreground leading-relaxed">
            {p.replace(/\*\*(.*?)\*\*/g, "$1")}
          </p>
        ))}
      </div>
    );
  });
  return sections;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const postImage =
    images.blog[slug as keyof typeof images.blog] ?? images.blog.default;

  const schema = articleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    image: postImage,
    createdAt: post.createdAt,
    author: post.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article>
        <div className="relative aspect-[21/9] bg-muted">
          <Image
            src={postImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Volver al blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" aria-hidden />
                {new Date(post.createdAt).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-sm text-muted-foreground">· {post.author}</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <div className="prose prose-slate mt-8 max-w-none">
              {renderMarkdownContent(post.content)}
            </div>
          </FadeIn>
        </div>
      </article>

      <CTASection />
    </>
  );
}
