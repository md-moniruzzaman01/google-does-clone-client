import { Editor } from "./editor";
import { Toolbar } from "./Toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBF]">
      <Toolbar/>
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
