import React, { useState } from 'react'
import "./NavbarSearch.scss"

const NavbarSearch = () => {
    const [searchItem, setSearchItem] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()

    }
  return (
    <section className='navbar-modal'>
        <div className="navbar-input">
          <input 
        type="search" 
        name="search" 
        id="search" 
        value={searchItem}
        onChange={(e)=> setSearchItem(e.target.value)}
        />   
        </div>
       <div>
        <button onSubmit={handleSearch} type="submit">Search</button>
       </div>
    </section>
  )
}

export default NavbarSearch