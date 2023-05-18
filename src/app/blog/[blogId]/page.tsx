import { notFound } from 'next/navigation';
import {client} from '../../libs/client';
import { Blog } from '@/app/types/blog';

type PageProps = {
  params: {
    blogId: string
  }
}

// ブログ詳細
const BlogDetailPage = async ({ params }: PageProps) => {
    const data = await client.get({ endpoint: "blogs", contentId:params.blogId });

    console.log("testsssssssssssssssssssssssss");    
    return (
      <div className="prose max-w-screen-md mx-auto p-10">
        <h1>{data.title}</h1>
        <p>{data.publishedAt}</p>
        <div
            dangerouslySetInnerHTML={{
            __html: `${data.content}`,
            }}
        />
      </div>
    );
};

export default BlogDetailPage;