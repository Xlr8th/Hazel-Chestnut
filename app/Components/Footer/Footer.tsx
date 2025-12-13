import Link from "next/link"
import './Footer.css'

interface FooterProps {
    tagline: string,
}

const Footer = ({tagline}: FooterProps) => {
  return (
    <div>
        <footer id="footer" className="footer position-relative">

            <div className="container">
            <div className="row gy-5">

                <div className="col-lg-4">
                <div className="footer-brand">
                    <Link href="#" className="logo d-flex align-items-center mb-3">
                    <img className='logo' src="Logo.svg" alt="Logo" />
                    </Link>
                    <p className="tagline">{tagline}</p>

                    <div className="social-links mt-4">
                    <Link href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></Link>
                    <Link href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></Link>
                    <Link href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></Link>
                    <Link href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></Link>
                    <Link href="#" aria-label="Dribbble"><i className="bi bi-dribbble"></i></Link>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                <div className="footer-links-grid">
                    <div className="row gy-4 ">
                    <div className="col-4 col-md-4">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled">
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Our Team</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Home</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-4">
                        <h5>Categories</h5>
                        <ul className="list-unstyled">
                        <li><Link href="#">Word</Link></li>
                        <li><Link href="#">Family</Link></li>
                        <li><Link href="#">Lifestyle</Link></li>
                        <li><Link href="#">Parenting</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-4">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Books</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-12 col-lg-2">
                <div className="footer-cta">
                    <h5>Let's Connect</h5>
                    <Link href="#" className="btn btn-outline">Get in Touch</Link>
                </div>
                </div>

            </div>
            </div>

            <div className="footer-bottom">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="footer-bottom-content">
                    <p className="mb-0">© <strong>Hazel & Chestnut</strong>. All rights reserved.</p>
                    <div className="credits">
                        Designed by <Link href="https://next-js-project-er5c.vercel.app/">GEORIGE</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </footer>
      
    </div>
  )
}

export default Footer


