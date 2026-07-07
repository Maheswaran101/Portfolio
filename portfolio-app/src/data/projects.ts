export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  year: string;
  role: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Session Monitoring — User Fatigue Prediction",
    category: "Machine Learning",
    description:
      "End-to-end ML system to predict user cognitive fatigue from session behavior using classification models and SHAP explainability, deployed as an interactive Streamlit dashboard.",
    tags: ["Python", "Scikit-learn", "SHAP", "Streamlit"],
    image: "/images/proj_1.png",
    github:
      "https://github.com/Maheswaran101/Smart-Session-Monitoring-Predicting-User-Fatigue-with-ML-SHAP-Explainability",
    year: "2025",
    role: ["Modeling", "Feature Engineering", "Explainability", "Deployment"],
    tools: ["Python", "Scikit-learn", "SHAP", "Streamlit", "Pandas"],
  },
  {
    id: 2,
    title: "Wine Quality Assessment & Prediction",
    category: "Data Science",
    description:
      "Machine learning model to predict wine quality using physicochemical features with comprehensive data analysis, feature selection, and model evaluation pipelines.",
    tags: ["Python", "Scikit-learn", "EDA", "Classification"],
    image: "/images/proj_2.jpg",
    github: "https://github.com/Maheswaran101/Wine-Quality-Prediction",
    year: "2025",
    role: ["Data Analysis", "Modeling", "Evaluation"],
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    id: 3,
    title: "Traffic Flow Prediction — Time Series Analysis",
    category: "Time Series",
    description:
      "Time series forecasting using historical traffic data with ARIMA and Prophet models, enhanced with visualization to identify trends and seasonal patterns.",
    tags: ["ARIMA", "Prophet", "Time Series", "Python"],
    image: "/images/proj_3.png",
    github:
      "https://github.com/Maheswaran101/Traffic-Flow-Prediction-Using-TIme-Series-Analysis",
    year: "2025",
    role: ["Forecasting", "Visualization", "Statistical Analysis"],
    tools: ["Python", "Prophet", "ARIMA", "Matplotlib", "Pandas"],
  },
  {
    id: 4,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Predicting customer churn using ensemble and tree-based ML models with comprehensive feature engineering and business-focused insights for retention strategies.",
    tags: ["Ensemble", "Classification", "Python", "Power BI"],
    image: "/images/proj_4.jpg",
    github:
      "https://github.com/Maheswaran101/Customer-Churn-Data-prediction",
    year: "2025",
    role: ["Modeling", "EDA", "Business Insights"],
    tools: ["Python", "Scikit-learn", "XGBoost", "Power BI", "Pandas"],
  },
  {
    id: 5,
    title: "Netflix Recommendation System",
    category: "NLP & RecSys",
    description:
      "Full-scale recommendation system for Netflix using collaborative filtering and content-based filtering techniques to improve personalized user experience.",
    tags: ["Collaborative Filtering", "NLP", "Recommendation", "Python"],
    image: "/images/proj_5.png",
    github:
      "https://github.com/Maheswaran101/Netflix-Recommendation-System-Full-Scaled-",
    year: "2025",
    role: ["Algorithm Design", "NLP", "System Architecture"],
    tools: ["Python", "Surprise", "NLTK", "Scikit-learn", "Pandas"],
  },
  {
    id: 6,
    title: "Blinkit Sales Performance Dashboard",
    category: "Data Science",
    description:
      "Designed ETL pipelines consolidating raw sources into a star-schema model, tracking sales, inventory, and outlet performance to identify top-performing SKUs and underperforming regions.",
    tags: ["Power BI", "SQL", "ETL", "Data Modeling"],
    image: "/images/proj_4.jpg", // Reusing an image placeholder
    github: "https://github.com/Maheswaran101",
    year: "2024",
    role: ["Data Engineering", "Data Modeling", "Dashboard Development"],
    tools: ["Power BI", "SQL", "DAX", "ETL", "Star Schema"],
  },
  {
    id: 7,
    title: "Project Management Relational Database",
    category: "Data Science",
    description:
      "Designed a normalized SQL Server database supporting concurrent project records with zero data anomalies, featuring automated milestone tracking via stored procedures.",
    tags: ["SQL Server", "Database Design", "T-SQL"],
    image: "/images/proj_2.jpg", // Reusing an image placeholder
    github: "https://github.com/Maheswaran101",
    year: "2024",
    role: ["Database Design", "Automation", "SQL Programming"],
    tools: ["SQL Server", "T-SQL", "Stored Procedures"],
  },
];

export const categories = [
  "All",
  "Machine Learning",
  "Data Science",
  "Time Series",
  "NLP & RecSys",
];
