import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor | null>(null); // ✅ Initialize with null

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef} // ✅ Attach ref properly
        initialValue="Your Result will appear here!"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => {
          if (editorRef.current) {
            console.log(editorRef.current.getInstance().getMarkdown());
          }
        }}
      />
    </div>
  );
}

export default OutputSection;
