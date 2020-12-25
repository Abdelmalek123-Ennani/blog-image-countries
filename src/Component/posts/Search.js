import React , { useEffect , useState } from 'react';
import Content from './Content';
import axios from 'axios';

function Search() {

    const [posts, setPosts] = useState([]);
    const [search , setSerch] = useState("");

    useEffect(() => {

        fetchData();
        
    }, [search])

    const fetchData = async () => {
       try {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.data;
        setPosts(data);

       } catch (err) {
           console.log(err);
       }
    }

    const hanleChange = (e) => {
        setSerch(e.target.value);
    }

    return (
        <div>
            {/* <form>
                <input type="text" placeholder="Search posts.." />
            </form> */}
            <Content data={ posts } />
        </div>
    )
}

export default Search
