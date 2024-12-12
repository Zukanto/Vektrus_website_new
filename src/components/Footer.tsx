import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'About', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    social: [
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'Facebook', icon: Facebook, href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Vektrus</h3>
            <p className="text-gray-400 max-w-md">
              Ready to revolutionize your social media strategy with AI-powered insights?
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Connect
              </h4>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Vektrus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;