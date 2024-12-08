

import React from "react";
import Link from "next/link"; // Import Link for navigation

const Blog = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-5">
      <h1 className="text-center text-3xl font-bold mb-10">Blog Page</h1>

      {/* Blog Cards Container */}
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div>
            <img
              src="/images/pic1.jpg"
              alt="Blog Image 1"
              className="w-[800px] h-[400px] object-cover mx-auto"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">Blog Title 1</h2>
            <p className="text-gray-700 mb-6">
              This is the first blog post. It includes some interesting
              information to grab the reader's attention.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div className="flex items-center">
                <span className="material-icons">person</span>
                <span>Admin</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons">event</span>
                <span>December 8, 2024</span>
              </div>
            </div>
            <div className="text-right">
              <Link href="/blog/1">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div>
            <img
              src="/images/pic2.jpg"
              alt="Blog Image 2"
              className="w-[800px] h-[400px] object-cover mx-auto"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">Blog Title 2</h2>
            <p className="text-gray-700 mb-6">
              This is the second blog post. It provides additional insights and
              valuable information for readers.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div className="flex items-center">
                <span className="material-icons">person</span>
                <span>Admin</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons">event</span>
                <span>December 9, 2024</span>
              </div>
            </div>
            <div className="text-right">
              <Link href="/blog/2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div>
            <img
              src="/images/pic3.jpg"
              alt="Blog Image 3"
              className="w-[800px] h-[400px] object-cover mx-auto"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">Blog Title 3</h2>
            <p className="text-gray-700 mb-6">
              This is the third blog post. It dives deeper into advanced topics
              and provides expert tips.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div className="flex items-center">
                <span className="material-icons">person</span>
                <span>Admin</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons">event</span>
                <span>December 10, 2024</span>
              </div>
            </div>
            <div className="text-right">
              <Link href="/blog/3">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
