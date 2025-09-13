import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { websiteInfo } from '../data/website/info';
import { Link } from 'react-router-dom';

// Import language files
import enAbout from '../data/text/en/about.json';
import zhAbout from '../data/text/zh/about.json';
import jaAbout from '../data/text/ja/about.json';
import esAbout from '../data/text/es/about.json';

const languageMap = {
  en: enAbout,
  zh: zhAbout,
  ja: jaAbout,
  es: esAbout,
} as const;

type LanguageCode = keyof typeof languageMap;

const AboutUs = () => {
  const { currentLanguage } = useLanguage();
  const langCode = (currentLanguage?.code as LanguageCode) || 'en';
  const pageContent = languageMap[langCode];

  const processText = (text: string) => {
    return text.replace(/\{website\.name\}/g, websiteInfo.name);
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
            className="text-xl sm:text-2xl text-gray-300 "
          >
            {processText(pageContent.hero.description).split('\n').slice(0, 2).map((line, index) => (
              <p key={index} className="mb-4">{line}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-left text-black mb-8">Our Mission</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg "
          >
            <p className="text-gray-900 leading-relaxed whitespace-pre-line">
              {processText(pageContent.mission)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
  
  <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-left text-black mb-12">Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {pageContent.team.members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center p-6"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{processText(member.name)}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      
  
    </div>
  );
};

export default AboutUs;