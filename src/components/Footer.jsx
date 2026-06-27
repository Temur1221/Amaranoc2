import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-content">
          <h2 className="footer-title">ԿՈՆՏԱԿՏՆԵՐ</h2>
          <div className="footer-info">
            <div className="info-item">
              <span className="icon"><i className="fa-solid fa-phone"></i></span>{' '}
              <a href="tel:041611611">041-611-611</a> / <a href="tel:044611611">044-611-611</a>
            </div>
            <div className="info-item">
              <span className="icon">✉</span>
              <a href="mailto:amaranoc.info@gmail.com">AMARANOC.INFO@GMAIL.COM</a>
            </div>
            <div className="info-item">
              <span className="icon"><i className="fa-brands fa-instagram"></i></span>
              <a href="https://instagram.com/amaranoc.am" target="_blank" rel="noreferrer">
                AMARANOC.AM
              </a>
            </div>
            <div className="info-item">
              <span className="icon">f</span>
              <a href="https://facebook.com/amaranoc.am" target="_blank" rel="noreferrer">
                AMARANOC.AM
              </a>
            </div>
            <div className="info-item">
              <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
              <span>ԹՈՒՄԱՆՅԱՆ 5</span>
            </div>
          </div>
          <div className="footer-policy">
            <Link to="/gaxtniutyun">Գաղտնիության քաղաքականություն</Link>
          </div>
          <div className="footer-company">
            <span>Ամառանոց ՍՊԸ</span> | <span>Amaranoc LLC</span> | <span>Ամառանոց ՍՊԸ</span>
          </div>
        </div>
      </footer>
    </>
  )
}