import React from 'react'
import './Experience.scss'
import { FaReact } from 'react-icons/fa'

const Experience = ({ habilities }) => {
    return (
        <section>
            <h5>The Skills I Have</h5>
            <h2>My Expertise</h2>

            <div className="container skills__container">
                {habilities.map((skill) =>

                    <div key={skill} className='skills__content'>
                        <div className="skills__cards">
                            <article className='skills__card'>
                                <FaReact className='skills__icon' />
                                <h5>{skill}</h5>
                            </article>
                        </div>

                    </div>
                )}
            </div>
        </section>
    )
}

export default Experience