import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Shot Chucker",
        description: "A web application for NBA games, and NBA stats",
        image: "/projects/project1.png",
        tags: ["React", "CSS", "Python", "SQL"],
        github_url: "",
        demo_url: ""
    },
    {
        id: 2,
        title: "AI Meal Planner",
        description: "A personal AI assistant that delivers you with personal meal recommendations at request",
        image: "/projects/project2.png",
        tags: ["React", "Python", "SQL", "LangChain", "MongoDB"],
        github_url: "",
        demo_url: ""
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description: "My very own portfolio",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS"],
        github_url: "",
        demo_url: ""
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span 
                                            key={key} 
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demo_url} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a 
                                            href={project.github_url}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/giahuyyle"
                    >
                        Check Out My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};