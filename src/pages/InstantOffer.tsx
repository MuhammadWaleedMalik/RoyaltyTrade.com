import React, { useState } from 'react';

const InstantOffer = () => {
  const [royaltyType, setRoyaltyType] = useState('');
  const [artistName, setArtistName] = useState('');
  const [catalogSize, setCatalogSize] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [incomeConsistency, setIncomeConsistency] = useState('');
  const [yearsActive, setYearsActive] = useState('');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ royaltyType, artistName, catalogSize, annualIncome, incomeConsistency, yearsActive, contactInfo });
  };

  return (
    <div className="min-h-screen bg-gray-50">
   
   
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get An Instant Offer On Your Royalties</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Tell us about your royalties and get an offer in minutes. It's free, with no obligation to sell.
          </p>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Royalties</label>
                  <select
                    value={royaltyType}
                    onChange={(e) => setRoyaltyType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select royalty type</option>
                    <option value="music">Music Royalties</option>
                    <option value="film">Film & TV Royalties</option>
                    <option value="book">Book Royalties</option>
                    <option value="patent">Patent Royalties</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Artist/Rightsholder Name</label>
                  <input
                    type="text"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter artist or rightsholder name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Catalog Size</label>
                  <select
                    value={catalogSize}
                    onChange={(e) => setCatalogSize(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select catalog size</option>
                    <option value="1-10">1-10 songs/works</option>
                    <option value="11-50">11-50 songs/works</option>
                    <option value="51-100">51-100 songs/works</option>
                    <option value="101-500">101-500 songs/works</option>
                    <option value="500+">500+ songs/works</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Royalty Income</label>
                  <select
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select annual income range</option>
                    <option value="0-10k">$0 - $10,000</option>
                    <option value="10k-25k">$10,001 - $25,000</option>
                    <option value="25k-50k">$25,001 - $50,000</option>
                    <option value="50k-100k">$50,001 - $100,000</option>
                    <option value="100k-250k">$100,001 - $250,000</option>
                    <option value="250k-500k">$250,001 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Income Consistency</label>
                  <select
                    value={incomeConsistency}
                    onChange={(e) => setIncomeConsistency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select consistency</option>
                    <option value="growing">Growing steadily</option>
                    <option value="stable">Stable/consistent</option>
                    <option value="fluctuating">Fluctuating</option>
                    <option value="declining">Declining</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years Generating Income</label>
                  <select
                    value={yearsActive}
                    onChange={(e) => setYearsActive(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select years</option>
                    <option value="0-5">0-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-20">11-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
              >
                Get My Instant Offer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Get An Instant Offer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get an Offer in Minutes</h3>
              <p className="text-gray-600">No waiting weeks or months. Our algorithm provides an initial offer based on your royalty information.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Obligation to Sell</h3>
              <p className="text-gray-600">Getting an offer doesn't mean you have to sell. It's free to see what your royalties are worth.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
              <p className="text-gray-600">Your information is protected with bank-level security and never shared without your permission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Rightsholders Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">John D.</h4>
                  <p className="text-gray-600">Music Artist</p>
                </div>
              </div>
              <p className="text-gray-700">"The process was incredibly smooth. I got an offer within minutes and was able to sell a portion of my royalties to fund my next album. Highly recommend!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-gray-600">Songwriter</p>
                </div>
              </div>
              <p className="text-gray-700">"I was hesitant at first, but the instant offer gave me a clear picture of what my catalog was worth. The team was professional and the transaction was seamless."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How accurate is the instant offer?</h3>
              <p className="text-gray-600">Our instant offer is based on market data and our proprietary valuation algorithm. While it provides a good estimate, the final offer may vary slightly after our team reviews your complete royalty statements.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is there any cost to get an offer?</h3>
              <p className="text-gray-600">No, getting an instant offer is completely free. There are no hidden fees or obligations.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What information do I need to provide?</h3>
              <p className="text-gray-600">You'll need basic information about your royalties, including type, artist name, catalog size, and annual income. For a final offer, we'll need to review your royalty statements.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How long does the process take?</h3>
              <p className="text-gray-600">The instant offer takes just minutes. If you choose to move forward with a sale, the entire process typically takes 2-4 weeks from initial offer to funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Royalties' Value?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Get an instant offer today—it's free, confidential, and there's no obligation to sell.</p>
          <a href="#form" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block">
            Get Your Instant Offer
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="https://www.royaltyexchange.com/_next/static/media/logo.7e48c5d5.svg" alt="Royalty Exchange" className="h-8 mb-4" />
              <p className="text-gray-400">The premier marketplace for buying and selling royalties.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Artists & Rightsholders</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sell Your Royalties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Investors</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Investments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Learning Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 Royalty Exchange. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InstantOffer;