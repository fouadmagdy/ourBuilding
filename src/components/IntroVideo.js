import React from 'react'
import './IntroVideo.scss'

// import videoMp4 from '../images/video.mp4'
// import videoWebm from '../images/video.webm'
import videoPreview from '../images/videoPreview.png'

const IntroVideo = () => {
    return (

        //---------------------- if you need a preview a video jusr uncomment this bg-video containenr class and import videos above and comment the image :)
        // <div className="bg-video">
        //     <video className="bg-video__content" autoplay="autoplay" muted="muted" loop="loop">
        //         <source src={videoMp4} type="video/mp4" />
        //         <source src={videoWebm} type="video/webm" />
        //         Your browser is not supported!
        //     </video>
        // </div>
        <img src={videoPreview} alt="" className="img-fluid" />
    )
}

export default IntroVideo
