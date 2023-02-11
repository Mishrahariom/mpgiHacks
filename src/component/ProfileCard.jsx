import React from 'react'
// import SocialHandle from '../SocialHandle/socialHandle';


export default function ProfileCard({
    name="Enter name",
     photo="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    post="Enter post",
}) {

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
    return (
        <div>
            <div className="profile-card" style={{backgroundImage:photo}}>
                <div className="profile-card-content">   
                   <h3 className="profile-card-title">{name}</h3>
                   <p className="">{post}</p>
                   {/* <SocialHandle /> */}
                   {/* <IsHead /> */}
                </div>
            </div>
        </div>
    )
}