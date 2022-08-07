import React from 'react'
import Progressbar from './Progressbar'

const TechnicalSkills = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="skilss-progressbar">
                    <h2 className='text-center heading-h2 uppercase'>Technical skills</h2>
                    <Progressbar name={"HTML"} />
                    <Progressbar name={"CSS"} />
                    <Progressbar name={"JAVASCRIPT"} />
                    <Progressbar name={"JQUERY"} />
                    <Progressbar name={"REACT"} />
                    <Progressbar name={"SHOPIFY"} />
                </div>
            </div>
          <div className="spacebar"></div>
        </>
    )
}

export default TechnicalSkills