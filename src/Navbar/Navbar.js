
import "./navbar.css"
function Navbar(){
    return(
    <nav className='nav-main-container'>
            <div className='praveen-image-container'>
                <img src='https://res.cloudinary.com/dtt87dyj1/image/upload/v1704642606/image_123986672__1_-removebg-preview_j9nuhv.png' alt='me' className='praveen-image'/>
            </div>
            <div className='button-nav-container'>
                <button className='single-button'>About</button>
                <button className='single-button'>Skills</button>
                <button className='single-button'>Projects</button>
                <button className='single-button'>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar