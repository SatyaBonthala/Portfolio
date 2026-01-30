export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">About Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-lighter border border-primary/30 rounded-lg p-8 hover:border-primary/60 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I'm <span className="text-primary font-semibold">Satya Bonthala</span>, 
              a passionate developer with a strong focus on creating innovative solutions 
              using cutting-edge technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My expertise spans across <span className="text-primary">Python development</span>, 
              <span className="text-primary"> AI/ML</span>, and 
              <span className="text-primary"> full-stack web development</span>. 
              I enjoy building projects that solve real-world problems and enhance user experiences.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With <span className="text-primary">69 contributions</span> on GitHub in the past year, 
              I'm constantly learning and improving my skills through hands-on projects and experimentation.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded text-primary">
                🎯 Problem Solver
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded text-primary">
                💡 Quick Learner
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded text-primary">
                🚀 Innovative Thinker
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
