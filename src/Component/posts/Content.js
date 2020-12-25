import React from 'react';
import { Link } from 'react-router-dom';

function Content({ data }) {

    const linkStyle = {
        textDecoration : "none",
        color : "#333"
    }

    return (
        <div className="posts-content">
           { data.map((el) => (
             <Link  key={ el.id } style={ linkStyle } to={ `/posts/${el.id}` }>
                <div>
                    <h5>{ el.title.substring(0 , 23) }</h5>
                    <p>{ el.body.substring(0 , 76) + "..." }</p>
                </div>
               </Link>
           )) }
        </div>
    )
}

export default Content
