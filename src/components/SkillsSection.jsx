import { useState } from "react";
import { cn } from "@/lib/utils";


// Skill: name, level: 0 - 100, category: language - tool - Frameworks & Libraries
const skills = [
    // languages
    { name: "Python", level: 95, category: "languages" },
    { name: "Java", level: 90, category: "languages" },
    { name: "JavaScript", level: 80, category: "languages" },
    { name: "C/C#", level: 80, category: "languages" },
    { name: "C++", level: 80, category: "languages" },
    { name: "HTML/CSS", level: 80, category: "languages" },
    { name: "SQL", level: 80, category: "languages" },

    // frameworks and libraries
    { name: "Flask", level: 95, category: "Frameworks & Libraries" },
    { name: "FastAPI", level: 90, category: "Frameworks & Libraries" },
    { name: "React", level: 80, category: "Frameworks & Libraries" },
    { name: "SQLAlchemy", level: 80, category: "Frameworks & Libraries" },
    { name: "Scikit", level: 70, category: "Frameworks & Libraries" },
    { name: "LangChain/LangGraph", level: 70, category: "Frameworks & Libraries" },
    { name: "PyTorch", level: 70, category: "Frameworks & Libraries" },
    { name: "Pandas", level: 70, category: "Frameworks & Libraries" },
    { name: "NumPy", level: 70, category: "Frameworks & Libraries" },
    { name: "NodeJS", level: 70, category: "Frameworks & Libraries" },
    { name: "TailwindCSS", level: 50, category: "Frameworks & Libraries" },

    // tools
    { name: "Git", level: 95, category: "tool" },
    { name: "Docker", level: 80, category: "tool" },
    { name: "RabbitMQ", level: 80, category: "tool" },
    { name: "AWS", level: 80, category: "tool" },
    { name: "GCP", level: 80, category: "tool" },
    { name: "Figma", level: 70, category: "tool" },
    { name: "JavaFX", level: 70, category: "tool" },
    { name: "MongoDB", level: 70, category: "tool" },
    { name: "Visual Studio Code", level: 90, category: "tool" },
]

const categories = ["all", "languages", "Frameworks & Libraries", "tool"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    My 
                    <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill ,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};