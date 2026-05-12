export interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    shortDescription: "A customizable portfolio template to showcase work, skills, and education.",
    fullDescription:
      "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Designed to be easily customizable, it allows adding projects, skills, and personal information. Fully responsive with modern UI and dark mode support.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/your-username/your-portfolio-repo",
    demo: "https://your-portfolio-url.com",
    image: "/projects/portfolio.png",
    isFeatured: true,
  },
  {
    title: "Fraud Detection with One-Class Classification & Kubeflow Pipelines",
    shortDescription: "Fraud detection system using machine learning and MLOps tools.",
    fullDescription:
      "This project applies One-Class models (One-Class SVM, Isolation Forest, MLPs) for fraud detection on financial datasets. Built with Kubeflow Pipelines to manage data preprocessing, feature engineering, training, and deployment. Includes fraud scoring and model performance tracking within Kubeflow.",
    tech: ["Python", "TensorFlow", "Kubeflow", "MLP", "Scikit-learn"],
    github: "https://github.com/your-username/fraud-detection-kubeflow",
    image: "/projects/fraud.png",
    isFeatured: true,
  },
  {
    title: "Game Accounts & Match History (Xou Dou Qi)",
    shortDescription: "A console-based game system with account management and match history.",
    fullDescription:
      "Developed with an embedded database (SQLite/H2), this project manages player accounts, implements full rules of Xou Dou Qi, and records match results (wins, losses, draws). Includes a text-based console interface.",
    tech: ["Java", "SQLite"],
    github: "https://github.com/NabatiFatima/MiniProjetJava.git",
    image: "/projects/Xou.png",
  },
  {
  title: "Medical Data & Statistics Management",

  shortDescription:
    "A healthcare management application for managing doctors, patients, medical records, and healthcare statistics.",

  fullDescription:
    "A complete medical management system developed using Python, PHP, and MySQL. The application allows managing doctors, patients, diagnoses, treatments, and medical records through an intuitive graphical interface. It also includes statistical dashboards, healthcare data visualization, and interactive management features designed to support hospital staff and medical workflows.",

  tech: ["Python", "PHP", "MySQL", "Tkinter"],
  github: "https://github.com/your-username/medical-management",
  demo: "/projects/medical-demo.mp4",
  image: "/projects/ic4.png",
  isFeatured: true,
},
  
  {
    title: "Car Rental Management System",
    shortDescription: "A C-based console application for managing car rentals.",
    fullDescription:
      "Developed in C, this system handles customer registration, vehicle management, and rental tracking. Includes basic CRUD operations and record-keeping functionality.",
    tech: ["C"],
    github: "https://github.com/your-username/car-rental-c",
    image: "/projects/car.png",
  },
  
  
  
];
