import React from 'react';


export default function PortfolioItem ({ item }) {

    return (
        <div className="portfolio__list-item">
            <img className="item-img" src={ item.src } alt="img"/>
            <a href={ item.link } className="item-link" target="blank">
                <span> { item.title }</span>
                <span className="link-subtitle">Перейти по ссылке</span>
            </a>
        </div>
    )

}