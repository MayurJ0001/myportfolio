import React from "react";

function Skills() {
  const skills = [
    { category: "Cloud Platforms", items: ["Azure", "AWS", "GCP"] },
    { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Azure DevOps", "Jenkins", "Terraform", "Ansible", "Podman"] },
    { category: "Version Control", items: ["Git", "GitHub"] },
    { category: "Programming & Scripting", items: ["Python", "Bash"] },
    { category: "Operating Systems", items: ["Linux (Ubuntu)", "Windows Server"] },
    { category: "Monitoring & Logging", items: ["Prometheus", "Grafana", "Azure Monitor"] }
  ];

  return (
    <section className="py-10 pb-20 px-8 bg-gray-100 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">My Skills</h2>
        <div className="space-y-12">
          {skills.map((skillCategory, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{skillCategory.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                {skillCategory.items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white text-orange-500 p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-orange-500"
                  >
                    <h3 className="text-lg font-semibold">{skill}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
