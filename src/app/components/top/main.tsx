'use client';
import BlogItem from "../blog/blog_item";
import { Blog } from "@/app/types/blog";
import { useSearchContentsStore } from '../../state/store';

// main
const Main = (props:any) => {
    const searchContents = useSearchContentsStore((state) => state.searchContents);
    const blogs = searchContents.length ? searchContents : props.blogs;

    return (
        <main className='col-span-4 sm:col-span-4 lg:col-span-3'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-24 lg:py-20">
                <div className="grid gap-8 sm:grid-cols-2 sm:max-w-lg sm:mx-auto md:max-w-full">
                    {
                        blogs.map((element:Blog, index:any) => {
                            return <BlogItem key={index} {...element}/>;
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default Main;