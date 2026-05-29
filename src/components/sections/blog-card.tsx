import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Card className="group h-full overflow-hidden border-border/60 transition-all hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" aria-hidden />
              {new Date(post.createdAt).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Leer artículo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
