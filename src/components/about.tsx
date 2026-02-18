export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Photo */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I'm a full-stack developer passionate about building scalable
            applications and solving real-world problems. I enjoy working
            with modern web technologies and writing clean, efficient code.
          </p>

          <button className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition">
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}