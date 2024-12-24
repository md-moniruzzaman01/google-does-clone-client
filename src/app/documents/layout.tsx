interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div>
      <nav className="w-full bg-red-500">Document navbar</nav>
      {children}
    </div>
  );
};

export default DocumentsLayout;
