import React from "react";

function CertificationsAndAchievements() {
  const achievements = [
    {
      text: "Certificate in P.C. Maintenance (91% A+) – Shivaji University, March 2023",
      certificate: "https://example.com/certificate1.jpg"
    },
    {
      text: "Won 3rd Prize in the One-Day State-Level Collegiate Competition ‘VidyaTech 2023’ for Project Presentation.",
      certificate: "https://example.com/certificate2.jpg"
    },
    {
      text: "Awarded 2nd Prize in the “DIGIT 2024” Software Project Presentation held in January 2024 at KBPIMSR, Varye, Satara.",
      certificate: "https://example.com/certificate3.jpg"
    },
    {
      text: "Won 3rd Prize in the One-Day State-Level Collegiate Competition ‘VidyaTech 2024’ for Project Presentation.",
      certificate: "https://example.com/certificate4.jpg"
    }
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 text-center">
      <h2 className="text-4xl font-extrabold mb-12 uppercase tracking-wide">Certifications & Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="text-lg font-medium mb-4">{achievement.text}</p>
            <div className="overflow-hidden rounded-lg">
              <img
                src={achievement.certificate}
                alt={`Certificate for ${achievement.text}`}
                className="w-full h-40 object-cover rounded-lg shadow-md hover:opacity-90 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsAndAchievements;
