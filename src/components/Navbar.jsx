import companyPhoto from '../assets/companyLogo.png'

function Navbar() {
  return (
    <nav>
        <div className="navbar bg-base-100 border-b border-black-p">
            <img src={companyPhoto}></img>
        </div>
    </nav>
  )
}

export default Navbar
