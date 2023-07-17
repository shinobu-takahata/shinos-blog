import { client } from './libs/client';
import { Blog } from './types/blog';
import Aside from './components/top/aside';
import Main from './components/top/main';

const  Home = async() => {
  const data = await client.get({ endpoint: 'blogs' });
  const blogs:Blog[] = data.contents;

  return (
    <div className='grid grid-cols-4'>
      <Main blogs={blogs}/>
      <Aside />
    </div>
  );
};

export default Home;