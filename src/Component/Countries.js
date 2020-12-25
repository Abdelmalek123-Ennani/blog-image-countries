import React from 'react';
import Search from './countries/Search';
import Content from './countries/Content'

function Countries() {
    return (
        <div>
            <div className="countriesName">
                <h2>Countries</h2>
                <Search />
            </div>
        </div>
    )
}

export default Countries
