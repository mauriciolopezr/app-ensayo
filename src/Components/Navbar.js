import React from 'react'

const Navbar = ({brand}) => {
    return (
       
            <nav className = "navbar navbar-dark bg-dark">
                <div className='container'>
                <a className = "navbar-brand" href = "/">
                    {brand}
                <p>Bienvenidos! Primeros pasos con React.</p>
                </a>
                </div>          
            </nav>
           
    )    
} 

export default Navbar;