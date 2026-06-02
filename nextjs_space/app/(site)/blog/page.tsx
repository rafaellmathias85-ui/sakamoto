import { BlogListClient } from './blog-list-client'
import { staticBlogPosts } from '@/lib/static-blog'

export const metadata = {
  title: 'Blog',
  description: 'Dicas e artigos sobre saúde bucal da Odontologia Sakamoto.',
}

export default function BlogPage() {
  return <BlogListClient posts={staticBlogPosts} />
}
