import React, { useState } from 'react'
import './filterComponent.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getFilter, selectFilteredGames, selectGames } from '../../redux/Games'

const FilterComponent = () => {
  const [term, setTerm] = useState("");
  let filteredGames = useSelector(selectFilteredGames);
  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    if(term === ""){
      return alert("Please enter the Game !")
    }
    dispatch(getFilter(term))
    setTerm("") 
  }
  
  return (
    <div className="row" id='inputRow'>
      <div className="col-12 col-md-12 col-sm-12" id='inputSearch'>
        <form onSubmit={submitHandler}>
        <div class="input-group mb-3 d-flex justify-content-center">
          <span class="input-group-text" id="basic-addon1"><button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          </button>
          </span>
          <input
            type="text"
            placeholder="Ara"
            value={term}
            aria-label="Ara"
            aria-describedby="basic-addon1"
            onChange={(e) => setTerm(e.target.value)}
            id='input'>
          </input>
        </div>
        </form>
      </div>
    </div>
  )
}

export default FilterComponent
