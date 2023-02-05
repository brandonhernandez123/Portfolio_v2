import React from 'react'
import { Image } from 'react-bootstrap';
import {BsGithub } from "react-icons/bs";



const GameDevPortfolio = () => {
    return (
        <div>
            <h2 className='projecttitle'>Game Dev Projects</h2>

            <div className='inprogress'>
                <br/>
                <h2>In Progress</h2>
                <br/>
                <h6>Space Shooter Pro | <a className='mint' href='https://github.com/brandonhernandez123/Space-Shooter-Pro'><BsGithub /></a></h6>
            <Image className='project' src='https://i.imgur.com/GuhVGFS.gif' height={250} width={300}/>
            <p>A 2.5D Space shooter created in Unity</p>
            <p>Language: C#</p>

            </div>
        </div>
    )
}

export default GameDevPortfolio;