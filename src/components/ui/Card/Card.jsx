import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Card = ({ image, name, description, technologies, link }) => {
    return (
        <>
            <div className={s.card}>
                <div className={s.image}>
                    <img src={image} alt={description} />
                    <Link target='_blank' className={s.link} to={link}><FaArrowRight /></Link>

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