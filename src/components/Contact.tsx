import { useRef, useState } from "react";
import { TitleHeader } from "./TitleHeader";
import { useForm } from "@formspree/react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [_state, handleFormSubmit] = useForm("mpwlvwda");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Full name is required";
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      }
    }

    if (name === "message" && !value.trim()) {
      error = "Message is required";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid =
      validateField("name", form.name) &&
      validateField("email", form.email) &&
      validateField("message", form.message);

    if (isValid) {
      setIsLoading(true);
      await handleFormSubmit(e);

      toast({
        description:
          "We have recieved your message and would reach out to you shortly.",
        title: "Message Sent!",
      });
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center my-16 sm:my-24 md:my-32 px-4 sm:px-6">
      <div className="w-full h-full md:px-8 xl:px-10">
        <TitleHeader
          title="💬 Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="w-full my-12 md:my-16 flex justify-center">
          <div className="w-full sm:w-5/6 md:w-4/5 xl:w-2/5">
            {/* Glassy Card */}
            <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 xl:p-10 bg-zinc-900/80 backdrop-blur-xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300">
              {/* Cyan glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10 opacity-0 hover:opacity-100 blur-2xl transition-opacity" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-10 w-full flex flex-col gap-6 sm:gap-7 md:gap-8"
              >
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl sm:rounded-xl border border-gray-700 bg-transparent px-3 sm:px-4 pt-6 sm:pt-8 pb-2 text-sm sm:text-base text-gray-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 sm:left-4 top-1 sm:top-2 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-cyan-300"
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-2">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl sm:rounded-xl border border-gray-700 bg-transparent px-3 sm:px-4 pt-6 sm:pt-8 pb-2 text-sm sm:text-base text-gray-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 sm:left-4 top-1 sm:top-2 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-cyan-300"
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-2">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    placeholder=""
                    className="peer w-full rounded-xl sm:rounded-xl border border-gray-700 bg-transparent px-3 sm:px-4 pt-6 sm:pt-8 pb-2 text-sm sm:text-base text-gray-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-3 sm:left-4 top-1 sm:top-2 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-cyan-300"
                  >
                    Your Message
                  </label>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-2">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative overflow-hidden rounded-xl sm:rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/40 disabled:opacity-70"
                >
                  <span className="relative z-10">
                    {isLoading ? "Sending..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
