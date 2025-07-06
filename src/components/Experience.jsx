import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Azure Cloud DevOps Engineer",
      company: "Tech Solutions",
      duration: "Jan 2023 - Present",
      description: "Worked on containerization, CI/CD pipelines, and cloud infrastructure optimization using Azure and Kubernetes."
    },
    {
      title: "Azure Cloud DevOps Engineer",
      company: "Tech Solutions",
      duration: "Jan 2023 - Present",
      description: "Worked on containerization, CI/CD pipelines, and cloud infrastructure optimization using Azure and Kubernetes."
    },
    {
      title: "DevOps Intern",
      company: "Tech Innovators",
      duration: "Jun 2022 - Dec 2022",
      description: "Assisted in automating infrastructure with Terraform, managing Docker containers, and creating pipelines for deployment automation."
    }
  ];

  return (
    <section className="py-16 px-8 h-[85vh] bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{exp.title}</h3>
            <p className="font-semibold text-gray-700">{exp.company}</p>
            <p className="text-gray-500">{exp.duration}</p>
            <p className="text-gray-600 mt-4">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
