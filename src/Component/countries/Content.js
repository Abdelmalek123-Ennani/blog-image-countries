import React from 'react';
// import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
// import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Link } from "react-router-dom";


function Content({ data }) {

    const linkStyle = {
        color : "#333",
        textDecoration : "none"
    }

    return (
        <div className="country-content">
           { data.map((el) => (
              <Link  key={ el.alpha2Code } style={ linkStyle } to={ `/countries/${ el.name }` } > 
                <div>
                    <img src={ el.flag } alt="the flag" />
                    <p>
                        <span> { el.name } </span>
                        <span> { el.capital } </span>
                    </p>
                </div>
              </Link>
           )) }
        </div>
    )
}

export default Content
