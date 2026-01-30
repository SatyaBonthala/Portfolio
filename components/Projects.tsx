export default function Projects() {
  const projects = [
    {
      title: 'Fitness Plan Generator',
      description: 'A personalized AI-powered web application that generates customized fitness plans tailored to individual needs, goals, and circumstances. Features workout schedules, exercise instructions, nutritional guidance, and 4-week progression plans using LLama3-70b via Groq API.',
      tech: ['Flask', 'Python', 'LangChain', 'Groq API', 'TailwindCSS', 'HTML5', 'LLM'],
      github: 'https://github.com/SatyaBonthala/fitness_app'
    },
    {
      title: 'Scribbly - Notion-like App',
      description: 'A modern note-taking application inspired by Notion with rich text editing, drag-and-drop blocks, JWT authentication, and real-time updates. Features multiple block types and auto-save functionality.',
      tech: ['FastAPI', 'Angular', 'Python', 'TypeScript', 'SQLAlchemy', 'JWT'],
      github: 'https://github.com/SatyaBonthala/Scribbly'
    },
    {
      title: 'Sugar Tracker',
      description: 'A comprehensive web application for monitoring and managing daily sugar intake with nutritional insights, goal setting, and visual analytics using the USDA Food Database API.',
      tech: ['SvelteKit', 'PostgreSQL', 'TailwindCSS', 'Chart.js', 'USDA API'],
      github: 'https://github.com/SatyaBonthala/sugar_tracker'
    },
    {
      title: 'AI Music Recommendation System',
      description: 'An intelligent music recommendation system using machine learning algorithms to suggest personalized music based on user preferences.',
      tech: ['Python', 'Machine Learning', 'Jupyter Notebook'],
      github: 'https://github.com/SatyaBonthala/AI-Music-Recommendation-System'
    },
    {
      title: 'Customer Chatbot',
      description: 'An interactive customer service chatbot built with modern web technologies to provide automated support and assistance.',
      tech: ['Svelte', 'JavaScript', 'AI'],
      github: 'https://github.com/SatyaBonthala/customer-chatbot'
    },
    {
      title: 'Weather Detector',
      description: 'A Python application that provides real-time weather information and forecasts for any location worldwide.',
      tech: ['Python', 'API Integration', 'Data Visualization'],
      github: 'https://github.com/SatyaBonthala/WeatherDetector'
    },
    {
      title: 'Web Scraper',
      description: 'A powerful web scraping tool built with Python to extract and process data from various websites efficiently.',
      tech: ['Python', 'BeautifulSoup', 'Requests'],
      github: 'https://github.com/SatyaBonthala/WebScraper'
    },
    {
      title: 'Password Generator',
      description: 'A secure password generator that creates strong, random passwords with customizable complexity options.',
      tech: ['Python', 'Security', 'CLI'],
      github: 'https://github.com/SatyaBonthala/Password_Generator'
    },
    {
      title: 'Contact Book',
      description: 'A contact management application for storing and organizing contact information with search capabilities.',
      tech: ['Python', 'Database', 'CRUD Operations'],
      github: 'https://github.com/SatyaBonthala/Contact_Book'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/30 rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:animate-glow">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
