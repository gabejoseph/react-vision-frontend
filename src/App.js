import React from 'react';
import './App.css';

  

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "opensearch",
    search: "Hampi",
    limit: "5",
    namespace: "0",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});

function App() {
  return (
      <div>
        <p>Welcome from {}</p>
      </div>
  );
}

export default App;