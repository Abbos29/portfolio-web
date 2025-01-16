import React, { useState, useEffect } from 'react';
import s from './Works.module.scss';
import Top from '../../ui/Top/Top';
import Card from '../../ui/Card/Card';
import axios from 'axios';

const Works = () => {
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0); // Общее количество проектов
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);

    // Функция для загрузки данных
    const fetchProjects = (url) => {
        setLoading(true);
        axios
            .get(url)
            .then(response => {
                const newProjects = response.data.results.map(project => {
                    const technologies = project.technologies.length
                        ? project.technologies
                        : project._technologies
                            .replace(/[\[\]"]/g, '')
                            .split(',')
                            .map(tech => tech.trim());

                    return { ...project, technologies };
                });

                setProjects(prevProjects => [...prevProjects, ...newProjects]);
                setTotalProjects(response.data.count); // Устанавливаем общее количество проектов
                setNextPage(response.data.next);
                setLoading(false);
                setLoadingMore(false);
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
                setLoadingMore(false);
            });
    };

    // Первоначальная загрузка данных
    useEffect(() => {
        fetchProjects('https://api.valiev.uz/projects/');
    }, []);

    // Обработчик для кнопки "More"
    const handleLoadMore = () => {
        if (nextPage) {
            setLoadingMore(true);
            fetchProjects(nextPage);
        }
    };

    return (
        <section className={s.works}>
            <div className="container">
                <Top title={'Projects'} count={totalProjects} /> {/* Передаем общее количество проектов */}

                {loading && !loadingMore ? (
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
                        {nextPage && (
                            <div className={s.loadMore}>
                                <button 
                                    onClick={handleLoadMore} 
                                    disabled={loadingMore}
                                >
                                    {loadingMore ? 'Loading...' : 'More'}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Works;
