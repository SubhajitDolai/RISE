import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-br from-slate-950 to-black text-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          <div className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
              RISE
            </span>
            <div className="text-sm font-medium tracking-widest mt-1 text-slate-300">ENTERPRISES</div>
            <div className="text-xs text-slate-400 mt-2">CONTRACTOR AND DEVELOPERS</div>
          </div>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-md">
            Building Pune&apos;s future with innovation, excellence, and sustainable practices. 
            Your trusted partner for world-class construction solutions since 2022.
          </p>
          <div className="flex space-x-6">
            {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <span className="text-sm font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Services</h4>
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
                <a href="#services" className="text-slate-300 hover:text-slate-100 transition-colors duration-300 text-sm">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
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
                <a href={link.href} className="text-slate-300 hover:text-slate-100 transition-colors duration-300 text-sm">
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