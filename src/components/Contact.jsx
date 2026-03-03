import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending — replace with EmailJS / your API
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3">04. contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Open to full-time roles, freelance projects, and collaboration. Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's talk</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a project in mind, a job opportunity, or just
                want to connect — my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
                { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
                { icon: MapPin, label: "Location", value: "Your City, Country", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
                    {href ? (
                      
                        <a href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-primary-400 transition-colors text-sm font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-outline mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-800 border border-gray-700 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full bg-gray-800 border border-gray-700 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-gray-800 border border-gray-700 focus:border-primary-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;