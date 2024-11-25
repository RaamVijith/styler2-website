import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterLinkProps {
  title: string;
  links: string[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => (
  <div className="flex flex-1 flex-col space-y-2">
    <h3 className="font-semibold text-gray-800 mb-2 text-xl">{title}</h3>
    {links.map((link, index) => (
      <a
        key={index}
        href="#"
        className="text-[#7D7D7D] hover:text-gray-900 transition-colors duration-200 text-lg"
      >
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const aboutLinks = ['Styler Inside', 'About Us', 'Company', 'Careers', 'Brands'];
  const categoryLinks = ['Woman Denim', 'Accessories', 'Man Denim', 'Clothes', 'Shoes'];
  const campaignLinks = ['Winter Shoes', 'Women T-shirts', '%50 Sales', 'Outlet', 'Pre-Sale'];
  const helpLinks = ['Order Tracking', 'Terms & Conditions', 'Privacy Policy', 'Tutorials', 'FAQ'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-[1px] ">
      <div className="w-full mx-auto pt-12">
        <div className="grid xl:flex xl:flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-5 py-[3%]">
          {/* Footer Link Sections */}
          <FooterLinkSection title="About Styler" links={aboutLinks} />
          <FooterLinkSection title="Categories" links={categoryLinks} />
          <FooterLinkSection title="Campaigns" links={campaignLinks} />
          <FooterLinkSection title="Help" links={helpLinks} />
          
          {/* Newsletter Section */}
          <div className="flex flex-5 flex-col space-y-4 w-[32vw]">
            <h3 className="font-semibold text-gray-800 text-xl">Newsletter</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your E-mail"
                className="p-6 mt-3 border text-center border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="bg-[#252525] text-white py-3 mt-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200">
                Submit
              </button>
            </div>
            <p className="text-lg text-[#7D7D7D]">
              Sign up to get the latest on new Products, Promotions, Design news and more
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 py-6 border-t border-gray-200 bg-[#252525] px-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Contact Information */}
            <div className="flex items-center space-x-4 text-gray-100">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>0980 444 45 456</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>HELLO@DEMOSTYLER.COM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-100 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-100 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-100 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>

            {/* Copyright and Scroll to Top */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-100">COPYRIGHT - STYLER.COM</span>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;