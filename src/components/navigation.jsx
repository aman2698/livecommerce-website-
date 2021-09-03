export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top' style={{backgroundColor:"#2b3b4c"}}>
      <div className='container' >
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top' style={{color:"floralwhite"}}>
            Live Commerce India
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll ' style={{color:"floralwhite"}}>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll' style={{color:"floralwhite"}}>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll' style={{color:"floralwhite"}}>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll' style={{color:"floralwhite"}}>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll' style={{color:"floralwhite"}}>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll' style={{color:"floralwhite"}}>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll' style={{color:"floralwhite"}}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
