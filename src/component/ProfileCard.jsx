import React from 'react'
import SocialHandles from './SocialHandles'


export default function ProfileCard({
    name,
    photo="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    post,
    facebook,
    insta,
    linkedIn,
    github,
    number,
}) {
    return (
        <div>
            <div className="profile-card" style={{backgroundImage:`url(${photo})`}}>
                <div className="profile-card-content">
                   <h3 className="profile-card-title">{name}</h3>
                   <p className="">{number}</p>
                   {/* <p>{number}</p> */}
                   <SocialHandles insta={insta} facebook={facebook} linkedIn={linkedIn} github={github} />
                </div>
            </div>
        </div>
    )
}

    // function IsHead(){
    //     if (props.memberPost.includes("Head") && !(props.memberPost.includes("Associate"))) {
    //         return (
    //             <div className="Associates">
    //                 <p>Associates Head</p>                                
    //             </div>
    //         );
          
    //     }else {
    //         return null;
    //     }
    // }
