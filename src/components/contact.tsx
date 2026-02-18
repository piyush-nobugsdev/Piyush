export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

      <form className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border rounded-xl"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border rounded-xl"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full p-4 border rounded-xl"
        />

        <button className="w-full bg-black text-white py-3 rounded-xl hover:scale-105 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}