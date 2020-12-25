import React , { useEffect , useState } from 'react';
import axios from 'axios';


function CountryDetails({ match }) {

   const [country, setCountry] = useState(match.params.id);
   const [details, setDetails] = useState([])

   useEffect(() => {
    fetchData(country);
   }, [country])

   const fetchData = async (country) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
        const data = await response.data;
        setDetails( data[0]);

       } catch (err) {
           console.log(err);
       }
   }


   const hanleInputChange = (e) => {
       setCountry(e.target.value);
   }


    return (
        <div className="country-details">
            <h2>Country Details</h2>
            <form>
                <input  type="text" 
                        placeholder="Search your country.."  
                         value= { country }
                        onChange={ (e) => hanleInputChange(e) }
                        />
            </form>
            { details.length === 0 ? false : (
              <div>
                 <img src={ details.flag } />
                 <table>
                     <tbody>
                         <tr>
                             <td>name</td>
                             <td>{ details.name }</td>
                         </tr>
                         <tr>
                             <td>topLevelDomain</td>
                             <td>{ details.topLevelDomain }</td>
                         </tr>
                         <tr>
                             <td>capital</td>
                             <td>{ details.capital }</td>
                         </tr>
                         <tr>
                             <td>altSpellings</td>
                             <td>{ details.altSpellings.map((el) => ( <p key={ el } >{  el } </p> )) }</td>
                         </tr>
                         <tr>
                             <td>region</td>
                             <td>{ details.region }</td>
                         </tr>
                         <tr>
                             <td>subregion</td>
                             <td>{ details.subregion }</td>
                         </tr>
                         <tr>
                             <td>population</td>
                             <td>{ details.population }</td>
                         </tr>
                         <tr>
                             <td>demonym</td>
                             <td>{ details.demonym }</td>
                         </tr>
                         <tr>
                             <td>timezones</td>
                             <td>{ details.timezones[0] }</td>
                         </tr>
                         <tr>
                             <td>borders</td>
                             <td>{ details.borders.map((el) => ( <p key={ el } >{  el } </p> ))  }</td>
                         </tr>
                         <tr>
                             <td>nativeName</td>
                             <td>{ details.nativeName }</td>
                         </tr>
                         <tr>
                             <td>currencies</td>
                             <td>
                                   <p>{ details.currencies[0].code }</p>
                                   <p>{ details.currencies[0].name }</p>
                                   <p>{ details.currencies[0].symbol }</p>
                             </td>
                         </tr>
                         <tr>
                             <td>languages</td>
                             <td>
                                 <p>{ details.languages[0].iso639_1 } </p>
                                 <p>{ details.languages[0].iso639_2 } </p>
                                 <p>{ details.languages[0].name } </p>
                                 <p>{ details.languages[0].nativeName } </p>
                             </td>
                         </tr>
                         <tr>
                             <td>translations</td>
                             <td>
                                 <p>{ details.translations.de } </p>
                                 <p>{ details.translations.es } </p>
                                 <p>{ details.translations.fr } </p>
                                 <p>{ details.translations.fa } </p>
                                 <p>{ details.translations.ja } </p>
                                 <p>{ details.translations.it } </p>
                                 <p>{ details.translations.br } </p>
                                 <p>{ details.translations.pt } </p>
                                 <p>{ details.translations.nl } </p>
                                 <p>{ details.translations.hr } </p>
                             </td>
                         </tr>
                         <tr>
                             <td>cioc</td>
                             <td>{ details.cioc }</td>
                         </tr>
                     </tbody>
                 </table>
              </div>
            ) }
        </div>
    )
}

export default CountryDetails
