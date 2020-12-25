import React from 'react';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

function Content({ data }) {

    // console.log(data);

    return (
        <div className="image-content">
           { data.map((el) => (
                <div key={ el.id }>
                    <img src={ el.webformatURL } alt={ el.type } />
                    <div className="more-info">
                        <p><PhotoSizeSelectActualIcon fontSize="small" />{ el.tags}</p>
                        <p><RemoveRedEyeIcon fontSize="small" /> { el.views }</p>
                        <p><CloudDownloadIcon fontSize ="small"/>{ el.downloads }</p>
                    </div>
                    <a href={ el.pageURL } ><GetAppIcon style={{ color : 'white' }} fontSize ="default"/></a>
                </div>
           )) }
        </div>
    )
}

export default Content
