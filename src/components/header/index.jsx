import Nav from '../nav'



const Header = () => {
    return (
        // <header className='d-flex justify-content-between p-2'>
        //     <h1 className='w-25'>Jacob Rasmusson</h1>
        //     <Nav></Nav>
        // </header>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <div>
    <h1>Jacob Rasmusson</h1>
    </div>
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <Nav></Nav>
    </div>
    </div>
  </div>
</nav>
    )
}

export default Header