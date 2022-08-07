import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <>
            <div className='container-fluid'>
                <h2 className='text-center heading-h2 uppercase'>Services</h2>
                <div className="skills-row">
                    <ServiceCard name={"Static Website"}></ServiceCard>
                    <ServiceCard name={"Shopify Development"}></ServiceCard>
                    <ServiceCard name={"Mobile Friendly"}></ServiceCard>
                    <ServiceCard name={"Single Page Application"}></ServiceCard>
                    <ServiceCard name={"Static Website"}></ServiceCard>
                    <ServiceCard name={"Shopify Development"}></ServiceCard>
                    <ServiceCard name={"Mobile Friendly"}></ServiceCard>
                    <ServiceCard name={"Single Page Application"}></ServiceCard>
                </div>

            </div>
        </>
    )
}

export default Services