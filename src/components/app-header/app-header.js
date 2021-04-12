import React from 'react';
import './app-header.css';

const AppHeader = (totalCount) => {

    const count = totalCount.totalPosts;
    let prom;
    if (count === 1) {
        prom = 'запись';
    } else if (count > 1 && count < 5) {
        prom = 'записи';
    } else
        prom = 'записей';

    return (
        <div className="app-header d-flex">
            <h1>Alex Polyakov</h1>
            <h2>{count} {prom}, из них понравилось 0</h2>
        </div>
    )
}
export default AppHeader;