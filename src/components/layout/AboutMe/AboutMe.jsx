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
                        <p>Hey, my name is Charles Bruyerre and I use Sharlee as my nickname across social medias. I’m a graphic designer, UX/UI designer & front-end web developer from France. I’m also passionate about pop music and make portraits and universes around what I listen to and I’m always curious to learn more when it comes to new technologies and creative coding.</p>
                        <a href="">↓ Resume</a>
                    </div>

                    <div className={s.image}>
                        <div className={s.idea}>
                            <div>
                                <FcIdea />

                            </div>
                            {/* <p>abbos valiev • abbos valiev • abbos valiev •</p> */}
        
                        </div>
                        <img src="/profile.avif" alt="image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe