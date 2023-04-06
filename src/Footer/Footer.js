import './footer.css'

function Footer() {
  return (
    <footer>
        <div className='top'>
            <div className='links'>
                <div>
                    <h2>Platforms</h2>
                    <a>Android</a>
                </div>
                <div>
                    <h2>Cloud</h2>
                    <a>Google</a>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <div className='legal'>
                <span>2023 All rights reserved</span>
                <a>License</a>
            </div>
            <div className='links'>
                <a></a>
                <a></a>
                <a></a>
            </div>
        </div>

    </footer>

  )
}

export default Footer