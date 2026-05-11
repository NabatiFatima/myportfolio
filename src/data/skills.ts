// src/data/skills.ts
import {
  BrainCircuit,
  Database,
  Cloud,
  BarChart,
  Server,
  Code,
} from "lucide-react";

export const skillCategories = [
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "NLP",
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
    ],
  },

  {
    title: "Big Data & Data Engineering",
    icon: Database,
    skills: [
      "Hadoop",
      "Apache Spark",
      "PySpark",
      "Kafka",
      "SQL",
      "MySQL",
      "Oracle",
      "PL/SQL",
      "MongoDB",
      "Cassandra",
    ],
  },

  {
    title: "Web & Backend Development",
    icon: Server,
    skills: [
      "Flask",
      "React",
      "Spring Boot",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },

  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      "Python",
      "Java",
      "C",
      "PHP",
      "JavaScript",
    ],
  },

  {
    title: "Tools & Technologies",
    icon: Cloud,
    skills: [
      "Docker",
      "Git & GitHub",
      "Linux",
      "Shell Scripting",
      "Jupyter Notebook",
      "Visual Studio",
      "IntelliJ IDEA",
      "Excel",
      "Tkinter",
      "Swing",
    ],
  },

  {
    title: "Data Visualization & Analytics",
    icon: BarChart,
    skills: [
      "Data Visualization",
      "Statistical Analysis",
      "ETL Pipelines",
      "Business Intelligence",
    ],
  },
];

 export const certifications = [
  { 
    title: "Machine Learning from A to Z", 
    issuer: "365 Data Science",
    image: "/images/certificat.jpg"  
  },
 
  { 
    title: "Introduction to PySpark", 
    issuer: "DataCamp",
    image: "/images/pyspark.jpg"  
  }
];