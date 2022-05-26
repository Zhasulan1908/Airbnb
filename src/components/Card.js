import React from "react";
export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../img/${props.coverImg}`)} className="card--image"/>
            <div className="card--stats">
                <img src={require("../img/star.png")} className="card--star"/>
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b>  / person</p>
        </div>
    )
}