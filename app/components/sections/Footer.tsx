import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-white py-20 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-1">
          <div className="mb-6">
            <div className="text-3xl font-extrabold mb-1 text-white">RISE</div>
            <div className="text-sm font-semibold tracking-widest text-slate-300">ENTERPRISES</div>
            <div className="text-xs text-slate-400 mt-1">CONTRACTOR AND DEVELOPERS</div>
            <div className="h-1 w-16 bg-slate-700 rounded mt-4" />
          </div>
          <p className="text-slate-300 mb-8 text-base leading-relaxed">
            Building Pune&apos;s future with innovation, excellence, and sustainable practices.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group border border-gray-700"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:scale-110 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Contact Information</h4>
          <div className="space-y-6">
            <div>
              <h5 className="text-sm font-semibold text-slate-300 mb-2">Reach Us</h5>
              <div className="space-y-1">
                <a href="mailto:riseenterprises2277@gmail.com" className="block text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  riseenterprises2277@gmail.com
                </a>
                <a href="mailto:satish2munde@gmail.com" className="block text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  satish2munde@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-300 mb-2">We Are Here</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                A-1 Flat no. 01, Karishma Co.Op Society Appartment Servy no. 17/2, near sangam press, Kothrud, Pune-38 Maharashtra
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-300 mb-2">Contact Us</h5>
              <div className="space-y-1">
                <a href="tel:9823662277" className="block text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  9823662277
                </a>
                <a href="tel:9823712099" className="block text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  9823712099
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
          <ul className="space-y-3">
            {[
              'Infrastructure Work',
              'Civil Construction (RCC)',
              'Development & Finishing',
              'Luxury Bungalows',
              'Commercial Buildings',
              'Road Projects',
              'Park & Garden Projects'
            ].map((service) => (
              <li key={service}>
                <a href="#services" className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: 'About Us', href: '#about' },
              { name: 'Our Projects', href: '#projects' },
              { name: 'Services', href: '#services' },
              { name: 'Our Process', href: '#process' },
              { name: 'Contact Us', href: '#contact' },
              { name: 'Get Quote', href: '#contact' }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2025 RISE Enterprises. All rights reserved. | Building Excellence Since 2022
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-400 hover:text-slate-200 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-200 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;