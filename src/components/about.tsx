import { FiDownload } from "react-icons/fi"
export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I'm a full-stack developer passionate about building scalable
            applications and solving real-world problems. I enjoy working
            with modern web technologies and writing clean, efficient code.
          </p>

<a
  href="/Piyush_resume_template.pdf"
  
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2
  px-6 py-3 bg-primary text-white rounded-lg
  hover:bg-accent transition duration-300"
>
  <FiDownload size={18} />
  Resume
</a>
        </div>

      </div>
    </section>
  );
}