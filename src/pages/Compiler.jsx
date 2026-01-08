import React, { useState, useEffect, useRef } from 'react';
import './CompillerCss.css';

const TEMPLATES = {
  python: `# Python Code\nprint("Hello, World!")\n\ndef main():\n    print("Welcome to MyCodeTime!")\n\nif __name__ == "__main__":\n    main()`,
  javascript: `// JavaScript Code\nconsole.log("Hello, World!");\n\nfunction main() {\n    console.log("Welcome to MyCodeTime!");\n}\n\nmain();`,
  java: `// Java Code\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  cpp: `// C++ Code\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
  c: `// C Code\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
  csharp: `// C# Code\nusing System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`
};

const Compiler = () => {
  const [language, setLanguage] = useState('python');
  const [theme, setTheme] = useState('dark');
  const [code, setCode] = useState(TEMPLATES.python);
  const [output, setOutput] = useState('Output will appear here...');
  const [isRunning, setIsRunning] = useState(false);
  const [statusClass, setStatusClass] = useState('');

  // Handle Tab indentation
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      // Timeout to set selection after state update
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
    if (e.ctrlKey && e.key === 'Enter') {
      runCode();
    }
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    if (window.confirm('Changing language will replace your current code. Continue?')) {
      setLanguage(newLang);
      setCode(TEMPLATES[newLang]);
    }
  };

  const clearEditor = () => {
    if (window.confirm('Are you sure you want to clear the editor?')) {
      setCode('');
      setOutput('Output will appear here...');
      setStatusClass('');
    }
  };

  const runCode = () => {
    if (!code.trim()) {
      setOutput('Error: No code to execute!');
      setStatusClass('output-error');
      return;
    }

    setIsRunning(true);
    setOutput('Running code...\n');
    setStatusClass('');

    // Simulate execution delay
    setTimeout(() => {
      try {
        let result = "";
        if (language === 'javascript') {
          const logs = [];
          const oldLog = console.log;
          console.log = (...args) => logs.push(args.join(' '));
          // eslint-disable-next-line no-eval
          eval(code);
          console.log = oldLog;
          result = logs.join('\n') || "Code executed successfully (no output)";
        } else {
          // Simulation for other languages
          result = `Executed ${language.toUpperCase()} code successfully!\n(Backend required for full execution)`;
        }
        setOutput(result);
        setStatusClass('output-success');
      } catch (err) {
        setOutput(`Error: ${err.message}`);
        setStatusClass('output-error');
      } finally {
        setIsRunning(false);
      }
    }, 600);
  };

  return (
    <div className={`compiler-body theme-${theme}`}>
      <div className="compiler-container">
        <div className="controls-bar">
          <div className="control-group">
            <label>Language:</label>
            <select value={language} onChange={handleLanguageChange}>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="c">C</option>
              <option value="csharp">C#</option>
            </select>
          </div>

          <div className="control-group">
            <label>Theme:</label>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="monokai">Monokai</option>
              <option value="dracula">Dracula</option>
              <option value="nord">Nord</option>
            </select>
          </div>

          <button className="run-btn" onClick={runCode} disabled={isRunning}>
            {isRunning ? <span className="spinner"></span> : <span>▶</span>}
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>
        </div>

        <div className="editor-output-container">
          <div className="editor-section">
            <div className="editor-header">
              <h3>Code Editor</h3>
              <div className="editor-actions">
                <button className="editor-btn" onClick={clearEditor}>Clear</button>
                <button className="editor-btn">Format</button>
              </div>
            </div>
            <textarea
              id="codeEditor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Write your code here..."
            />
          </div>

          <div className="output-section">
            <div className="output-header">
              <h3>Output</h3>
            </div>
            <div id="output" className={statusClass}>
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;