export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Next.js', 'React', 'Svelte', 'TailwindCSS']
    },
    {
      category: 'AI & Data Science',
      skills: ['Machine Learning', 'Jupyter Notebook', 'Data Analysis', 'AI Models']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'API Integration']
    },
    {
      category: 'Concepts',
      skills: ['Web Scraping', 'CRUD Operations', 'Security', 'UI/UX Design']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">Skills</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-lighter border border-primary/30 rounded-lg p-6 hover:border-primary/60 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary hover:text-black transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-dark-lighter border border-primary/30 rounded-lg p-8 inline-block">
              <p className="text-xl text-gray-300 mb-4">
                Always learning and expanding my skill set
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-mono">constantly evolving...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
