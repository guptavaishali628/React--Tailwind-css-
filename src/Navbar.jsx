import React from 'react'
import './Tailwind.css'

const Navbar = () => {
  
  let Fruits=['Apple', 'Mango', 'Banana', 'Grapes']

  return (
    <>
      <header className=' w-full h-20 border flex justify-between items-center pl-10 pr-10'>
        <h1>LOGO</h1>
        <nav>
            <ul className='hidden sm:flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
            </ul>
        </nav>
        <button className='border p-2 rounded-2x1 bg-cyan-500 hover:bg-amber-400'>Login</button>
      </header>
      <ul>
        {
          Fruits.map((e,idx)=>(
            // return e
            <li key={idx}>{e}</li>
          ))
        }
      </ul>

      {/* by default - mobile
      sm=640px - 768px tablet
      md= 768 - 1024 Laptop
      lg= 1024 */}
    </>
  )
}

export default Navbar
