import React from "react";

function Projects() {
  const projects = [
    { title: "Azure Cloud Automation", description: "Automated infrastructure provisioning and management using Azure DevOps." },
    { title: "Azure App Service Deployment", description: "Deployed web applications on Azure App Service for scalable hosting." },
    { title: "Azure Kubernetes Service (AKS) Setup", description: "Configured AKS for orchestrating containerized applications." },
    { title: "Azure SQL Database Setup", description: "Implemented and optimized SQL databases on Azure for high availability." },    
    { title: "AWS EC2 Auto Scaling", description: "Set up auto scaling for EC2 instances to maintain application performance." },
    { title: "AWS Lambda Integration", description: "Developed serverless applications using AWS Lambda and triggered functions." },
    { title: "AWS CloudFormation", description: "Automated infrastructure setup with AWS CloudFormation templates." },
    { title: "Kubernetes Cluster Setup", description: "Set up and managed a multi-node Kubernetes cluster for container orchestration." },
    { title: "Kubernetes Helm Charts", description: "Developed Helm charts for managing Kubernetes applications." },
    { title: "Docker Containerization", description: "Containerized applications using Docker for easier deployment and scaling." },
    { title: "Terraform Infrastructure as Code", description: "Automated infrastructure deployment with Terraform scripts." },
    { title: "Jenkins CI/CD Pipeline", description: "Built and configured CI/CD pipelines using Jenkins for automated deployments." },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:translate-y-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
            <p className="text-gray-600 text-base sm:text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
