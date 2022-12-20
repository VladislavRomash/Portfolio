import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

type SkillType = {
    id: string
    logo: string
    skill: string
    description: string
}

export const Skills = () => {

    const skill: SkillType[] = [
        {id: '1', logo: '', skill: 'CSS', description: 'Detailed description of the skill'},
        {id: '2', logo: '', skill: 'JS', description: 'Detailed description of the skill'},
        {id: '3', logo: '', skill: 'React', description: 'Detailed description of the skill'},
        {id: '4', logo: '', skill: 'Redux', description: 'Detailed description of the skill'},
    ]

    return (
        <section className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <h2 className={style.title}>Skills</h2>

                <div className={style.skills}>
                    {
                        skill.map(m => <Skill key={m.id}
                                              skillTitle={m.skill}
                                              logo={m.logo}
                                              description={m.description}/>)
                    }
                </div>

            </div>

        </section>
    );
};