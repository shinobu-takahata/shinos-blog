import Image from 'next/image'
import BlogItem  from './components/blog/blog_item'
import { client } from './libs/client';
import { Blog } from './types/blog';

const  Home = async() => {
  const data = await client.get({ endpoint: 'blogs' });
  const blogs:Blog[] = data.contents;

  return (
    <main className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
          {
            blogs.map((element, index) => {
              return <BlogItem key={index} {...element}/>
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Home;