import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import DescriptionIcon from '@material-ui/icons/Description';

function Home() {
    return (
        <div className="Home__page">
            <h3>Our Services</h3>
            <p>Here you Will Find All What You Need Bout Countries</p>
            <p>search and Download a hight quality images</p>
            <p>Read Atrictle that will increase your knowledge</p>

            <section>
                <div>
                    <span><PublicIcon></PublicIcon></span>
                    <h4>Countries</h4>
                </div>
                <div>
                    <p><ImageSearchIcon></ImageSearchIcon></p>
                    <h4>Images</h4>
                </div>
                <div>
                    <p><DescriptionIcon></DescriptionIcon></p>
                    <h4>Articles</h4>
                </div>
            </section>
        </div>
    )
}

export default Home
