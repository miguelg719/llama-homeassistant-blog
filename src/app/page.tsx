import Container from "@/app/_components/container";
import { getPostBySlug } from "@/lib/api";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  // Get your single post - replace 'your-post-slug' with your actual post slug
  const post = getPostBySlug('hello-world');
  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
