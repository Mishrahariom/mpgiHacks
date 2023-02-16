import React from 'react'
import ProfileCard from '../component/ProfileCard'
import {founders} from './teamDetails'

// const associatesHeads = [
//     {
//         headPost: "Associate Events Head",
//         headDetails: eventHeads,
//     },
//     {
//         headPost: "Associate Photography Head",
//         headDetails: photographyHeads,
//     },
//     {
//         headPost: "Associate Finance Head",
//         headDetails: financeHeads,
//     },
//     {
//         headPost: "Associate Tech Head",
//         headDetails: techHead,
//     },
//     {
//         headPost: "Associate Hospitality Head",
//         headDetails: hospitalityHeads,
//     }
// ]

export default function TeamPage() {

    // function renderAssociate(heads) {
    //     // console.log(heads);

    //     return (
    //         <div key={heads.headPost}>
    //             <div className="container text-center mb-5">
    //                 <h1>{heads.headPost}</h1>
    //             </div>
    //             <div className="row g-5 mb-5">
    //                 {
    //                     heads.headDetails.map(obj => (
    //                         <div className="col" key={obj.name}>
    //                             <ProfileCard {...obj} />
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     )
    // }

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

// row row-cols-md-4 row-col-sm-1 g-4
// row row-cols-3 row-cols-md-4 row-col-sm-1 g-5 mb-5
{/* {
                    head.map(obj => (
                        <div className={obj.post.includes("President") ? "col-6 width100" : "col-3 width100"} key={obj.name}>
                            <ProfileCard {...obj}  />
                        </div>
                    ))
                }
                {
                    volunteer.map(obj => (
                        <div className="col width100" key={obj.name}>
                            <ProfileCard {...obj} />
                        </div>
                    ))
                } */}