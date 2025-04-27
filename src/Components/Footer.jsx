import React from "react"
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop Hub</h3>
            <p className="text-slate-300">
              Your one-stop destination for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-yellow-400" />
                <span className="text-slate-300">123 Shopping Street, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-yellow-400" />
                <span className="text-slate-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-yellow-400" />
                <span className="text-slate-300">contact@shophub.com</span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-4 text-center text-slate-300">
          <p>© {new Date().getFullYear()} Shop Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer