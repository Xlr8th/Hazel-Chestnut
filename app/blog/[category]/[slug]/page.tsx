import { blogPosts } from "@/lib/blogPosts";
import { notFound } from "next/navigation";
import BlogContent from "./components/BlogContent";
import Comments from "./components/Comments";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  // ✅ unwrap the promise
  const { category, slug } = await params;

  const post = blogPosts.find(
    (post) =>
      post.category.toLowerCase() === category.toLowerCase() &&
      post.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!post) {
    notFound();
  }

  // ✅ create a unique key per blog post
  const commentKey = `${category}-${slug}`;

  return (
    <main className="container py-5">
      <BlogContent
        title={post.title}
        author={post.author}
        date={post.date}
        image={post.image}
        content={post.content}
      />


      {/* ✅ pass unique identifier */}
      <Comments slug={commentKey} />
    </main>
  );
}
