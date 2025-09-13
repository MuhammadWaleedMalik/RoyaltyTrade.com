import React, { useMemo, Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { websiteInfo } from '../data/website/info';
import { colors } from '../data/colors/theme';

const LazyImage = lazy(() => import('../components/LazyImage'));

// Import language files
import enHome from '../data/text/en/home.json';
import zhHome from '../data/text/zh/home.json';
import jaHome from '../data/text/ja/home.json';
import esHome from '../data/text/es/home.json';

const languageMap = {
  en: enHome,
  zh: zhHome,
  ja: jaHome,
  es: esHome,
};

// Define types for better type safety
type CardItem = {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
  price?: string;
};

type TestimonialItem = {
  name?: string;
  role?: string;
  quote?: string;
};

type StatItem = {
  number?: string;
  label?: string;
};

interface HomeContent {
  hero?: {
    title?: string;
    subtitle?: string;
    cta?: string;
  };
  partners?: {
    title?: string;
  };
  stats?: {
    title?: string;
    stats?: StatItem[];
  };
  products?: {
    title?: string;
    items?: CardItem[];
  };
  services?: {
    title?: string;
    description?: string;
    cta?: string;
  };
  dualImage?: {
    leftTitle?: string;
    leftSubtitle?: string;
    leftCta?: string;
    rightTitle?: string;
    rightSubtitle?: string;
    rightCta?: string;
  };
  feature?: {
    title?: string;
    subtitle?: string;
    subtitle1?: string;
    subtitle2?: string;
    cta?: string;
  };
  newsletter?: {
    title?: string;
    subtitle?: string;
    placeholder?: string;
    options?: string[];
    cta?: string;
  };
  finalCta?: {
    title?: string;
    cta1?: string;
    cta2?: string;
  };
}

const processText = (text?: string): string => {
  if (!text) return '';
  return text
    .replace(/\{website\.name\}/g, websiteInfo?.name || '')
    .replace(/\{website\.slogan\}/g, websiteInfo?.slogan || '')
    .replace(/\{primaryColor1\}/g, colors.primaryColor1 || '')
    .replace(/\{primaryColor3\}/g, colors.primaryColor3 || '');
};

const Home: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const defaultContent = languageMap.en as HomeContent;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const pageContent = useMemo(() => {
    return languageMap[currentLanguage?.code as keyof typeof languageMap] || defaultContent;
  }, [currentLanguage?.code]);

  const processedContent = useMemo(() => {
    return {
      hero: {
        title: processText(pageContent.hero?.title),
        subtitle: processText(pageContent.hero?.subtitle),
        cta: processText(pageContent.hero?.cta),
      },
      partners: {
        title: processText(pageContent.partners?.title),
      },
      stats: {
        title: processText(pageContent.stats?.title),
        stats: pageContent.stats?.stats || [],
      },
      products: {
        title: processText(pageContent.products?.title),
        items: pageContent.products?.items || [],
      },
      services: {
        title: processText(pageContent.services?.title),
        description: processText(pageContent.services?.description),
        cta: processText(pageContent.services?.cta),
      },
      dualImage: {
        leftTitle: processText(pageContent.dualImage?.leftTitle),
        leftSubtitle: processText(pageContent.dualImage?.leftSubtitle),
        leftCta: processText(pageContent.dualImage?.leftCta),
        rightTitle: processText(pageContent.dualImage?.rightTitle),
        rightSubtitle: processText(pageContent.dualImage?.rightSubtitle),
        rightCta: processText(pageContent.dualImage?.rightCta),
      },
      feature: {
        title: processText(pageContent.feature?.title),
        subtitle: processText(pageContent.feature?.subtitle),
        subtitle1: processText(pageContent.feature?.subtitle1),
        subtitle2: processText(pageContent.feature?.subtitle2),
        cta: processText(pageContent.feature?.cta),
      },
      newsletter: {
        title: processText(pageContent.newsletter?.title),
        subtitle: processText(pageContent.newsletter?.subtitle),
        placeholder: processText(pageContent.newsletter?.placeholder),
        options: pageContent.newsletter?.options || [],
        cta: processText(pageContent.newsletter?.cta),
      },
      finalCta: {
        title: processText(pageContent.finalCta?.title),
        cta1: processText(pageContent.finalCta?.cta1),
        cta2: processText(pageContent.finalCta?.cta2),
      }
    };
  }, [pageContent]);

  // Media assets
  const mediaAssets = {
    heroImage1: 'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/64ece99cd40b0ad03a9bd9d3_60a5246574891b2ce2a7cb73_608f36d2b02b42ddc7fb24f4_royaltyexchnageheader%20(1).webp',
    heroImage2: 'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/64ece99bdfda793aa98a7914_604a9555784a8cf053c14972_Music%20Video%20Financing.webp',
    partnerLogos: [
        'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/604a977c70746d33df1fbf5c_rolling-stone.png',
        'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/606ca46df91ac70e0c170417_la-times.svg',
        'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/604a977e5574404318caa5d1_forbes.png',
        'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/604a977e70746d17101fbf5d_billboard.png',
        'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/604a977da4adc53ab258111c_fast%20company.png',
    ],
    productImages: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKW6bR3-1puwrPTutpb8-GRXedkXNPJGTjxA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUb6qB_DK8h-UlAg3eTh_YEBQdO81aoJayqw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNU4ekI_FA_mv9m6mAaUBxJJ0Mu1Ej5gm8w&s ',
        '',
        '',
    ],
    dualImageLeft: 'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/60a524eacf765316ec0fdfbb_creator_pointing%20(1).png',
    dualImageRight: 'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/60a524c269313895fc720cb4_investors_chart%20(1).png',
    featureImage: 'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/608f3d5e7874984e1e6a8a92_the_exchange.png',
    decorativeImages: [
      'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/604a9309b0a8656d9e80d58e_art.svg',
      'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/608f3d9837ad3c56b623c6d4_art-5.svg',
      'https://images.unsplash.com/photo-1547996160-81df9d3e7ef1',
      'https://cdn.prod.website-files.com/604a7d8abe731579c1cdfd8b/604a9309b0a8656d9e80d58e_art.svg',
    ]
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ backgroundColor: "#FFFFFF", fontFamily: 'TimesNewRoman' }}>
      {/* Decorative Background Images */}
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div 
          className="absolute top-1/4   right-[50%] w-full h-full "
          initial={{ x: -100, opacity: 1 }}
          animate={{ x: 0,  opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Suspense fallback={<div className="w-full h-full  rounded-full" />}>
            <img 
              src={mediaAssets.decorativeImages[0]}
              alt="Decorative background"
              className="w-full h-full object-contain rounded-full"
            />
          </Suspense>
        </motion.div>
        
        <motion.div 
          className="absolute top-0/2 -right-[70%] w-full h-full"
          initial={{ x: 100, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Suspense fallback={<div className="w-full h-full rounded-full" />}>
            <img 
              src={mediaAssets.decorativeImages[1]}
              alt="Decorative background"
              className="w-full h-full object-cover rounded-full"
            />
          </Suspense>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-full h-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Suspense fallback={<div className="w-full h-full bg-gray-300 rounded-full" />}>
            <img 
              src={mediaAssets.decorativeImages[2]}
              alt="Decorative background"
              className="w-full h-full object-cover rounded-full"
            />
          </Suspense>
        </motion.div>
        
    
    
      </div>

      {/* Page 1 - Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center min-h-screen py-20 px-6 lg:px-8 z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ color: colors.textPrimary  , fontFamily : "TimesNewRoman"}}
            >
              {processedContent.hero.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ color: colors.textSecondary }}
            >
              {processedContent.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/cataloguedeal"
                className="inline-block px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor1, 
                  color: "white"
                }}
              >
                {processedContent.hero.cta}
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column - Images */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden  h-64">
              <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse" />}>
                <img 
                  src={mediaAssets.heroImage1}
                  alt="Hero image 1"
                  className="w-full h-full object-contain"
                />
              </Suspense>
            </div>
            <div className="rounded-xl overflow-hidden  h-64">
              <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse" />}>
                <img 
                  src={mediaAssets.heroImage2}
                  alt="Hero image 2"
                  className="w-full h-full object-contain"
                />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 2 - Trusted Partners Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8 bg-white relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: colors.textPrimary }}>
            {processedContent.partners.title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {mediaAssets.partnerLogos.map((logo, index) => (
              <motion.div 
                key={index}
                className="h-16 w-16 md:h-48 md:w-48 grayscale contrast-200 opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse rounded" />}>
                  <LazyImage 
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </Suspense>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Page 3 - Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8 relative z-0"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-7xl mx-auto">

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {processedContent.stats.stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-8xl font-bold mb-4" style={{ color: "#4E3BCA" }}>
                  {stat.number}
                </div>
                <div className="text-3xl" style={{ color: colors.textSecondary }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Page 4 - Products Section */}
   
   <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-20 px-6 lg:px-8 relative z-10"
  >
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto pb-6">
        <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
          {processedContent.products.items.map((product, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg flex-shrink-0 relative"
              style={{ width: '300px', backgroundColor: 'white' }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="h-48 overflow-hidden relative">
                <Suspense fallback={<div className="w-48 h-48 animate-pulse" />}>
                  <LazyImage 
                    src={mediaAssets.productImages[index] || mediaAssets.productImages[0]}
                    alt={product.title || `Product ${index + 1}`}
                    className="w-24 h-24 object-contain"
                  />
                </Suspense>
                {/* Thin line overlay inspired by the image */}
              
               </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold" style={{ color: colors.primaryColor1 }}>
                    {product.price}
                  </span>
                  <Link
                    to={product.link || "#"}
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                    style={{ 
                      backgroundColor: colors.primaryColor1, 
                      color: "white"
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>



      {/* Page 5 - Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-0 px-0 lg:px-8 relative z-10"
        style={{ backgroundColor: "white" }}
      >
        <div className=" p-10 mx-auto text-left">
          <h2 className="text-3xl md:text-7xl font-bold mb-6 text-black">
            {processedContent.services.title}
          </h2>
          <p className="text-xl mb-8 text-black opacity-90">
            {processedContent.services.description}
          </p>
        
         </div>
      </motion.section>

      {/* Page 6 - Dual Image Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, }}
        className="py-0 px-6 lg:px-0 relative z-99"
      >
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Image Card */}
          <motion.div 
            className="relative rounded-none overflow-hidden  h-96"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse" />}>
              <LazyImage 
                src={mediaAssets.dualImageLeft}
                alt="Left section image"
                className="w-full h-full object-cover"
              />
            </Suspense>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-left text-left p-6">
              <h3 className="text-2xl md:text-6xl font-bold mb-4 text-white">
                {processedContent.dualImage.leftTitle}
              </h3>
              <p className="text-white mb-6">
                {processedContent.dualImage.leftSubtitle}
              </p>
              <Link
                to="/left-cta"
                className="px-6 py-2 rounded-lg text-white font-semibold border-2 border-white transition-all duration-300 hover:bg-white hover:bg-opacity-20"
              >
                {processedContent.dualImage.leftCta}
              </Link>
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div 
            className="relative rounded-none overflow-hidden  h-96"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse" />}>
              <LazyImage 
                src={mediaAssets.dualImageRight}
                alt="Right section image"
                className="w-full h-full object-cover"
              />
            </Suspense>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-left text-left p-6">
              <h3 className="text-2xl md:text-6xl font-bold mb-4 text-white">
                {processedContent.dualImage.rightTitle}
              </h3>
              <p className="text-white mb-6">
                {processedContent.dualImage.rightSubtitle}
              </p>
              <Link
                to="/right-cta"
                className="px-6 py-2 rounded-lg text-white font-semibold border-2 border-white transition-all duration-300 hover:bg-white hover:bg-opacity-20"
              >
                {processedContent.dualImage.rightCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 7 - Feature Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8 relative z-10"
        style={{ backgroundColor: "#F8FAFC" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-xl overflow-hidden ">
            <Suspense fallback={<div className="w-full h-96  animate-pulse" />}>
              <LazyImage 
                src={mediaAssets.featureImage}
                alt="Feature image"
                className="w-full h-full object-cover"
              />
            </Suspense>
          </div>
          
          {/* Right Column - Content */}
          <div className='text-right'>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.feature.title}
            </h2>
            <p className="text-xl mb-8" style={{ color: colors.textSecondary }}>
              {processedContent.feature.subtitle}
            </p>
            <p className="text-xl mb-8" style={{ color: colors.textSecondary }}>
                {processedContent.feature.subtitle1}
            </p>
            <p className="text-xl mb-8" style={{ color: colors.textSecondary }}>
              {processedContent.feature.subtitle2}
            </p>
          
            <Link
              to="/feature"
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: colors.primaryColor1, 
                color: "white"
              }}
            >
              {processedContent.feature.cta}
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Page 8 - Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8 relative z-10 "
        style={{backgroundColor : "#4E3BCA"}}
      >
        <div className="max-w-2xl mx-auto bg-transparent rounded-xl  p-8 md:p-12">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center text-white" >
            {processedContent.newsletter.title}
          </h2>
          <p className="text-2xl mb-8 text-center text-white">
            {processedContent.newsletter.subtitle}
          </p>
          
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder={processedContent.newsletter.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2  text-white" >
                I'm primarily interested in...
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {processedContent.newsletter.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 font-semibold rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: colors.primaryColor1, 
                color: "white"
              }}
            >
              {processedContent.newsletter.cta}
            </button>
          </form>
        </div>
      </motion.section>

      {/* Page 9 - Final CTA Section */}
      <motion.section className='p-20 bg-white'>
          <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8 relative z-10"
        style={{ backgroundColor: "#4E3BCA" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0 text-center md:text-left text-white">
            {processedContent.finalCta.title}
          </h2>
          
          <div className="flex flex-col sm:flex-col gap-4">
            <Link
              to="/cta1"
              className="px-8 py-3 font-semibold rounded-lg text-center transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: "white", 
                color: "#1F305B"
              }}
            >
              {processedContent.finalCta.cta1}
            </Link>
            <Link
              to="/cta2"
              className="px-8 py-3 font-semibold rounded-lg text-center border transition-all duration-300 transform hover:scale-105"
              style={{ 
                borderColor: "white",
                color: "white"
              }}
            >
              {processedContent.finalCta.cta2}
            </Link>
          </div>
        </div>
      </motion.section>
    
      </motion.section>
    
    </div>
  );
};

export default Home;