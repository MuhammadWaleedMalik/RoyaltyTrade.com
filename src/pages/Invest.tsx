import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { websiteInfo } from '../data/website/info';
import { Link } from 'react-router-dom';

// Import language files
import enInvest from '../data/text/en/invest.json';
import zhInvest from '../data/text/zh/invest.json';
import jaInvest from '../data/text/ja/invest.json';
import esInvest from '../data/text/es/invest.json';

const languageMap = {
  en: enInvest,
  zh: zhInvest,
  ja: jaInvest,
  es: esInvest,
} as const;

type LanguageCode = keyof typeof languageMap;

const Invest = () => {
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
          
     
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-3/3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {pageContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-100 p-6 rounded-lg"
                >
                  <h3 className="text-7xl font-bold" style={{color: "#4E3BCA"}}>{stat.value}</h3>
                  <p className="text-black">{processText(stat.label)}</p>
                </motion.div>
              ))}
            </div>
          </div>
       
        </div>
      </section>

      {/* Featured Assets Section */}
      <section className="grid  grid-row-3 py-16 px-4 sm:px-6 md:px-8 bg-white text-black">
        <div className="grid  grid-col-1 gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-8">{pageContent.assets.title}</h2>
            <div className="grid grid-cols-1 gap-8">
              {pageContent.assets.items.map((asset, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{processText(asset.title)}</h3>
                  <p className="text-gray-600 mt-2">{processText(asset.description)}</p>
                  <ul className="mt-4 text-gray-700">
                    <li><strong>Term:</strong> {asset.term}</li>
                    <li><strong>Royalty Type:</strong> {asset.royaltyType}</li>
                    <li><strong>Price:</strong> {asset.price}</li>
                    <li><strong>Multiple:</strong> {asset.multiple}</li>
                    <li><strong>Yield:</strong> {asset.yield}</li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>

      {/* Why Royalties Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{pageContent.whyRoyalties.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {pageContent.whyRoyalties.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-100 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{processText(item.title)}</h3>
                  <p className="text-gray-600 mt-2">{processText(item.description)}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/investment-thesis"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {pageContent.whyRoyalties.cta}
              </Link>
            </div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-8">{pageContent.membership.title}</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg"
            >
              <p className="text-gray-700 leading-relaxed">{processText(pageContent.membership.description)}</p>
              <div className="mt-4">
                <Link
                  to="/membership"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {pageContent.membership.cta}
                </Link>
              </div>
            </motion.div>
            <div className="mt-6 text-gray-300 italic">
              <p>{processText(pageContent.membership.quote.text)}</p>
              <p className="mt-2">{pageContent.membership.quote.source}</p>
            </div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>

      {/* Investing Made Easy Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{pageContent.investing.title}</h2>
            {pageContent.investing.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">{processText(item.title)}</h3>
                <p className="text-gray-600 mt-2">{processText(item.description)}</p>
              </motion.div>
            ))}
            <div className="mt-8">
              <Link
                to="/investing-guide"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {pageContent.investing.cta}
              </Link>
            </div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-8">{pageContent.getStarted.title}</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg"
            >
              <ul className="text-gray-700 list-disc list-inside">
                {pageContent.getStarted.items.map((item, index) => (
                  <li key={index} className="mb-2">{processText(item)}</li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  to="/create-an-account"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {pageContent.getStarted.cta}
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>

      {/* Exchange Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{pageContent.exchange.title}</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <p className="text-gray-700 leading-relaxed">{processText(pageContent.exchange.description)}</p>
            </motion.div>
          </div>
          <div className="md:w-1/3"></div>
        </div>
      </section>
    </div>
  );
};

export default Invest;