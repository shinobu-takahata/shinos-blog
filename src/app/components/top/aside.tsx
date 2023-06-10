import { useState } from "react";
import Image from 'next/image';

// aside
const Aside = () => {
  return (
    <aside className='col-span-4 lg:col-span-1 border-l-4'>
        <div className="m-4 mx-4 border-2 border-dotted rounded-md lg:h-[400px]">
            <div className=''>
                <Image
                    src={`/chandu.jpg`}
                    width={150}
                    height={12}
                    className="object-cover rounded-full block mt-4 mx-auto"
                    alt=""
                />
            </div>
            <div className="text-center font-bold text-gray-400">
                痩せたい管理人
            </div>
            <div className='mt-3 mb-2 text-center'>
                チャンドゥとシャチが好き。<br/>
                フロントエンドは小鹿。 <br/>
                でかい犬を飼いたい。 <br/>
            </div>
        </div>

    </aside>
  );
};

export default Aside;