import React from 'react'
import Clock from './Clock'

const Header = ({helper}) => {
  return (
    <header className="mb-4  p-4 sticky  left-0 z-50 w-full rounded-md  bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20220218/pngtree-luxury-golden-blue-mandala-art-background-with-geometric-pattern-border-invitation-image_988191.jpg')] text-white">
        <h1 className="text-center text-4xl">আমার কুরআন</h1>
        <Clock/>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search Surah"
          value={helper.searchInput}
          onChange={helper.handleSearchChange}
          className="mt-4 max-w-md text-gray-600 block mx-auto p-2 text-lg rounded-md w-full  border focus:outline-none"
        />
      
    </header>
  )
}

export default Header