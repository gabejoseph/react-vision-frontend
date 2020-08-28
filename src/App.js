import React from 'react';
import './App.css';


const dotenv = require('dotenv')
const env = dotenv.config().parsed



  

function App() {
  return (
      <div>
        <p>Welcome from {console.log(env)}</p>
      </div>
  );
}

export default App;


// async function quickstart() {
// //   // Imports the Google Cloud client library
//   const vision = require('@google-cloud/vision');

// //   // Creates a client
//   const client = new vision.ImageAnnotatorClient({
//     oauth: '7GPg2YnMG8dQNZb2AYHGZ2Yg'
//   });

//   console.log(client)

//   // Performs label detection on the image file
//   const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
//   const labels = result.labelAnnotations;
//   console.log('Labels:');
//   labels.forEach(label => console.log(label.description));
// }