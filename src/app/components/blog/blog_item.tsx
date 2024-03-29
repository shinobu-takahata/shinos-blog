'use client';
import { Blog } from '@/app/types/blog';
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = (content:Blog) => {
    return (
            <Link  href={`blog/${content.id}`}>
                <Image
                    src={content.eyecatch.url}
                    width={1000}
                    height={48}
                    className="object-cover overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm h-3/5"
                    alt=""
                />
                <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600">{content.createdAt}</span>
                </p>
                <div className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                    {content.title}
                </div>
                <p className="mb-2 text-gray-700">
                </p>
                </div>
            </Link>
    );
};

export default BlogItem;