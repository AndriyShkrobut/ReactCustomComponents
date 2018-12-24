import React from 'react'
import './MenuList.css'

function menuList(props)
{
    return(
        <ul className="menu">
             <li>
                <a href={"#"+props.section1}>{props.section1}</a>                        
             </li>                       
             <li>
                <a href={"#"+props.section2}>{props.section2}</a>
             </li>                       
             <li>
                <a href={"#"+props.section3}>{props.section3}</a>
             </li>                       
             <li>
                <a href={"#"+props.section4}>{props.section4}</a>
             </li>
         </ul>
    )
}

export default menuList;