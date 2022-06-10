import React, { useEffect, useState } from 'react'
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";


function App() {

  const urloriginal = "https://rickandmortyapi.com/api/character";

  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = (urloriginal) => {
    fetch(urloriginal)
      .then(respuesta => respuesta.json())
      .then(data => {setCharacters(data.results)
      setInfo(data.info)})
      .catch(error => console.log(error))
  }

  const onChangePage = (pagenext) => {
    if (page + pagenext < 1) return;
    if (page + pagenext > 41) return;
    setPage(page + pagenext);
  }

  useEffect(() => {
    fetchCharacters(urloriginal);
  }, [])

  const clicknext = () => {
    fetchCharacters(info.next)
  }

  const clickprevious = () => {
    fetchCharacters(info.prev)
  }

  return (
    <>
      <Navbar brand="HOLA MUNDO!!!" />

      
        <nav className='container mt-4 justify-center'>
            <ul className='pagination justify-center'>
                {
                    (info.prev) ? (
                        <li >
                            <button className='page-link' onClick={ () => {onChangePage(-1); clickprevious()}}>
                                Prev
                            </button>
                        </li>
                    )
                        : null
                }
                  <h5 className='mt-1'> { page } </h5>
                {
                    (info.next) ? (
                        <li >
                            <button className='page-link' onClick={() => {onChangePage(1); clicknext()}}>
                                Next
                            </button>
                            
                        </li>)
                    : null
                }
                  < Characters characters={characters} />
                  
                  
            </ul>
        </nav>
      
    </>


  );
}

export default App;

