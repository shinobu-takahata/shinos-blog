import Image from 'next/image'

const BlogItem = (content:any) => {
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
            src={content.img_url}
            className="object-cover w-full h-48"
            alt=""
            />
            <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
                >
                traveling
                </a>
                <span className="text-gray-600">{content.at}</span>
            </p>
            <a
                href="/"
                aria-label="Category"
                title={content.title}
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
                {content.title}
            </a>
            <p className="mb-2 text-gray-700">
                {content.body}
            </p>
            </div>
        </div>
    );
}

export default BlogItem;