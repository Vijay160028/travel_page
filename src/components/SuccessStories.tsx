import React from 'react';
import { Play } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      image: "https://images.pexels.com/photos/2901913/pexels-photo-2901913.jpeg",
      views: "128 views"
    },
    {
      image: "https://images.pexels.com/photos/2901312/pexels-photo-2901312.jpeg",
      views: "156 views"
    },
    {
      image: "https://images.pexels.com/photos/2105935/pexels-photo-2105935.jpeg",
      views: "103 views"
    },
    {
      image: "https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg",
      views: "176 views"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Hear Travel success stories</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-purple-600 border border-gray-200 rounded-full px-4 py-1 transition-colors">
            Browse All Videos
          </a>
        </div>
        
        <p className="text-gray-600 mb-8">
          Only travelers who have traveled these cities can help you get answers
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img 
                  src={story.image} 
                  alt={`Travel story ${index + 1}`} 
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <Play className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded-full">
                  {story.views}
                </div>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Sed nantes magna eu, pharetra molestie.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;