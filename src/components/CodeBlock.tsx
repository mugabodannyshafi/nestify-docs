import { useState } from "react";
import { Copy, Check, Terminal, Code2, FileCode2 } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
  title?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export function CodeBlock({ 
  code, 
  language = "bash", 
  showCopy = true, 
  title,
  showLineNumbers = false,
  highlightLines = []
}: CodeBlockProps) {
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

  const lines = code.split('\n');
  
  // Get appropriate icon based on language
  const getLanguageIcon = () => {
    switch(language) {
      case 'bash':
      case 'shell':
      case 'sh':
        return <Terminal className="h-3.5 w-3.5" />;
      case 'typescript':
      case 'javascript':
      case 'tsx':
      case 'jsx':
        return <Code2 className="h-3.5 w-3.5" />;
      default:
        return <FileCode2 className="h-3.5 w-3.5" />;
    }
  };

  // Get language display name
  const getLanguageDisplay = () => {
    const langMap: { [key: string]: string } = {
      'bash': 'bash',
      'shell': 'shell',
      'sh': 'shell',
      'typescript': 'TypeScript',
      'javascript': 'JavaScript',
      'tsx': 'TSX',
      'jsx': 'JSX',
      'json': 'JSON',
      'yaml': 'YAML',
      'docker': 'Dockerfile',
    };
    return langMap[language] || language;
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-border/50 transition-all duration-200 hover:border-border">
      {/* Header Bar */}
      <div className="bg-muted/30 border-b border-border/50 flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2">
          {/* Traffic Lights (decorative) */}
          <div className="flex items-center gap-1.5 mr-3">
            <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500/40 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/40 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500/40 transition-colors" />
          </div>
          
          {/* Language Badge */}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            {getLanguageIcon()}
            <span className="text-xs font-medium">{getLanguageDisplay()}</span>
          </div>
          
          {/* Title */}
          {title && (
            <>
              <div className="w-px h-4 bg-border/50" />
              <span className="text-sm font-medium text-foreground/80">{title}</span>
            </>
          )}
        </div>

        {/* Copy Button */}
        {showCopy && (
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Code Content */}
      <div className="bg-code-bg/50 backdrop-blur-sm">
        <div className="flex">
          {/* Line Numbers */}
          {showLineNumbers && (
            <div className="select-none border-r border-border/30 px-4 py-4 text-right">
              {lines.map((_, index) => (
                <div
                  key={index}
                  className={`text-xs leading-6 ${
                    highlightLines.includes(index + 1)
                      ? 'text-foreground/70 font-semibold'
                      : 'text-muted-foreground/50'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          )}

          {/* Code */}
          <div className="flex-1 overflow-x-auto">
            <pre className="p-4 text-sm leading-6">
              {showLineNumbers ? (
                lines.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      highlightLines.includes(index + 1)
                        ? 'bg-accent/20 -mx-4 px-4 border-l-2 border-primary'
                        : ''
                    }`}
                  >
                    <code className={`language-${language}`}>
                      {line || '\n'}
                    </code>
                  </div>
                ))
              ) : (
                <code className={`language-${language} text-foreground/90`}>
                  {code}
                </code>
              )}
            </pre>
          </div>
        </div>
      </div>

      {/* Bottom Gradient (subtle) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );
}