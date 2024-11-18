import React from 'react'
import s from './Contact.module.scss'
import Top from '../../ui/Top/Top'

const Contact = () => {
    return (
        <>
            <section className={s.contact}>
                <div className="container">
                    <div className={s.wrap}>
                        <Top title={'Contacts'} />
                        <div className={s.inner}>
                            <div className={s.item}>
                                <h3>MAIL</h3>
                                <div>
                                    <a href="mailto:abbosvaliev2003@gmail.com">↗ abbosvaliev2003@gmail.com</a>
                                </div>
                            </div>

                            <div className={s.item}>
                                <h3>Social medias</h3>
                                <div>
                                    <a href="">↗ telegram</a>
                                    <a href="">↗ whatsapp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact