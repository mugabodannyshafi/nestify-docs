import { useState } from "react";
import { Copy, Check, Terminal, Code2, FileJson } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  title,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Simple icon map for NestJS-related languages
  const getIcon = () => {
    switch (language) {
      case "bash":
      case "shell":
        return <Terminal className="h-3.5 w-3.5" />;
      case "json":
        return <FileJson className="h-3.5 w-3.5" />;
      default:
        return <Code2 className="h-3.5 w-3.5" />;
    }
  };

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{
        backgroundColor: "#1e1e1e",
        borderColor: "#2d2d2d",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          backgroundColor: "#252526",
          borderBottom: "1px solid #2d2d2d",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-gray-400">
            {getIcon()}
            <span className="text-xs font-medium uppercase tracking-wide">
              {language}
            </span>
          </div>
          {title && <span className="text-xs text-gray-500">{title}</span>}
        </div>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors"
          style={{
            backgroundColor: copied ? "#2ea04326" : "transparent",
            color: copied ? "#7ee83f" : "#8b949e",
          }}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 text-sm overflow-x-auto`}
            style={{
              ...style,
              margin: 0,
              backgroundColor: "#1e1e1e",
            }}
          >
            {showLineNumbers
              ? tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className="table-row"
                  >
                    <span
                      className="table-cell pr-4 text-right select-none"
                      style={{ color: "#5a5a5a", minWidth: "2em" }}
                    >
                      {i + 1}
                    </span>
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                ))
              : tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
