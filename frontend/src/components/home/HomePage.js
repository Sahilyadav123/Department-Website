import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const closeAnnouncement = () => {
    setIsAnnouncementVisible(false);
  };

  const updates = [
    { id: 1, title: 'Update 1', imageUrl: 'https://via.placeholder.com/300x225', description: 'Description for update 1' },
    { id: 1, title: 'Update 1', imageUrl: 'https://via.placeholder.com/300x225', description: 'Description for update 1' },
    { id: 1, title: 'Update 1', imageUrl: 'https://via.placeholder.com/300x225', description: 'Description for update 1' },
    { id: 1, title: 'Update 1', imageUrl: 'https://via.placeholder.com/300x225', description: 'Description for update 1' },
    { id: 2, title: 'Update 2', imageUrl: 'https://via.placeholder.com/300x225', description: 'Description for update 2' },
    { id: 3, title: 'Update 3', imageUrl: 'https://via.placeholder.com/300x225', description: 'Description for update 3' },
    // Add more updates as needed
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'student') {
      navigate('/login'); // Navigate to student login page
    } else if (role === 'teacher') {
      navigate('/faculty-login'); // Navigate to faculty login page
    }
  };

  return (
    <div className={`relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
      >
        Toggle Dark Mode
      </button>

      {/* Full width image */}
      <div className="w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/b7cc/7975/28525e95ea89bbddcc9c00bf372856b4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjfhWpr2K7haolqQ4uAg-1qDi79fmUGztCat87spK90UaipGx66tcZG8HYnMrq0VinY5UE73QV4LQNh7p4JvbLOTNcAHh60j74qTMhIxq23QHWf0khyjyphLW9RzywL0YJGktvcgpMWCaZt1teo8Vo0w5L1TF5m4YaIAuIvlvT0N7E4yMoDVV7OCzIGZJRJrrgMHQUgK0gmT7qNJKr9YAIJTYemgqkrd0sgpE5p6PUYDonftbwl6DB0U~kAEiBKjpGY45kuhp2OjeUF3qL-LuAfVs04Bdaq9X9nIP23uKxSJVG8IyCeBx4iRDAp~6bVFbz2mQX6PxFngHfdJHnVugA__)' }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-4xl text-white font-bold">Welcome to the Department Portal</h2>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 py-6">
        <div className="text-center mb-10">
          <p className="text-lg">This is a place where students and teachers collaborate.</p>
        </div>

        {/* Role Selection */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => handleRoleSelect('student')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
          >
            Student
          </button>
          <button
            onClick={() => handleRoleSelect('teacher')}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600"
          >
            Teacher
          </button>
        </div>

        {/* Announcement Scrolling */}
        {isAnnouncementVisible && (
          <div className="bg-gray-200 p-4 mb-8 relative">
            <h3 className="text-xl font-semibold mb-4 text-red-500">Latest Announcement</h3>
            <div className="overflow-hidden">
              <div className="whitespace-nowrap animate-marquee">
                <p className="inline-block text-lg font-medium text-gray-800">
                  Random Announcement: The final date for certificate submission is approaching! Submit your certificates before the deadline.
                </p>
              </div>
            </div>
            <button
              onClick={closeAnnouncement}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        )}

        {/* Latest Updates Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-extrabold text-purple-300 text-center">Latest Updates</h2>
          <p className="text-lg text-center text-gray-400 mb-8">Stay up to date with the latest news and updates from the department.</p>

          {/* Updates Grid */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    className="w-full h-48 object-cover transition duration-300 transform hover:scale-110"
                    src={update.imageUrl}
                    alt={update.title}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-purple-300">{update.title}</h3>
                    <p className="text-gray-400 mt-2">{update.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
