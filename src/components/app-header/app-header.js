import React from 'react';
import './app-header.css';

const AppHeader = ({liked, important, totalPosts}) => {
    let prom;
    if (totalPosts === 1) {
        prom = 'запись';
    } else if (totalPosts > 1 && totalPosts < 5) {
        prom = 'записи';
    } else
        prom = 'записей';

    return (
        <div className="app-header d-flex">
            <h1>Alex Polyakov</h1>
            <h2>{totalPosts} {prom}, из них понравилось {liked}, отмечено как важно {important}</h2>
        </div>
    )
}
export default AppHeader;