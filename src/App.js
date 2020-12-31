
import React, { useEffect, useState } from 'react';

import './App.css';
import ipsum from './assets/bacon.png';

const Tesseract = window.Tesseract;

const DefaultImage = () => (
  <img className="img" src={ ipsum } />
);

function App() {
  const worker = Tesseract.createWorker({
    logger: m => console.log(m),
    langPath: `${process.env.PUBLIC_URL}/customLanguageData`,
    gzip: false
  });

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(sourceImage || ipsum);
    setAnalyzingImage('')
    setOcr(text);
  };

  const [ocr, setOcr] = useState();
  const [sourceImage, setSourceImage] = useState("");
  const [analyzingMessage, setAnalyzingImage] = useState('Analyzing image....');

  const UserImage = ({ image }) => (
    <img className="img" src={ URL.createObjectURL(image) } alt=""/>
  )

  useEffect(() => {
    doOCR();
  });

  return (
    <div className="App">
      <div className="img">
        <h1>I CHANGED MANt</h1>
        <form >
          <input type="file"
            name="file" 
            onChange={ (e) => {
              setSourceImage(e.target.files[0]);
              setOcr('');
              setAnalyzingImage('Analyzing text...');
              e.preventDefault();
          }} />
        </form>
        { !sourceImage ? <DefaultImage /> : <UserImage image={ sourceImage } /> }
      </div>
      <div className="text-main">
        <h1>new rendered text</h1>
        <p>{ analyzingMessage }</p>
        <p>{ ocr }</p>
      </div>
    </div>
  );
}

export default App;
