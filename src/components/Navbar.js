import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("address");
    navigate("/login");
  }
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl ">
          <div className="row align-items-center" style={{backgroundColor:"black"}}>
            <div className="col-2">
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>
            <div className="col-5">
          
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex gap-15 flex-row-reverse ">
                {
              (!localStorage.getItem("token")) ?
                <div className='d-flex'>
                  <Link className='btn bg-white text-success mx-1' to='/login'>Login</Link>
                  <Link className='btn bg-white text-success mx-1' to='/signup'>SignUp</Link>
                </div>
                :
                <div>
                  <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
                </div>
            }


              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar