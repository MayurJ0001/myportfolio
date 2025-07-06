import React from "react";

function About() {
  return (
    <section className="flex items-center justify-center bg-gray-100 text-white py-16 px-8 min-h-[85vh]">
      <div className="max-w-screen-lg mx-auto px-8 py-4 bg-black bg-opacity-10 rounded-xl shadow-lg flex flex-col items-center md:items-start">
        <h2 className="text-4xl text-orange-600 font-bold mb-6 text-center md:text-left">
          About Me
        </h2>

        <p className="text-xl mb-4 leading-relaxed text-sky-100 text-center md:text-left">
  I’m a <strong className="text-orange-600">DevOps Engineer</strong> with extensive experience in Azure, AWS Cloud, and a wide range of DevOps tools. My passion lies in automating infrastructure, optimizing cloud solutions, and driving efficiency across all stages of the software lifecycle. I have contributed to building scalable, secure, and highly available systems that ensure seamless delivery and high uptime. As a top performer in my company, I bridge the gap between development and operations teams, driving continuous delivery and business success.
</p>

<p className="text-xl mb-6 leading-relaxed text-sky-100 text-center md:text-left">
  My interests revolve around mastering the latest advancements in Cloud Computing, Infrastructure as Code, and Continuous Integration/Continuous Deployment (CI/CD). I am dedicated to staying at the forefront of industry trends and am passionate about contributing to open-source DevOps tools and methodologies.
</p>


        {/* Links Section */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start">
          <a
            href="https://github.com/DineshSabale96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 text-lg hover:text-blue-500 mx-4 mb-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dinesh-sabale?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 text-lg hover:text-blue-500 mx-4 mb-4"
          >
            LinkedIn
          </a>
          <a
            href="https://www.naukri.com/mynaukri/dispemail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 text-lg hover:text-blue-500 mx-4 mb-4"
          >
            Naukri
          </a>
          <a
            href="mailto:dineshvitthalsabale@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 text-lg hover:text-blue-500 mx-4 mb-4"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
