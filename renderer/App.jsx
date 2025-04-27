import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

export default function App() {
  useEffect(() => {
    const term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.writeln('Welcome to LMulador');
  }, []);

  return <div id="terminal" className="h-full bg-black" />;
}
