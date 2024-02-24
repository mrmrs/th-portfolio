import React from 'react'

const Project = ({video, title, location, design, designLead, images, ...props}) => {
    return (
        <section>
            <img src={images[0]} style={{ maxWidth: '100%', width: '100%', display: 'block' }}/>
            <div style={{border: '2px solid black', padding: '8px'}}>
                <h2 style={{ fontWeight: 400, fontSize: '20px', marginTop: 0, marginBottom: '2rem', lineHeight: 1,textTransform: 'uppercase',  }}>{title}</h2>
                <p style={{ margin: 0,textTransform: 'uppercase' }} >Design:{design}</p>
                <p style={{ margin: 0,textTransform: 'uppercase' }} >Design lead: {designLead}</p>
                <p stylr={{ margin: 0,textTransform: 'uppercase' }} >Location: {location}</p>
            </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '16px' }}>
            {images.slice(1,images.length-1).map((image) => 
                <img src={image} style={{ maxWidth: '100%', width: '100%' }}/>
                
            )}
        </div>

        </section>
    )
}

export default Project;
