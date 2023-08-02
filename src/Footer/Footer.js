import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <p>Question?Call 1-866-579-7172</p>
        <div className='footer-cols'>
            <ul>
                <li>
                    <a href='#'>FAQ</a>
                </li>
                <li>
                    <a href='#'>Investor Relations</a>
                </li>
                <li>
                    <a href='#'>Corporate Information</a>
                </li>
                <li>
                    <a href='#'>Netflix Originals</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Account</a>
                </li>
                <li>
                    <a href='#'>Redeem Gift Cards</a>
                </li>
                <li>
                    <a href='#'>Privacy</a>
                </li>
                <li>
                    <a href='#'>Speed Test</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Media Center</a>
                </li>
                <li>
                    <a href='#'>Buy Gift Cards</a>
                </li>
                <li>
                    <a href='#'>Cookie Preferences</a>
                </li>
                <li>
                    <a href='#'>Legal Notices</a>
                </li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
