import { notFound } from 'next/navigation'
import {client} from '../../libs/client';
import { Blog } from '@/app/types/blog';

type PageProps = {
  params: {
    blogId: string
  }
}

// ブログ詳細
const BlogDetailPage = async ({ params }: PageProps) => {
    console.log("testsssssssssssssssssssssssss");    
    return (
        <div className="prose max-w-screen-md mx-auto">
            aaaaaaaaa
        {/* <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
            dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
            }}
        /> */}
        </div>
    );
}

export default BlogDetailPage