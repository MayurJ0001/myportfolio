import React from "react";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "savitribai phule pune university pune",
      duration: "2024 - 2026",
      description: "Specialization is in Cloud Computing, focusing on leveraging cloud technologies to optimize and scale infrastructure for modern applications.."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "shivaji university kolhapur",
      duration: "2021 - 2024",
      description: "That focuses on computer science, software development, and IT systems. It provides foundational knowledge in programming, networking, databases, and web development."
    },
    {
      "degree": "12th Grade",
      "institution": "Malojiraje Agriculture College & Jr. College, Phaltan",
      "duration": "2021",
      "description": "Completed 12th Grade with a focus on agriculture-related subjects, achieving an 83.00% score."
    },
    {
      "degree": "10th Grade",
      "institution": "New English School, Surawadi",
      "duration": "2019",
      "description": "Completed 10th Grade with a general curriculum, achieving a 72.20% score."
    }
    
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="bg-white p-6 mb-6 rounded-xl shadow-md">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{edu.degree}</h3>
          <p className="text-lg sm:text-xl font-medium">{edu.institution}</p>
          <p className="text-lg text-gray-600">{edu.duration}</p>
          <p className="text-base sm:text-lg text-gray-700 mt-2">{edu.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
