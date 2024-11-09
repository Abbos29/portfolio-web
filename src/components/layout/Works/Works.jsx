import React from 'react'
import s from './Works.module.scss'
import Top from '../../ui/Top/Top'
import Card from '../../ui/Card/Card'

import { cardData } from '@/data.js'

const Works = () => {
    return (
        <>
            <section className={s.works}>
                <div className="container">

                    <div className={s.wrap}>

                        <Top title={'Projects'} count={9} />

                        <div className={s.grid}>
                            {cardData.map((card) => (
                                <Card
                                    key={card.id}
                                    imgSrc={card.imgSrc}
                                    name={card.name}
                                    description={card.description}
                                    technologies={card.technologies}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Works