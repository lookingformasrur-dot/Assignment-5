import { useState } from "react";
import { FaJava } from "react-icons/fa";
import "./components/Technology.css";

import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { IoClose } from "react-icons/io5";

type Technology = {
  icon: React.ReactNode;
  color?: string;
  name: string;
  description: string;
  category: string;
  level: string;
  rating: string;
  tag?: string;
};

const techData: Technology[] = [
  {
    icon: <SiReact color="#61dafb" />,
    color: "#61dafb",
    name: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.9",
    tag: "Popular",
  },

  {
    icon: <SiVuedotjs color="#42b883" />,
    color: "#42b883",
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.8",
    tag: "Fast",
  },

  {
    icon: <SiSvelte size={28} color="#ff3e00" />,
    color: "#ff3e00",
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.8",
    tag: "Fast",
  },

  {
    icon: <SiNextdotjs color="#000000" />,
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
  },

  {
    icon: <SiNodedotjs color="#339933" />,
    color: "#339933",
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: "4.8",
    tag: "Standard",
  },

  {
    icon: <SiPostgresql color="#336791" />,
    color: "#336791",
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: "4.9",
    tag: "Top SQL",
  },

  {
    icon: <SiRedis color="#FF4438" />,
    color: "#FF4438",
    name: "Redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: "4.8",
    tag: "Cache",
  },

  {
    icon: <SiJavascript color="#F7DF1E" />,
    color: "#F7DF1E",
    name: "JavaScript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: "4.9",
    tag: "Ubiquitous",
  },

  {
    icon: <SiTypescript color="#3178C6" />,
    color: "#3178C6",
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: "4.9",
    tag: "Essential",
  },

  {
    icon: <FaJava color="#ED8B00" />,
    color: "#ED8B00",
    name: "Java",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: "4.6",
    tag: "Robust",
  },

  {
    icon: <SiTailwindcss color="#00B8DB" />,
    color: "#00B8DB",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: "4.9",
    tag: "Modern",
  },

  {
    icon: <SiDocker color="#1D63ED" />,
    color: "#1D63ED",
    name: "Docker",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: "4.9",
    tag: "Containers",
  },
];

function Technologies() {
  const [stack, setStack] = useState<Technology[]>([]);
  return (
    <section className="technology">
      <h2>
        Explore the <span> Technology</span>
      </h2>

      <p>Pick one technology per category to build your ideal stack.</p>

      <div className="technology-layout">
        <div className="technology-grid">
          {techData.map((tech) => {
            const isSelected = stack.some((item) => item.name === tech.name);

            return (
              <div className="technology-card" key={tech.name}>
                <div className="card-top">
                  <div className="tech-icon">{tech.icon}</div>
                  {tech.tag && (
                    <span
                      className="popular"
                      style={{
                        color: tech.color,
                        backgroundColor: `${tech.color}20`,
                      }}
                    >
                      {tech.tag}
                    </span>
                  )}
                </div>

                <div className="card-middle">
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                </div>

                <div className="card-bottom">
                  <div className="card-info">
                    <span>{tech.category}</span>
                    <span>{tech.level}</span>
                    <span>★ {tech.rating}</span>
                  </div>

                  <button
                    className={isSelected ? "added-btn" : ""}
                    disabled={isSelected}
                    onClick={() => setStack([...stack, tech])}
                  >
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="your-stack">
          <h3>Your Stack</h3>
          {stack.length === 0 ? (
            <p className="aside-empty-p">No technologies selected yet.</p>
          ) : (
            <>
              {stack.map((tech) => (
                <div className="stack-item" key={tech.name}>
                  <div className="stack-info">
                    <div className="stack-icon">{tech.icon}</div>

                    <div>
                      <strong>{tech.name}</strong>
                      <p>{tech.category}</p>
                    </div>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      setStack(stack.filter((item) => item.name !== tech.name))
                    }
                  >
                    <IoClose />
                  </button>
                </div>
              ))}
              <button className="remove-all-btn" onClick={() => setStack([])}>
                Remove all
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

export default Technologies;
