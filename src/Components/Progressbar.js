import React from 'react'

const Progressbar = (props) => {
    return (
        <>
            <h5 className='skills-title'>{props.name}</h5>
            <div className="m-progress">
                <div className="m-bar m-w80" >
                    <p className="m-percent">80%</p>
                </div>
            </div>
        </>
    )
}

export default Progressbar