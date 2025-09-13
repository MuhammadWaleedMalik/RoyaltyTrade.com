import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { websiteInfo } from '../data/website/info';
import { Link } from 'react-router-dom';

// Import language files
import enPricing from '../data/text/en/pricing.json';
import zhPricing from '../data/text/zh/pricing.json';
import jaPricing from '../data/text/ja/pricing.json';
import esPricing from '../data/text/es/pricing.json';

const languageMap = {
  en: enPricing,
  zh: zhPricing,
  ja: jaPricing,
  es: esPricing,
} as const;

type LanguageCode = keyof typeof languageMap;

const Pricing = () => {
  const { currentLanguage } = useLanguage();
  const langCode = (currentLanguage?.code as LanguageCode) || 'en';
  const pageContent = languageMap[langCode];

  const processText = (text: string) => {
    return text.replace(/\{website\.name\}/g, websiteInfo.name);
  };

  const linksData = {
    brand: {
      nameAlt: "Royalty Exchange",
      slogan: ""
    },
    sections: [
      {
        title: "Investors",
        links: [
          { path: "/about-investing", label: "About Investing" },
          { path: "/how-royalties-work", label: "How Royalties Work" },
          { path: "/create-an-account", label: "Create an Account" }
        ]
      },
      {
        title: "Music Creators",
        links: [
          { path: "/how-it-works", label: "How it Works" },
          { path: "/selling-royalties", label: "Selling Royalties" },
          { path: "/get-a-free-valuation", label: "Get a Free Valuation" }
        ]
      },
      {
        title: "Company",
        links: [
          { path: "/about", label: "About" },
          { path: "/company-news", label: "Company News" },
          { path: "/faq", label: "FAQ" },
          { path: "/contact-us", label: "Contact Us" },
          { path: "/careers", label: "Careers" }
        ]
      }
    ],
    social: {
      links: [
        { name: "Facebook", link: "https://facebook.com" },
        { name: "X", link: "https://x.com" },
        { name: "LinkedIn", link: "https://linkedin.com" },
        { name: "YouTube", link: "https://youtube.com" }
      ]
    },
    copyright: {
      text: "Copyright © 2021 Royalty Exchange. All Rights Reserved.",
      privacy: "1501 Larimer St. #700, Denver, CO 80202 U.S.",
      cookies: "+1-800-718-2269",
      terms: "Use of this website constitutes acceptance of the Terms of Use and Privacy Policy. This website (the 'Site') is operated by Royalty Exchange. By accessing the Site and any of its pages, you agree to be bound by its Terms of Use and Privacy Policy. The Site is intended for the personal use of its visitors and Royalty Exchange cannot guarantee the completeness or accuracy of any information presented on any of its pages. Royalty Exchange does not make investment recommendations or provide legal, financial advice or communication should be considered a recommendation of any investment opportunity and there can be no assurance that any investment valuation is accurate or that any investment opportunity is suitable for any particular investor."
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <section className="relative w-full py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {processText(pageContent.hero.title)}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300"
          >
            {processText(pageContent.hero.description).split('\n').slice(0, 2).map((line, index) => (
              <p key={index} className="mb-4">{line}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-left text-black mb-12">{pageContent.plans.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {pageContent.plans.items.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{processText(plan.name)}</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</p>
                  <p className="text-gray-600 mb-6">{processText(plan.description)}</p>
                  <ul className="text-gray-700 mb-6 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="mb-2">• {processText(feature)}</li>
                    ))}
                  </ul>
                  <Link
                    to={plan.ctaLink}
                    className="mt-auto text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {plan.ctaText}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar with Links */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {linksData.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {linksData.social.links.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-8 text-gray-600 text-sm">
                <p>{linksData.copyright.text}</p>
                <p className="mt-2">{linksData.copyright.privacy}</p>
                <p>{linksData.copyright.cookies}</p>
                <p className="mt-2">{linksData.copyright.terms}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-left text-white mb-8">{pageContent.faq.title}</h2>
            <div className="space-y-6">
              {pageContent.faq.items.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{processText(faq.question)}</h3>
                  <p className="text-gray-700 leading-relaxed">{processText(faq.answer)}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;