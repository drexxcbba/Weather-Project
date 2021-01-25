import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
 
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const [query, setQuery] = useState(false);

  const [result, setResult] = useState({});

  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect( () => {
    const queryAPI = async () => {
      if(query){
        const appId = '141b0674d5fee4423f1c4aba050d8ae0';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const res = await fetch(url);
        const final = await res.json();
        setResult(final);
        setQuery(false);
        if(result.cod === "404"){
          setError(true);
        }else{
          setError(false);
        }
      }
    }
    queryAPI();
    //eslint-disable-next-line
  }, [query]);

  let component;
  if(error){
    component = <Error message="No hay resultados" />
  }else{
    component = <Weather resultOne={result} />
  }

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
               {component}
             </div>
           </div>
         </div>
       </div>
    </Fragment>
  );
}

export default App;
