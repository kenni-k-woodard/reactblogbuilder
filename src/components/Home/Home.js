import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');

  const [subtitle, setSubtitle] = useState('');

  const [font, handleFontChange] = useState('');

  const [text, setText] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} text={text} />
      <Editor
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        handleFontChange={handleFontChange}
        setText={setText}
      />
    </main>
  );
}
