"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blog";
import { Clock, BookOpen, Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [filter, setFilter] = useState<'all' | 'aesthetics' | 'functional' | 'longevity' | 'regenerative'>('all');

  const filteredPosts = blogPosts.filter(
    (post) => filter === 'all' || post.category === filter
  );

  return (
    <main className="bg-primary-light min-h-screen pb-20">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary-dark text-primary-light py-24 sm:py-32 overflow-hidden z-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/blog-hero.png')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold font-sans block">
            Clinical Insights Hub
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Science & Rejuvenation Blog
          </h1>
          <div className="h-0.5 w-16 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Physician-authored educational guides detailing exosome therapies, gut microbiome health, and hormone optimization science.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">

        {/* Categories Selector */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {[
            { id: "all", name: "All Articles" },
            { id: "aesthetics", name: "Aesthetic Science" },
            { id: "functional", name: "Functional Medicine" },
            { id: "longevity", name: "Hormones & Longevity" },
            { id: "regenerative", name: "Regenerative Aesthetics" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 border cursor-pointer ${
                filter === tab.id
                  ? "bg-primary-dark border-primary-dark text-primary-light shadow-md"
                  : "bg-white border-beige hover:border-gold text-primary-dark"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: BlogPost) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-750 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 bg-primary-dark/85 backdrop-blur-sm text-gold text-[9px] uppercase tracking-widest font-semibold py-1.5 px-3 rounded-full border border-gold/20">
                  {post.category === "aesthetics" && "Aesthetics"}
                  {post.category === "functional" && "Functional"}
                  {post.category === "regenerative" && "Regenerative"}
                  {post.category === "longevity" && "Longevity"}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-slate/85 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-gold" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary-dark group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-beige flex items-center justify-between">
                  {/* Author micro profile */}
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold/20">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-primary-dark">{post.author.name.split(",")[0]}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-primary-dark hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    Read Article
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
