import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppsIcon from '@material-ui/icons/Apps';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";

import { Link } from 'react-router-dom';

function Header() {

    const linkStyle = {
        color : "#333",
        textDecoration : "none"
    }


    const [className, setclassName] = useState("SecondUl");

    const toggleClass = () => {
        if ( className ==  "mainUl" ) {
            setclassName("SecondUl");
        }else if ( className == "SecondUl" ) {
            setclassName("mainUl");
            console.log("hello")
        }
    }

    return (
        <header>
             <Link style={ linkStyle } to="/" ><h4>Blog</h4></Link>
             <div className="holder">
                <p className="test" onClick={ () => toggleClass() } >{ className == "SecondUl" ? <AppsIcon></AppsIcon> : <CloseIcon></CloseIcon> }</p>
                <ul className={ className }>
                <Link style={ linkStyle } to="/" ><li>Home</li></Link>
                <Link style={ linkStyle } to="/posts"><li>Posts</li></Link>
                <Link style={ linkStyle } to="/images"><li>Images</li></Link>
                <Link style={ linkStyle } to="/countries"><li>Countries</li></Link>
                </ul>
             </div>
            <div>
               <p>
                   <a style={{ margin : "0px 4px" , color : "#0078d7"}} href="https://www.facebook.com"><FacebookIcon /></a>
                   <a style={{ margin : "0px 4px" , color : "#1da1f2" }} href="//www.twitter.com"><TwitterIcon /></a>
                   <a style={{ margin : "0px 4px" , color : "#c13584"}} href="//www.instagram.com"><InstagramIcon /></a>
                   <a style={{ margin : "0px 4px" , color : "#0077b5"}} href="//www.linkden.com"><LinkedInIcon /></a>
               </p>
            </div>
        </header>
    )
}

export default Header
