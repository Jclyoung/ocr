
import React, { useEffect, useState } from 'react';
// import { createWorker } from 'tesseract.js';
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
    // <img className="img" src="assets/ipsum.png" alt=""/>
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






// import React from 'react';
// import Tesseract from 'tesseract.js';
// // import { Provider } from 'react-redux';
// // import { createStore, compose } from 'redux';
// // import Main from './Main';

// // const store = createStore(
// // );



// function App() {
//   // <Provider store={store}>
//   const tesseractFunct = () => Tesseract.recognize(
//   'assets/ipsum.png',
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   return text;
// })
//   return (
//     <div className="App">
//       <div>
//         <h1>image here</h1>
//         <img src="assets/ipsum.png" alt="" />
//       </div>
//       <div>
//         <h1>Output Here</h1>
//         <p>
//           {
//             tesseractFunct(),

//             imageText
//           }
//         </p>
//       </div>

//     </div>
//   );
//   // </Provider>
  
// }

// export default App;



// // working example
// const { createWorker } = require('tesseract.js');

// const worker = createWorker();

// (async () => {
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
//   const { data: { text } } = await worker.recognize('assets/ipsum.png');
//   console.log(text);
//   await worker.terminate();
// })();
