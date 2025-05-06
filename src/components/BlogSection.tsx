import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
      title: "10 Hidden Gems in Switzerland You Won't Find in Guide Books",
      excerpt: "Discover lesser-known alpine villages and breathtaking views that most tourists miss."
    },
    {
      image: "https://images.pexels.com/photos/5602359/pexels-photo-5602359.jpeg",
      title: "The Ultimate 7-Day Japan Itinerary for First-Time Visitors",
      excerpt: "From Tokyo's energy to Kyoto's tranquility, here's how to make the most of a week in Japan."
    },
    {
      image: "https://images.pexels.com/photos/2832077/pexels-photo-2832077.jpeg",
      title: "How to Travel Through Southeast Asia on a Budget Without Compromising Experience",
      excerpt: "Smart tips for experiencing the best of Southeast Asia while keeping costs low."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Blogs</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-purple-600 border border-gray-200 rounded-full px-4 py-1 transition-colors">
            Browse All Blogs
          </a>
        </div>
        
        <p className="text-gray-600 mb-8">
          Get inspired by travel tales and practical tips from experienced globetrotters.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a href="#" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Read Blog
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;