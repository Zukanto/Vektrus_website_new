import React from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.product'), href: '#' },
    { name: t('nav.launchpad'), href: '#' },
    { name: t('nav.tech'), href: '#' },
    { name: t('nav.partner'), href: '#' },
    { name: t('nav.support'), href: '#' },
    { name: t('nav.company'), href: '#' }
  ];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-secondary-400 text-transparent bg-clip-text">
              Vektrus
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <LanguageToggle />
            <button className="bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
              {t('nav.request_access')}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 block px-3 py-2 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-teal-400 to-secondary-400 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 mt-4">
              {t('nav.request_access')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;