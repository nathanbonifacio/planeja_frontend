import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <div className="navbarMeta">
      <div>
        <Link className="back-arrow" to='/usuario/:id'> <FaArrowLeft /> </ Link>
      </div>
      <div className="logo">
        <h2>PlaneJá</h2>
      </div>
    </div>
  );
};

export default Navbar;
