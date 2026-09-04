import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { sendContactMessage } from "../../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setStatusMessage("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const data = await sendContactMessage(formData);

      setIsSuccess(true);
      setStatusMessage(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsSuccess(false);

      if (error instanceof Error) {
        setStatusMessage(error.message);
      } else {
        setStatusMessage(
          "Unable to send your message. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-16">

          {/* ========================= */}
          {/* LEFT - CONTACT INFORMATION */}
          {/* ========================= */}

          <div className="flex w-full flex-col md:w-1/2">
            <SectionTitle
              eyebrow="Contact"
              title="Let's work together"
            />

            <p className="max-w-lg text-lg leading-8 text-gray-400">
              Have a project in mind, want to discuss an
              opportunity, or simply want to connect? Feel free
              to send me a message.
            </p>

            <div className="mt-10 space-y-7">

              {/* Email */}
              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="mt-2 inline-block text-white transition hover:text-gray-400"
                >
                  sangramnandi99@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-2 text-white">
                  India
                </p>
              </div>

              {/* Availability */}
              <div>
                <p className="text-sm text-gray-500">
                  Availability
                </p>

                <p className="mt-2 text-white">
                  Open to opportunities- HYBRID / REMOTE / ONSITE
                </p>
              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* RIGHT - CONTACT FORM */}
          {/* ========================= */}

          <div className="flex w-full md:w-1/2">

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="mt-6 flex-1">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <p
                  className={`mt-4 text-center text-sm ${
                    isSuccess
                      ? "text-gray-300"
                      : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;