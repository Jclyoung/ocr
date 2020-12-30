
import React, { useEffect, useState } from 'react';
import './App.css';

const Tesseract = window.Tesseract;

const defaultImage = (
  <img className="img" src="assets/card1.jpg" alt=""/> 
)

function App() {
  const worker = Tesseract.createWorker({
    logger: m => console.log(m),
    langPath: '/customLanguageData',
    gzip: false
  });

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(sourceImage || "assets/card1.jpg");
    setOcr(text);
  };

  const [ocr, setOcr] = useState('Scanning Image...');
  const [sourceImage, setSourceImage] = useState("");

  const UserImage = ({ image }) => (
    <img className="img" src={ URL.createObjectURL(sourceImage) } alt=""/>
  )

  useEffect(() => {
    doOCR();
  });

  return (
    <div className="App">
      <div className="img">
        <h1>image to test</h1>a
        <form >
          <input type="file"
            name="file" 
            onChange={ (e) => {
              console.log('event', e.target.files[0]);
            
              setSourceImage(e.target.files[0]);
              console.log('new state: ', sourceImage)
              e.preventDefault();
          }} />
        </form>
        { !sourceImage ? defaultImage : <UserImage image={ sourceImage } /> }
      </div>
      <div className="text-main">
        <h1>new rendered text</h1>
        <p>{ ocr }</p>
      </div>
    </div>
  );
}

export default App;
