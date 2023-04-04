import ReactMarkdown from 'react-markdown';
import '../../../node_modules/github-markdown-css/github-markdown-light.css';

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <section className="markdown-body h-[480px] overflow-auto p-5">
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
};

export default MarkdownRenderer;
