import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Announcement= () => {
  const [announcements] = useState([
    { id: 1, title: 'New Feature Released!', content: 'Check out the latest feature we just released.', link: 'https://example.com', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Upcoming Maintenance', content: 'Our website will undergo maintenance on the 5th of December.', link: '', imageUrl: '' },
    { id: 3, title: 'Holiday Special Offers', content: 'Get special offers on all our services this holiday season!', link: 'https://offers.com', imageUrl: 'https://via.placeholder.com/150' },
  ]);

  const [mostRecent] = useState(announcements[0]);

  useEffect(() => {
    // Optional: Fetch announcements dynamically if needed
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Most Recent Announcement */}
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-2xl mx-auto my-6 p-6 bg-gray-800 rounded-lg shadow-lg border border-purple-500"
      >
        <h2 className="text-2xl font-bold text-purple-300">{mostRecent.title}</h2>
        <p className="text-gray-300 mt-2">{mostRecent.content}</p>
        {mostRecent.link && (
          <a href={mostRecent.link} className="text-purple-400 hover:underline mt-2 inline-block">
            Learn More
          </a>
        )}
      </motion.div>

      {/* All Announcements */}
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-extrabold text-purple-300 mb-6">All Announcements</h1>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 border border-gray-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-xl font-semibold text-white">{announcement.title}</h3>
              <p className="text-gray-300 mt-2">{announcement.content}</p>
              {announcement.link && (
                <a href={announcement.link} className="text-purple-400 hover:underline mt-2 inline-block">
                  Learn More
                </a>
              )}
              {announcement.imageUrl && (
                <img src={announcement.imageUrl} alt="announcement" className="mt-4 rounded-md" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
