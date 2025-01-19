import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#004080',
    color: 'white',
    padding: '30px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Department Portal</h3>
            <p>© 2024 Department Portal. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/services" className="hover:underline">Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@departmentportal.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Department St, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" className="w-6 h-6"/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Twitter_Logo_2021.svg/800px-Twitter_Logo_2021.svg.png" alt="Twitter" className="w-6 h-6"/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6"/>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p>© 2024 Department Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
