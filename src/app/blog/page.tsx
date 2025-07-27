// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

import SectionTitle from "@/components/shared/title/SectionTitle";

// import { useEffect, useRef, useState } from "react";

// const EditorPage = () => {
//   const editorRef = useRef<any>(null);
//   const [isEditorReady, setIsEditorReady] = useState(false);

//   useEffect(() => {
//     const initEditor = async () => {
//       const EditorJS = (await import("@editorjs/editorjs")).default;
//       const Header = (await import("@editorjs/header")).default;
//       const List = (await import("@editorjs/list")).default;
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       const Paragraph = (await import("editorjs-paragraph-with-alignment"))
//         .default;
//       const Quote = (await import("@editorjs/quote")).default;
//       const Code = (await import("@editorjs/code")).default;
//       const Table = (await import("@editorjs/table")).default;
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       const Checklist = (await import("@editorjs/checklist")).default;
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       const Undo = (await import("editorjs-undo")).default;

//       if (!editorRef.current) {
//         editorRef.current = new EditorJS({
//           holder: "editorjs",
//           tools: {
//             header: {
//               class: Header as any,
//               config: {
//                 placeholder: "Enter a header",
//                 levels: [1, 2, 3, 4, 5, 6],
//                 defaultLevel: 1,
//               },
//             },
//             list: {
//               class: List as any,
//               inlineToolbar: true,
//               config: {
//                 defaultStyle: "unordered",
//               },
//             },
//             checklist: {
//               class: Checklist,
//               inlineToolbar: true,
//             },
//             paragraph: {
//               class: Paragraph,
//               inlineToolbar: true,
//             },
//             quote: {
//               class: Quote,
//               inlineToolbar: true,
//               config: {
//                 quotePlaceholder: "Enter a quote",
//                 captionPlaceholder: "Quote's author",
//               },
//             },
//             code: {
//               class: Code,
//             },
//             table: {
//               class: Table as any,
//               inlineToolbar: true,
//               config: {
//                 rows: 2,
//                 cols: 3,
//                 maxRows: 5,
//                 maxCols: 5,
//               },
//             },
//           },
//           autofocus: true,
//           placeholder: "Start typing...",
//           onReady: () => {
//             new Undo({ editor: editorRef.current });
//           },
//         });

//         setIsEditorReady(true);
//       }
//     };

//     initEditor();

//     return () => {
//       if (editorRef.current && editorRef.current.destroy) {
//         editorRef.current.destroy();
//         editorRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div className="mx-auto max-w-4xl p-4">
//       <h1 className="mb-4 text-2xl font-bold">Blog Editor</h1>
//       <div id="editorjs" className="rounded border p-4 shadow" />
//       {!isEditorReady && <p className="text-gray-500">Loading editor...</p>}
//     </div>
//   );
// };

// export default EditorPage;

const Blog = () => {
  return (
    <div className="pt-20">
      <SectionTitle title="Blogs" />
    </div>
  );
};

export default Blog;
