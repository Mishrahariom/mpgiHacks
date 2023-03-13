import React from 'react'

const SocialHandles = ({facebook, insta, linkedIn, github}) => {
  return (
    <div className='mt-2'>
        <a target="_blank" href={facebook} className="mx-2">
            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/facebook-new.png"/>
        </a>
        <a target="_blank" href={insta} className="mx-2">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png"/>
        </a>
        <a target="_blank" href={linkedIn} className="mx-2">
            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/linkedin-circled--v1.png"/>
        </a>
        <a target={github.length ? "_blank" : ""} href={github} className="mx-2">
            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/github.png"/>
        </a>
    </div>
  )
}

export default SocialHandles