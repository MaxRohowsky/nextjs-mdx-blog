'use client'
import React, { useState, useCallback } from 'react';
import { Copy, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export default function EnhancedCode ({ children, className }) {
  const [fontSize, setFontSize] = useState(14);

  const getTextContent = (node) => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (node.props && node.props.children) return getTextContent(node.props.children);
    return '';
  };

  const copyToClipboard = useCallback(() => {
    const text = getTextContent(children);
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: "The code has been copied to your clipboard.",
        });
      },
      (err) => {
        console.error('Could not copy text: ', err);
        toast({
          title: "Failed to copy",
          description: "There was an error copying the code to your clipboard.",
          variant: "destructive",
        });
      }
    );
  }, [children]);

  const adjustFontSize = useCallback((adjustment) => {
    setFontSize((prevSize) => Math.max(10, Math.min(24, prevSize + adjustment)));
  }, []);

  return (
    <div className="relative group">
      <pre 
        className={`${className} rounded-md p-4 overflow-x-auto`} 
        style={{ fontSize: `${fontSize}px` }}
      >
        <code>{children}</code>
      </pre>
      <div className="absolute top-3 right-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7 p-0 mr-2" 
          onClick={() => adjustFontSize(-1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7 p-0 mr-2" 
          onClick={() => adjustFontSize(1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7 p-0 mr-2" 
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};