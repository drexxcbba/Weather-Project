import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({search, setSearch, setQuery}) => {

    const [error, setError] = useState(false);

    const { city, country } = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(country.trim() === '' || city.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setQuery(true);
    }

    return ( 
        <form
         onSubmit={handleSubmit}
        >
            {error ? <Error message="Todos los campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                 type="text"
                 name="city"
                 id="ciudad"
                 value={city}
                 onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                 name="country"
                 id="pais"
                 value={country}
                 onChange={handleChange}
                >  
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="BO">Bolivia</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input 
                 type="submit"
                 value="Buscar Clima"
                 className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired
}
 
export default Form;