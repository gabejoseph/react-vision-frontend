import React from 'react';
import './App.css';

  

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "opensearch",
    search: "zimbabwe",
    limit: "5",
    namespace: "0",
    format: "json"
};



url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(resp => resp.json())
    .then(search => console.log(search))
    .catch(function(error){console.log(error);});

function App() {
  return (
      <div>
        <p>Welcome from {}</p>
      </div>
  );
}

export default App;