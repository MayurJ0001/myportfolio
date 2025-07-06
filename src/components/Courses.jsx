import React from "react";

function Courses() {
  const courses = [
    {
      title: "P.C. Maintenance Certificate Course",
      provider: "Shivaji University, Kolhapur Department of Lifelong Learning and Extension",
      year: "November 2022",
    },
    {
      title: "AWS, Azure, GCP CloudCourse",
      provider: "DevOps Guruji Online Course",
      year: "October 2023",
    },
    {
      title: "DevOps Tools Training",
      provider: "DevOps Guruji Online Training", 
      year: "April 2024",
    },
  ];

  return (
    <section className="py-16 px-8 h-[85vh] bg-gray-100 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white  p-6 rounded-xl shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {course.title}
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">
              {course.provider} - {course.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
