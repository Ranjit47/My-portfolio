export const About = () => {
  return (
    <section id="about" className="py-24 px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-slide-up">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 card-glow">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer with a keen eye for design and a love for creating 
                seamless digital experiences. With expertise in modern web technologies, 
                I transform complex problems into elegant solutions.
              </p>
              
              <p>
                My journey in tech has equipped me with a diverse skill set, from front-end 
                frameworks to back-end architecture. I believe in writing clean, maintainable 
                code and staying current with industry best practices.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
