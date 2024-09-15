import React from 'react';


const ProfilePosts = () => {
    return (
        <div className="w-full flex mt-8 space-x-2">
      {/* left */}
    <div className="w-[85%] h-[200px] flex justify-center items-center">
    <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1346223165-1.jpg?resize=1536,863" alt="" className="h-full w-full object-cover"/>  
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Welcome to our Coding Tutorial
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>@messi</p>
        <div className="flex space-x-2">
          <p>5/09/2024</p>
          <p>10:45</p>
        </div>
      </div>
      <p className="text-sm md:text-lg">Welcome, programming enthusiasts! We're excited to have you join us on this coding adventure designed especially for younger students. Whether you're a beginner or looking to enhance your skills, you'll explore programming fundamentals through fun projects that spark creativity. Get ready to bring your ideas to life and discover the fascinating world of code!</p>
     
    </div>  


    </div>
    );
    }


export default ProfilePosts