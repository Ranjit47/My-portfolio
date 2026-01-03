import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="flex justify-center mb-8 "
        >
          <div className="relative w-48 h-48">
            <img
              src="/image/ranjit.png"
              alt="Ranjit Rai"
              className="w-full h-full rounded-full object-cover object-top scale-120 border-4 border-primary/30 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl -z-10"></div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {/* tittle */}
          <h1 className="text-5xl md:text-7xl font-bold typing-effect">
            Hi, I'm <span className="text-gradient ">RANJIT RAI</span>
          </h1>

          {/* sub tittle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground "
          >
            Full Stack Developer & Creative Technologist
          </motion.p>
        </div>

        {/* intro para */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto  "
        >
          I craft beautiful, functional web experiences that bring ideas to
          life. Specialized in modern web technologies and elegant design
          solutions.
        </motion.p>

        {/* buttons  */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-4 justify-center pt-4  "
        >
          {/* resume button  */}
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/80 transition-all duration-300"
          >
            <a
              href="/Resume_ranjit(3).pdf"
              download="Resume_ranjit.pdf"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              My Resume
            </a>
          </Button>
          {/* contact button  */}
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/80 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
