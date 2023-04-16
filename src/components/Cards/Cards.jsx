import React from 'react'
import "./cards.css";

const Cards = ({card1, card2, card3, card4, card5}) => {

    const redirectReact = () => {
        window.open("https://legacy.reactjs.org/docs/getting-started.html", "_blank");
    }
    const redirectJS = () => {
        window.open("https://www.w3schools.com/js/DEFAULT.asp", "_blank");
    }
    const redirectAngular = () => {
        window.open("https://www.w3schools.com/angular/", "_blank");
    }
    const redirectNext = () => {
        window.open("https://nextjs.org/docs/getting-started", "_blank");
    }
    const redirectVue = () => {
        window.open("https://vuejs.org/guide/quick-start.html", "_blank");
    }
  
    return (
    <div className='cards_container'>
        <div className='cards_content'>
            <div className="image">
                <img src={card1.img} alt="" />
            </div>
            <div className="title">
                <h1>{card1.title}</h1>
            </div>
            <div className="desc">
                <p>{card1.desc}</p>
                <button onClick={redirectReact} >Read More...</button>
            </div>
        </div>
        <div className='cards_content'>
            <div className="image">
                <img src={card2.img} alt="" />
            </div>
            <div className="title">
                <h1>{card2.title}</h1>
            </div>
            <div className="desc">
                <p>{card2.desc}</p>
                <button onClick={redirectJS}>Read More...</button>
            </div>
        </div>
        <div className='cards_content'>
            <div className="image">
                <img src={card3.img} alt="" />
            </div>
            <div className="title">
                <h1>{card3.title}</h1>
            </div>
            <div className="desc">
                <p>{card3.desc}</p>
                <button onClick={redirectAngular}>Read More...</button>
            </div>
        </div>
        <div className='cards_content'>
            <div className="image">
                <img src={card4.img} alt="" />
            </div>
            <div className="title">
                <h1>{card4.title}</h1>
            </div>
            <div className="desc">
                <p>{card4.desc}</p>
                <button onClick={redirectNext}>Read More...</button>
            </div>
        </div>
        <div className='cards_content'>
            <div className="image">
                <img src={card5.img} alt="" />
            </div>
            <div className="title">
                <h1>{card5.title}</h1>
            </div>
            <div className="desc">
                <p>{card5.desc}</p>
                <button onClick={redirectVue} >Read More...</button>
            </div>
        </div>
    </div>
  )
}

export default Cards