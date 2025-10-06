import Container from '@/components/Container';
import BlogCard from '@/components/BlogCard';
import type { Post } from '@/types/post';
import { postsMock } from '@/mocks/posts';

export default function Blog() {
  return (
    <section>
      <Container>
        <h1 className="text-page-title mb-8 md:mb-14">Blog</h1>
        {postsMock.map((post: Post) => (
          <BlogCard post={post} />
        ))}

      </Container>
    </section>
  );
}
