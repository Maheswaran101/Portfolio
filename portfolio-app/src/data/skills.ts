export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "SQL", level: 88, category: "Languages" },
  { name: "Machine Learning", level: 92, category: "ML/AI" },
  { name: "Deep Learning", level: 80, category: "ML/AI" },
  { name: "NLP", level: 78, category: "ML/AI" },
  { name: "SHAP / Explainability", level: 85, category: "ML/AI" },
  { name: "Scikit-learn", level: 93, category: "Libraries" },
  { name: "Pandas / NumPy", level: 95, category: "Libraries" },
  { name: "TensorFlow / Keras", level: 75, category: "Libraries" },
  { name: "Power BI", level: 85, category: "Visualization" },
  { name: "Streamlit", level: 90, category: "Deployment" },
  { name: "Git / GitHub", level: 88, category: "Tools" },
];

export const tools = [
  { name: "Python", icon: "🐍" },
  { name: "Scikit-learn", icon: "🤖" },
  { name: "TensorFlow", icon: "🔥" },
  { name: "Pandas", icon: "🐼" },
  { name: "Power BI", icon: "📊" },
  { name: "Streamlit", icon: "🚀" },
  { name: "SQL", icon: "🗄️" },
  { name: "Git", icon: "🌿" },
  { name: "PySpark", icon: "⚡" },
  { name: "SHAP", icon: "🔍" },
  { name: "Jupyter", icon: "📓" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS S3", icon: "☁️" },
  { name: "AWS Lambda", icon: "λ" },
  { name: "SageMaker", icon: "🧠" },
  { name: "DynamoDB", icon: "💾" },
];
