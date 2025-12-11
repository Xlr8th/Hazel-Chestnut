import {ReactNode} from 'react'
import Link from 'next/link'
import './globals.css'
import AOSWrapper from './AOSWrapper'
import HandleNavClick from './HandleNavClick'
import { Montserrat, Raleway, Merriweather, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-montserrat',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300','400','600','700'],
  variable: '--font-raleway',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300','400','700','900'],
  variable: '--font-merriweather',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
  variable: '--font-roboto',
});


const RootLayout = ({ children }: {children: ReactNode}) => {
  return (
    <html lang='eng'>
      <body className= {`${montserrat.variable} ${raleway.variable} ${merriweather.variable} ${roboto.variable}`}>
        <AOSWrapper>
          <HandleNavClick>
            <header className='header d-flex align-items-center position-relative'>
              <div className='menu container position-relative d-flex align-items-center justify-content-between'>
                <Link href='/' className='text-decoration-none'>
                  <img className='logo' src="Logo.svg" alt="Logo" />
                </Link>
                
                <div className="header-social-links order-sm-2">
                  <Link href="#" className="twitter link"><i className="bi bi-twitter-x"></i></Link>
                  <Link href="#" className="facebook link"><i className="bi bi-facebook"></i></Link>
                  <Link href="#" className="instagram link"><i className="bi bi-instagram"></i></Link>
                  <Link href="#" className="linkedin link"><i className="bi bi-linkedin"></i></Link>
                </div>

                <input type="checkbox" id='toggle' className='checkbox-toggle' />
                <label htmlFor="toggle" className='hamburger order-sm-3 '>
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
                
                <nav className="main-menu rounded order-sm-1">
                  <ul>
                    <li><Link className='nav-item' href='#home'>Home</Link></li>
                    <li><Link className='nav-item' href='#About'>About</Link></li>
                    <li><Link className='nav-item' href='#Categories'>Categories</Link></li>
                    <li><Link className='nav-item' href='#Novel'>Books</Link></li>
                    
                    <li><Link className='nav-item' href='#contact'>Contact</Link></li>
                  </ul>                
                </nav>               

              </div>
                      
            </header>
            
            {children}

          </HandleNavClick>
        </AOSWrapper>
        
      </body>
      
    </html>
  )
}

export default RootLayout