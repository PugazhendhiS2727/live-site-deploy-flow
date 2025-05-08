
import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
  code: string;
  title: string;
  language?: string;
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, title, language = 'groovy', className }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted">
        <div className="font-medium text-sm">{title}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2 text-muted-foreground hover:text-foreground"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-accent" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="ml-2 text-xs">{copied ? 'Copied' : 'Copy'}</span>
        </Button>
      </div>
      <pre className="code-snippet m-0 p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
