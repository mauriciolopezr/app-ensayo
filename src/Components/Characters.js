import React from 'react'

const Characters = ({ characters = [] }) => {
    return (
        <div className='row'>
            {characters.map((item, index) => (
                <div key={index} className=' col mb-3'>
                    <div className='card' style={{ minWidth: "200px" }}>
                        <img src={item.image} alt='' />
                        <div className='card-body'>
                            <h6 className='card-title'>
                                {item.name}
                            </h6>
                            <hr />
                            <div>Location: {item.location.name}</div>
                            <p>Status: {item.status}</p>
                        </div>
                    </div>
                </div>
            ))}



        </div>
    );


};

export default Characters;