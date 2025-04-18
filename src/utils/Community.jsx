import React from 'react';

const Community = () => {
  const articles = [
    {
      id: 1,
      title: "How I Transitioned from Academia to Industry",
      excerpt: "After 6 years in research, I made the leap to tech. Here's what I learned during my journey and how mentorship played a crucial role.",
      author: {
        name: "Dr. Sarah Chen",
        role: "Senior Data Scientist",
        avatar: "/api/placeholder/40/40"
      },
      tags: ["Career Transition", "Tech Industry", "Mentorship"],
      timeToRead: "8 min read",
      date: "April 15, 2025",
      likes: 124,
      comments: 32
    },
    {
      id: 2,
      title: "5 Tips for Finding the Right Mentor in Your Field",
      excerpt: "The mentor-mentee relationship can be transformative, but finding the right match is crucial. These strategies helped me connect with mentors who truly understood my goals.",
      author: {
        name: "Miguel Rodriguez",
        role: "Junior Developer",
        avatar: "/api/placeholder/40/40"
      },
      tags: ["Mentorship", "Networking", "Professional Development"],
      timeToRead: "5 min read",
      date: "April 10, 2025",
      likes: 89,
      comments: 14
    },
    {
      id: 3,
      title: "Mentoring Engineering Students: Lessons from 10 Years of Experience",
      excerpt: "As someone who's mentored over 50 students, I've learned that effective mentorship goes beyond technical advice. Here's my framework for meaningful guidance.",
      author: {
        name: "Prof. James Wilson",
        role: "Engineering Mentor",
        avatar: "/api/placeholder/40/40"
      },
      tags: ["Engineering", "Education", "Leadership"],
      timeToRead: "12 min read",
      date: "April 7, 2025",
      likes: 201,
      comments: 47
    },
    {
      id: 4,
      title: "My First Year in College: How My Alumni Mentor Helped Me Adjust",
      excerpt: "The transition to university life was challenging, but my alumni mentor provided valuable guidance that helped me navigate academics, social life, and career planning.",
      author: {
        name: "Ava Patel",
        role: "Computer Science Student",
        avatar: "/api/placeholder/40/40"
      },
      tags: ["College Life", "Student Experience", "Alumni Relations"],
      timeToRead: "6 min read",
      date: "April 3, 2025",
      likes: 76,
      comments: 23
    },
    {
      id: 5,
      title: "Building a Culture of Mentorship in Your Organization",
      excerpt: "Organizations that prioritize mentorship see higher retention rates and employee satisfaction. Here's how we implemented a successful mentorship program at our company.",
      author: {
        name: "Keisha Williams",
        role: "HR Director",
        avatar: "/api/placeholder/40/40"
      },
      tags: ["Organizational Culture", "Professional Development", "Leadership"],
      timeToRead: "10 min read",
      date: "March 28, 2025",
      likes: 153,
      comments: 41
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Insights</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Share Your Story
          </button>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-4 top-3.5">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">All Topics</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Mentorship</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Career Development</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Student Life</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Industry Insights</span>
        </div>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name} 
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                    <p className="text-xs text-gray-500">{article.author.role}</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-500">{article.date}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {article.likes}
                    </span>
                    <span className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {article.comments}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{article.timeToRead}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;