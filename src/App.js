import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
 
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const [query, setQuery] = useState(false);

  const [result, setResult] = useState({});

  const { city, country } = search;

  useEffect( () => {
    const queryAPI = async () => {
      if(query){
        const appId = '141b0674d5fee4423f1c4aba050d8ae0';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const res = await fetch(url);
        const final = await res.json();
        setResult(final);
      }
    }
    queryAPI();
  }, [query]);

  return (
    <Fragment>
      <Header 
       titulo="Clima React App"
       />
       <div className="contenedor-form">
         <div className="container">
           <div className="row">
             <div className="col m6 s12">
               <Form 
                search={search}
                setSearch={setSearch}
                setQuery={setQuery}
              />
             </div>
             <div className="col m6 s12">
               2
             </div>
           </div>
         </div>
       </div>
    </Fragment>
  );
}

export default App;
