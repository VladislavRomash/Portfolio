import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';

type ProjectType = {
    id: string
    img: string
    title: string
    description: string
    reference: string
}

export const Projects = () => {

    const project: ProjectType[] = [
        {
            id: '1',
            img: 'https://media.rbcdn.ru/media/news/a8ou84y_1IjqkjM.jpg',
            title: 'Todolist',
            description: 'Brief description of the project',
            reference: ''
        },
        {
            id: '2',
            img: 'https://prodod.moscow/wp-content/uploads/Screenshot_6.jpg',
            title: 'Social Network',
            description: 'Brief description of the project',
            reference: ''
        },
    ]

    return (
        <section className={style.projectBlock}>

            <div className={`${styleContainer.container} ${style.projectContainer}`}>

                <h2 className={style.title}>Projects</h2>

                <div className={style.projects}>
                    {
                        project.map(m => <Project key={m.id}
                                                  img={m.img}
                                                  title={m.title}
                                                  description={m.description}
                                                  reference={m.reference}/>)
                    }
                </div>

            </div>
        </section>
    );
};