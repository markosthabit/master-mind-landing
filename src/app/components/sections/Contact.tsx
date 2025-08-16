// components/sections/Contact.tsx
export default function Contact() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-teal-600">Contact Us</h1>
      <p className="text-gray-600">We’d love to hear from you!</p>
      <form className="max-w-md mx-auto space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-2 rounded shadow hover:bg-teal-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
