import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Import all language files statically
import enFooter from './en/footer.json';
import jaFooter from './ja/footer.json';
import zhFooter from './zh/footer.json';
import esFooter from './es/footer.json';
import { websiteInfo } from '../../data/website/info';

// Create a language map
const languageMap = {
  en: enFooter,
  ja: jaFooter,
  zh: zhFooter,
  es: esFooter
};

interface FooterContent {
  brand: {
    nameAlt: string;
    slogan: string;
  };
  sections: {
    title: string;
    links: {
      path: string;
      label: string;
    }[];
  }[];
  social: {
    links: {
      name: string;
      link: string;
    }[];
  };
  copyright: {
    text: string;
    privacy: string;
    cookies: string;
    terms: string;
  };
}

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();

  // Get page content directly from languageMap, default to English if not found
  const pageContent: FooterContent = languageMap[currentLanguage.code as keyof typeof languageMap] || languageMap.en;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-black text-white py-6 z-10"
    >
      <div className="max-w-7xl mx-auto px-44 flex flex-col md:flex-row justify-between items-start">
        {/* Investors Section */}
        <div className="mb-6 md:mb-0">
          <img src={websiteInfo.logo} alt="website logo"  />
          <h3 className="text-4xl font-semibold mb-2">{websiteInfo.name}</h3>
       
        </div>

        {/* Music Creators Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">{pageContent.sections[1].title}</h3>
          <ul className="space-y-1">
            {pageContent.sections[1].links.map((link, index) => (
              <li key={index}><Link to={link.path} className="text-sm hover:underline">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">{pageContent.sections[2].title}</h3>
          <ul className="space-y-1">
            {pageContent.sections[2].links.map((link, index) => (
              <li key={index}><Link to={link.path} className="text-sm hover:underline">{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

  
  
      {/* Copyright and Info */}
      <div className="max-w-7xl mx-auto px-4 mt-6 text-center">
        <p className="text-sm">{pageContent.copyright.text}</p>
        <p className="text-sm">{pageContent.copyright.privacy}</p>
        <p className="text-sm">{pageContent.copyright.cookies}</p>
        <p className="text-sm">{pageContent.copyright.terms}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;