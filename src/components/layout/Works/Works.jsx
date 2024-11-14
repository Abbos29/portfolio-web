import React, { useState, useEffect } from 'react';
import s from './Works.module.scss';
import Top from '../../ui/Top/Top';
import Card from '../../ui/Card/Card';
import axios from 'axios';

const Works = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.valiev.uz/projects/')
            .then(response => {
                const projectsData = response.data.map(project => {
                    const technologies = project.technologies.length
                        ? project.technologies
                        : project._technologies
                            .replace(/[\[\]"]/g, '')
                            .split(',')
                            .map(tech => tech.trim()); 

                    return { ...project, technologies };
                }).reverse();
                setProjects(projectsData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className={s.works}>
            <div className="container">
                <Top title={'Projects'} count={projects.length} />

                {loading ? (
                    <div className={s.loader}>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    <div className={s.wrap}>
                        <div className={s.grid}>
                            {projects.map((card) => (
                                <Card
                                    key={card.id}
                                    image={card.image}
                                    name={card.name}
                                    link={card.link}
                                    description={card.description}
                                    technologies={card.technologies}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Works;
