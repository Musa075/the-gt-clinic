import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blog";
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | GT Clinic Clinical Insights`,
    description: post.metaDesc,
    openGraph: {
      title: `${post.title} | Dr. Farooqui, MD`,
      description: post.metaDesc,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-primary-light min-h-screen pt-24 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-gold hover:text-primary-dark transition-colors duration-300"
          >
            <ChevronLeft size={14} />
            Back to Insights
          </Link>
        </div>

        {/* Article Meta */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-slate/85 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-gold" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-gold" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-dark leading-tight">
            {post.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-3 pt-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-primary-dark">{post.author.name}</p>
              <p className="text-[10px] text-slate/85">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Main Featured Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-gold/10 shadow-lg mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-primary-dark prose-p:text-slate prose-p:leading-relaxed prose-blockquote:border-gold prose-blockquote:bg-beige/25 prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:not-italic font-sans text-sm sm:text-base space-y-6">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6"
          />
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-beige">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-semibold text-slate bg-white border border-beige px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-gold/15 shadow-sm space-y-6 text-center">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-dark">
            Consult Directly with Dr. Farooqui
          </h3>
          <p className="text-slate text-sm max-w-xl mx-auto leading-relaxed">
            Have a question about {post.tags[0]} or want to evaluate how regenerative therapies could support your health? Schedule an individual clinical assessment.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-primary-dark hover:bg-gold text-primary-light hover:text-primary-dark font-sans text-xs tracking-wider uppercase font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow cursor-pointer"
            >
              Book My Consultation
              <ArrowRight size={12} className="text-gold" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
