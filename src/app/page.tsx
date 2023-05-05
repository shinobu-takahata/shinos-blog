import Image from 'next/image'
import BlogItem  from './components/blog/blog_item'
import { client } from './libs/client';
import { Blog } from './types/blog';

const  Home = async() => {
  const data = await client.get({ endpoint: 'blogs' });
  const blogs:Blog[] = data.contents;
  console.log("datadatadata");
  console.log(blogs);
  
  console.log("datadatadata");
  const contents = [
    {
      id:1,
      img_url: "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      at: "— 28 Dec 2020",
      title: "Visit the East",
      body: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
    },
    {
      id:2,
      img_url: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      at: "— 28 Dec 2020",
      title: "Simple is better",
      body: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
    },
    {
      id:3,
      img_url: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      at: "— 28 Dec 2020",
      title: "Film It!",
      body: "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
    },
  ]
  return (
    <main className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            contents.map((element, index) => {
              return <BlogItem key={index} {...element}/>
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Home;