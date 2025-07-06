import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="h-[85vh] flex items-center justify-center text-center md:text-left">
        <div className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row items-center">
          <div className="profile-section mb-8 md:mb-0">
            <img
              src="/Home.jpeg"
              alt="Profile"
              className="w-72 h-72 rounded-full border-4 border-orange-500 object-cover shadow-lg md:w-80 md:h-80"
            />
          </div>
          <div className="text-section md:ml-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 md:text-4xl">
              Welcome to My DevOps Portfolio
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Hello, I'm <strong className="text-red-600">Dinesh Vitthal Sabale</strong>, a passionate <strong className="text-red-600">DevOps Engineer</strong> specializing in automation, cloud infrastructure, and CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          I specialize in cloud technologies like Azure, AWS, and GCP. My focus is on automation, system optimization, and CI/CD pipelines.
          Additionally, I have experience with containerization, orchestration, and security best practices in cloud environments.
          My expertise extends to Infrastructure as Code (IaC) using Terraform and Ansible, as well as monitoring and logging solutions such as Prometheus and Grafana.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'Azure', 'AWS', 'GCP', 'Ansible', 'Jenkins', 'Prometheus', 'Grafana', 'Helm', 'Git', 'GitHub Actions', 'NGINX'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-orange-500 text-white rounded-lg">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <p className="mt-4 text-lg text-gray-600">Here are some of my recent projects:</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {['Cloud Infrastructure Automation', 'CI/CD Pipeline Implementation', 'Kubernetes Cluster Setup', 'Infrastructure Monitoring', 'Serverless Application Deployment', 'Security and Compliance Automation'].map((project) => (
            <div key={project} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project}</h3>
              <p className="mt-2 text-gray-600">A brief description of {project}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
        <p className="mt-4 text-lg text-gray-600">
          Worked as a DevOps Engineer for 1.5 years, specializing in cloud infrastructure, automation, and CI/CD processes.
          Experience with designing scalable architectures, optimizing deployment strategies, and ensuring high availability of cloud-based systems.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">Feel free to reach out to discuss opportunities.</p>
        <div className="mt-8">
          <p className="flex items-center justify-center text-gray-600"><FaEnvelope className="mr-2 text-orange-500" /> dineshvitthalsabale@gmail.com</p>
          <p className="flex items-center justify-center text-gray-600 mt-2"><FaPhone className="mr-2 text-orange-500" /> +91 9169607007</p>
          <p className="flex items-center justify-center text-gray-600 mt-2"><FaMapMarkerAlt className="mr-2 text-orange-500" />Pune, Maharashtra</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/dinesh-sabale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-600 hover:text-orange-500"><FaLinkedin size={28} /></a>
            <a href="https://github.com/DineshSabale96" className="text-gray-600 hover:text-orange-500"><FaGithub size={28} /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
