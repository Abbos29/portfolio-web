import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Card = ({ imgSrc, name, description, technologies }) => {
    return (
        <>
            <div className={s.card}>
                <div className={s.image}>
                    <img src={imgSrc} alt={description} />
                    <Link target='_blank' className={s.link} to="/"><FaArrowRight /></Link>

                </div>

                <div className={s.box}>
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>

                    <ul>
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card