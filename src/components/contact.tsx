export default function Contact() {
  return (
  <section
  id="contact"
  className="py-20 px-6 md:px-20 
 
  transition-colors duration-300"
>
  <h2
    className="text-3xl font-bold text-center mb-12 
    text-lightText dark:text-darkText"
  >
    Contact Me
  </h2>

  <form className="max-w-2xl mx-auto space-y-6">

    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-4 rounded-xl 
      bg-transparent
      text-lightText dark:text-darkText
      border border-lightCard dark:border-darkCard
      focus:outline-none focus:ring-2 focus:ring-primary
      transition-colors duration-300"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-4 rounded-xl 
      bg-transparent
      text-lightText dark:text-darkText
      border border-lightCard dark:border-darkCard
      focus:outline-none focus:ring-2 focus:ring-primary
      transition-colors duration-300"
    />

    <textarea
      rows={5}
      placeholder="Your Message"
      className="w-full p-4 rounded-xl 
      bg-transparent backdrop-blur-sm
      text-lightText dark:text-darkText
      border border-lightCard dark:border-darkCard
      focus:outline-none focus:ring-2 focus:ring-primary
      transition-colors duration-300"
    />

    <button
      className="w-full 
      bg-primary text-white 
      py-3 rounded-xl 
      hover:opacity-90 
      transition duration-300"
    >
      Send Message
    </button>

  </form>
</section>
  );
}