"use client";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Tablas anchas: scroll horizontal en vez de romper el layout en mobile.
const components: Components = {
  table: (props) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
};

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-term">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
