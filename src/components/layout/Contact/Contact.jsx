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
                                    <a target='_blank' href="https://t.me/abbos_uz1" rel="noreferrer">↗ telegram</a>
                                    <a target='_blank' href="https://wa.me/998332223390" rel="noreferrer">↗ whatsapp</a>
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