import React from 'react';
import './App.css';

const vision = require('@google-cloud/vision')

const client = new vision.ImageAnnotatorClient({
  keyFilename: './react-vision-frontend/React-Vision-Frontend-fede680a0b8a.json'
});

client
  .labelDetection('./resources/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description))
  })
  .catch(err => console.log('ERROR', err));
  

function App() {
  return (
        <body>
          <p>Hello World</p>
        </body>
  );
}

export default App;
