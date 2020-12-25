import React , { useEffect , useState } from 'react';
import Content from './Content';
import axios from 'axios';

function Search() {


    const [images, setImages] = useState([]);
    const [search , setSerch] = useState("");

    useEffect(() => {

        fetchData(search);
        
    }, [search])

    const fetchData = async (search = 'dog') => {
       try {

        const response = await axios.get(`https://pixabay.com/api/?key=19294113-92585516212c7e577be1cea52&q=${search}&per_page=50&safesearch=true`);
        const data = await response.data.hits;
        setImages(data);

       } catch (err) {
           console.log(err);
       }
    }

    const hanleChange = (e) => {
        setSerch(e.target.value);
    }


    return (
        <div>
            <form>
                <input 
                       type="text" 
                       placeholder="Search your pictures.." 
                        value= { search }
                        onChange={ (e) => hanleChange(e) }
                       />
                    <Content  data={ images } />
            </form>
        </div>
    )
}

export default Search
