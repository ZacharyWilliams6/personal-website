import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default function MenuItem({title, selected, link, selectPage}) {

    const select = () => {
        return selectPage(title);
    }

    let menuLink;
    if(link.charAt(0) === '/'){
        menuLink = <Link to = {link} onClick={select} className={selected ? "selectedStyle" : "defaultStyle"}>{title}</Link>;
    } else {
        menuLink = <a href = {link} onClick={select} className={selected ? "selectedStyle" : "defaultStyle"}>{title}</a>;
    }

    return (
        <div className="menuItem">
                {menuLink}
        </div>
    )
}
