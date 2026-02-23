export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20  transition-colors duration-300"> 
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-5xl font-bold mb-4 text-lightText dark:text-darkText">
            Hi, I'm Piyush
          </h1>

          <p className="text-xl mb-6 text-lightText/80 dark:text-darkText/80">
            Full Stack Developer building modern web applications.
          </p>

          <div className="space-x-4">
            <a
              href="#"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition duration-300"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 bg-lightCard dark:bg-darkCard rounded-full transition-colors duration-300" />
        </div>

      </div>
    </section>
  );
}
