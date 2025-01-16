import React from 'react'
import s from './AboutMe.module.scss'
import Top from '../../ui/Top/Top'
import { FcIdea } from 'react-icons/fc'



const AboutMe = () => {
    return (
        <>
            <section className={s.aboutme}>
                <div className={s.about_wrap}>
                    <div className={s.box}>
                        <Top title={'About'} />
                        <p>Hey, my name is Abbos Valiev, and I’m a frontend developer with a passion for creating seamless and innovative web experiences. I’ve worked as a teacher for over a year, sharing knowledge and inspiring others, and I continue to freelance, developing websites of varying complexities. Outside of work, I enjoy playing basketball and diving into books, always looking for ways to grow both personally and professionally.</p>
                        <a href="">↓ Resume</a>
                    </div>

                    <div className={s.image}>
                        <div className={s.idea}>
                            <div>
                                <FcIdea />

                            </div>
                            {/* <p>abbos valiev • abbos valiev • abbos valiev •</p> */}
        
                        </div>
                        <img src="/abbos2.JPG" alt="image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe