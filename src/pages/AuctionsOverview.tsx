import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { websiteInfo } from '../data/website/info';
import { Link } from 'react-router-dom';

// Import language files
import enAuctions from '../data/text/en/auctions.json';
import zhAuctions from '../data/text/zh/auctions.json';
import jaAuctions from '../data/text/ja/auctions.json';
import esAuctions from '../data/text/es/auctions.json';

const languageMap = {
  en: enAuctions,
  zh: zhAuctions,
  ja: jaAuctions,
  es: esAuctions,
} as const;

type LanguageCode = keyof typeof languageMap;

const AuctionsOverview = () => {
  const { currentLanguage } = useLanguage();
  const langCode = (currentLanguage?.code as LanguageCode) || 'en';
  const pageContent = languageMap[langCode];

  const processText = (text: string) => {
    return text.replace(/\{website\.name\}/g, websiteInfo.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
  
  
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            {processText(pageContent.hero.title)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            {processText(pageContent.hero.description)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
              {pageContent.hero.ctaPrimary}
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">
              {pageContent.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Live Auctions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{pageContent.liveAuctions.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageContent.liveAuctions.auctions.map((auction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {auction.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{processText(auction.title)}</h3>
                  <p className="text-gray-600 mb-4">{processText(auction.description)}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">{pageContent.liveAuctions.currentBid}</p>
                      <p className="text-lg font-bold">{auction.currentBid}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{pageContent.liveAuctions.timeLeft}</p>
                      <p className="text-lg font-bold">{auction.timeLeft}</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    {pageContent.liveAuctions.bidNow}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{pageContent.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{processText(step.title)}</h3>
                <p className="text-gray-600">{processText(step.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{pageContent.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageContent.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{processText(benefit.title)}</h3>
                <p className="text-gray-600">{processText(benefit.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{pageContent.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pageContent.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{processText(testimonial.name)}</h4>
                    <p className="text-gray-600">{processText(testimonial.role)}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{processText(testimonial.text)}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{processText(pageContent.cta.title)}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{processText(pageContent.cta.description)}</p>
          <a href="#browse" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block">
            {processText(pageContent.cta.button)}
          </a>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default AuctionsOverview;