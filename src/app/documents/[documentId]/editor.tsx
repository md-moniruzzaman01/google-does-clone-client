"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// task item
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
//underline
import Underline from "@tiptap/extension-underline";
//link
import Link from "@tiptap/extension-link";

//table
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

//image
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
// font
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import {Color} from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

// internal
import { useEditorStore } from "@/store/use-editor-store";

//custom extensions
import {FontSizeExtension} from "@/extensions/font-size"

export const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({editor}){
      setEditor(editor)
    },
    onSelectionUpdate({editor}){
      setEditor(editor);
    },
    onTransaction({editor}){
      setEditor(editor);
    },
    onFocus({editor}){
      setEditor(editor);
    },
    onBlur({editor}){
      setEditor(editor);
    },
    onContentError({editor}){
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left:56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      Color,
      Highlight.configure({
        multicolor:true
      }),
      Link.configure({
        openOnClick:false,
        autolink:true,
        defaultProtocol:"https"
      }),
      FontFamily,
      TextStyle,
      TextAlign.configure({
        types:["heading","paragraph"],
      }),
      FontSizeExtension,
      Underline,
      Image,
      ImageResize,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
    ],
    content: `
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th colspan="3">Description</th>
        </tr>
        <tr>
          <td>Cyndi Lauper</td>
          <td>Singer</td>
          <td>Songwriter</td>
          <td>Actress</td>
        </tr>
      </tbody>
    </table>
  `,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
