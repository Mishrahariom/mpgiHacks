import React, {useLayoutEffect} from 'react'
import ProfileCard from '../component/ProfileCard'
import { founders } from '../pages/teamDetails';
import gsap from 'gsap';
import useWindowDimensions from '../component/useWindowDimensions';


const TeamSection = () => {
    const { width } = useWindowDimensions();
    let scaleX,scaleY;
    if(width < 486){
      scaleX = 0.8;
      scaleY = 0.8;
    } else {
      scaleX = 0.9;
      scaleY = 0.9;
    }
    
      
    useLayoutEffect(() => {
      gsap.set("#team", {scaleX: scaleX, scaleY: scaleY});
    }, [])
      
    return (
        <section id="team" className="team-page">
            <h1 className="text-center">Organizers</h1>
            <div className='row g-5 mb-5'>
            {
                founders.map(obj => (
                    <div className='col-sm-12 col-md-4 g-5' key={obj.name} id={obj.name}>
                        <ProfileCard {...obj} />
                    </div>
                ))
            }
            </div>
        </section>
    )    
}

export default TeamSection

