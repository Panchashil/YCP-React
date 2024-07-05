import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
          <Link to="images" className='btn btn-primary btn-sm'>Images</Link>{" "}
          <Link to="classcomp" className='btn btn-primary btn-sm'>ClassComp</Link>{" "}
          <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
          <Link to="formval" className='btn btn-primary btn-sm'>FormVal</Link>{" "}
          <Link to="productdash" className='btn btn-outline-warning btn-sm'>ProductDash</Link>{" "}
        </div>
    )
}

export default NavComp
