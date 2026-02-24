import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
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

<div className="flex justify-start gap-8 mt-6">

  {/* GitHub */}
  <a
    href="https://github.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#181717] dark:text-white
    hover:-translate-y-1
    transition-transform duration-300"
  >
    <FaGithub size={26} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A66C2]
    hover:-translate-y-1
    transition-transform duration-300"
  >
    <FaLinkedin size={26} />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#FFA116]
    hover:-translate-y-1
    transition-transform duration-300"
  >
    <SiLeetcode size={26} />
  </a>

</div>
        </div>

<div className="relative w-64 h-64 overflow-hidden rounded-full">
  
  <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10" />

  <Image
    src="/piyush1.jpeg"
    alt="Piyush Maurya"
    fill
    className="object-cover rounded-full border-4 border-white dark:border-darkCard shadow-xl scale-110"
    priority
  />
</div>

      </div>
    </section>
  );
}
