import React from "react"
import profilePic from '../../Assets/profile_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const TopInfoBar = () => {


        return (
            <div className='level mb-0'>
                <div className="level-left">
                    <div className="level-item">
                        <div className="container">
                            <p className="subtitle is-5">
                                <strong>Coding Challenge</strong>
                            </p>
                            <p className="subtitle is-5">
                                Ksense Technology Group LLC 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="level-right">
                    <div className="level-item">
                        <div className="container has-text-centered">
                            <figure className="image is-128x128">
                                <img className='is-rounded' src={profilePic} alt="profile-pic" />
                            </figure>
                            <p className='mt-2'><strong>Erika Manning</strong></p>
                            <div className='mt-2'>
                                <a className='mx-1' href='https://www.linkedin.com/in/erikamanning/'>  
                                    <FontAwesomeIcon icon={faLinkedin} size='lg'/>
                                </a>

                                <a className='mx-1' href='https://github.com/erikamanning'>  
                                    <FontAwesomeIcon icon={faGithub} size='lg'/>
                                </a>
                            </div>

                    </div>
                    </div>
                </div>

            </div>
        )
    
}

export default TopInfoBar;