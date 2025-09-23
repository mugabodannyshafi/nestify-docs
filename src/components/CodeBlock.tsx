import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
  title?: string;
}

export function CodeBlock({ code, language = "bash", showCopy = true, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative">
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-border rounded-t-lg">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      <div className={`bg-code-bg border border-code-border ${title ? 'rounded-b-lg' : 'rounded-lg'} overflow-hidden`}>
        {showCopy && (
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            title="Copy to clipboard"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        )}
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}