import React , { useEffect , useState } from 'react';
import axios from 'axios';

function PostDetails({ match }) {

    const id = match.params.id;
    const [moreDetails, setMoreDetails] = useState([]);
    const [comments, setComments] = useState([]);
    const [textArea, setTextArea] = useState("");

    useEffect(() => {
        fetchData();
        fetchComments();
    }, [ ])

    const fetchData = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.data;
        setMoreDetails(data);
    }

    const fetchComments = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const data = await response.data;
        setComments(data);
    }

    // console.log("moreDetails =>" , moreDetails);
    // console.log("comments =>" , comments);

    return (
        <div className="moreDetails">
           <div className="moreDetails-content">
               <h3><span>{ moreDetails.title }</span></h3>
               <p>{ moreDetails.body } { moreDetails.body } { moreDetails.body } { moreDetails.body }</p>
           </div>
           <div className="comments">
               <h3>Comments</h3>
               { comments.map((el) => (
                 <div key={ el.id } className="person-comment">
                     <h4>{ el.email }</h4>
                     <p> {  el.body }</p>
                 </div>
               )) }
               {/* <div className="add-comment">
                  <form>
                      <textarea placeholder="your comment..." />
                      <button type="sybmit">Comment</button>
                  </form>
               </div> */}
           </div>
        </div>
    )
}

export default PostDetails
 