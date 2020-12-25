import React , { useEffect, useState }from 'react';
import axios from 'axios';
import Content from './Content';

function Search() {

    const [countreis, setCountreis] = useState([]);
    const [name, setName] = useState([]);
    const [regionSearch, setRegionSearch] = useState("All");

    useEffect(() => {
        fetchData(regionSearch);
    } , [regionSearch])


    const fetchData = async (region = "All") => {
        if ( region == "All" ) {
            try {
                const response = await axios.get("https://restcountries.eu/rest/v2/all");
                const data = await response.data;
                setCountreis(data);
        
               } catch (err) {
                   console.log(err);
               }
        }else if ( region !== "" && (region == "Europe" || region == "Africa" || region == "Asia" || region == "Oceania" || region == "Americas")) {
            try {
                const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
                const data = await response.data;
                setCountreis( data);
        
               } catch (err) {
                   console.log(err);
               }
        }else if ( region !== "" && region !== "All" && region !== "Europe" && region !== "Africa" && region !== "Asia" && region !== "Oceania" && region !== "Americas" )  {
            try {
                const response = await axios.get(`https://restcountries.eu/rest/v2/name/${region}`);
                const data = await response.data;
                setCountreis( data);
        
               } catch (err) {
                   console.log(err);
               }
        }else {
            return;
        }
     }


     const hanleChange = (e) => {
        setRegionSearch(e.target.value);
     }

     const hanleInputChange = (e) => {
        setName(e.target.value);
        fetchData(name);
     }

    return (
        <div>
            <form>
                <input  type="text" 
                        placeholder="Search your country.."  
                          value= { name }
                          onChange={ (e) => hanleInputChange(e) }
                        />
                <select value={ regionSearch } onChange={ (e) => hanleChange(e) }>
                    <option value="All">All</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                </select>
                    <Content  data={ countreis } />
            </form>
        </div>
    )
}

export default Search
