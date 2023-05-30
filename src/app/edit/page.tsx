// 'use client';
// import { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export default function Home() {
//   const [content, setContent] = useState('');

//   const handleContentChange = (value:any) => {
//     setContent(value);
//   };

//   const modules = {
//     toolbar: [
//         [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//         [{size: []}],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [{'list': 'ordered'}, {'list': 'bullet'}, 
//          {'indent': '-1'}, {'indent': '+1'}],
//         ['link', 'image', 'video'],
//         ['clean']
//     ],
//     clipboard: {
//         // toggle to add extra line breaks when pasting HTML:
//         matchVisual: false,
//     }
//   };

//   const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video'
//   ];

//   return (
//     <div>
//         <ReactQuill 
//             value={content}
//             modules={modules}
//             formats={formats}
//             onChange={handleContentChange} 
//         />
//     </div>
//   );
// }