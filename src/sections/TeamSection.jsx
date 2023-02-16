import React from 'react'
import ProfileCard from '../component/ProfileCard'
import { founders } from '../pages/teamDetails'

const TeamSection = () => {
    return (
        <section id="team" className="team-page">
            <h1 className="text-center">Founders</h1>
            <div className='row g-5 mb-5'>
            {
                founders.map(obj => (
                    <div className='col-sm-12 col-md-4 g-5'>
                        <ProfileCard {...obj} />
                    </div>
                ))
            }
            </div>
        </section>
    )    
}

export default TeamSection

