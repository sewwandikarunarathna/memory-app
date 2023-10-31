import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg"  style={{backgroundColor: '#67595E'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MemO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-4 mb-lg-0">
        <li className="nav-item me-3 nav-txt">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item me-3">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <button className='add-btn' type='button' data-toggle="tooltip" data-placement="bottom" title="Add a memory">
          <a className="nav-link" href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
          </button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-0" type="search" placeholder="Search..." aria-label="Search" />
        <button className="btn-search" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Navbar
