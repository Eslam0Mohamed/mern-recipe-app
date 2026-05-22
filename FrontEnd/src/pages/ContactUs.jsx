import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast"
const ContactUs = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ fname: "", lname: "", email: "", subject: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-sm px-4 py-1 rounded-full mb-3">
          💬 We'd love to hear from you
        </span>
        <h1 className="text-3xl font-semibold text-orange-500 mb-2">Contact us</h1>
        <p className="text-gray-500 text-base">Got a question about a recipe? We're here to help.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
          <div>
            <h2 className="text-base font-semibold text-gray-800">Get in touch</h2>
            <p className="text-sm text-gray-400 mt-1">Our team is available 7 days a week.</p>
          </div>

          <hr className="border-gray-100" />

          {[
            { icon: "✉️", label: "Email", value: "hello@foodapp.com" },
            { icon: "📞", label: "Phone", value: "+20 100 000 0000" },
            { icon: "📍", label: "Location", value: "Cairo, Egypt" },
            { icon: "🕐", label: "Working hours", value: "9:00 AM – 6:00 PM" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-medium text-gray-700">{item.value}</p>
              </div>
            </div>
          ))}

          <hr className="border-gray-100" />

          <div>
            <p className="text-xs text-gray-400 mb-3">Follow us</p>
            <div className="flex gap-2">
              {[<FaFacebookF />
, <FaTwitter />
, <FaYoutube />
, <FaInstagram />
].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center hover:bg-orange-50 hover:border-orange-200 transition-colors duration-200 text-base"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-base font-semibold text-gray-800 mb-5">Send us a message</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {[
              { name: "fname", label: "First name", placeholder: "Ahmed" },
              { name: "lname", label: "Last name", placeholder: "Mohamed" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="text-sm px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-gray-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xs text-gray-400">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ahmed@example.com"
              className="text-sm px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-gray-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
            />
          </div>

          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xs text-gray-400">Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="text-sm px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-gray-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
            >
              <option value="">Select a topic...</option>
              <option>Recipe question</option>
              <option>Account issue</option>
              <option>Report a bug</option>
              <option>Suggest a feature</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="text-xs text-gray-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              className="text-sm px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-gray-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 cursor-pointer"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send message →"
            )}
          </button>

          {success && (
            <div className="mt-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm">
               Message sent! We'll get back to you within 24 hours.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
