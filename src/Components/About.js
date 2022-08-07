import React from 'react'
import Image from '../Images/profile.jpg';

const About = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="d-flex introduction">
            <div className="col-md-6 left-intro">
                <div>
                <h1>Hi,<br />I'm
                    <span className="text-danger"> Animesh</span>
                    <br /><strong><em> Frontend Devloper</em></strong></h1>
                <p><strong>Experience</strong> I have 2+ Year of work Experience in web development</p>
                <p><strong>Qualification :</strong> Master's in computer Application</p>

                </div>
            </div>
            <div className="col-md-6 right-intro">
                    <img className="profile-img img-fluid" src={Image} alt="Image"  />
            </div>
        </div>
    </div>
    <div className='spacebar'></div>

</>
  )
}

export default About