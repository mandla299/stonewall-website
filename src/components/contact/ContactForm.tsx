import { useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  Send,
} from "lucide-react";

const ContactForm = () => {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);
  const submitting = useRef(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "7ba282f6-69cf-4a6d-9736-1689d8317623");
    formData.append(
      "subject",
      "New Message from Stonewall Data Solutions Website",
    );
    formData.append("from_name", "Stonewall Website Contact Form");

    submitting.current = true;
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.success !== true) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="enquiry-form-title"
      className="sw-contact-form relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 sm:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl"
      />

      <div className="relative">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b84900]">
              Let’s get started
            </p>

            <h2
              id="enquiry-form-title"
              className="text-2xl font-extrabold tracking-tight text-[#10152f] sm:text-3xl"
            >
              Your next step starts here.
            </h2>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#c65300] sm:inline-flex"
          >
            <Send size={21} />
          </span>
        </div>

        <p className="mb-8 max-w-xl text-sm leading-7 text-slate-600">
          Tell us a little about your project. We’ll use these details to
          understand your needs and discuss a suitable approach.
        </p>

        <form onSubmit={handleSubmit} aria-busy={loading}>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <fieldset disabled={loading} className="m-0 min-w-0 border-0 p-0">
            <legend className="sr-only">
              Your contact and project details
            </legend>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="enquiry-name" className="sw-form-label">
                  Full name <span className="text-[#b84900]">*</span>
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={150}
                  placeholder="Your full name"
                  className="sw-form-field"
                />
              </div>

              <div>
                <label htmlFor="enquiry-email" className="sw-form-label">
                  Email address <span className="text-[#b84900]">*</span>
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                  className="sw-form-field"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enquiry-interest" className="sw-form-label">
                  How can we help? <span className="text-[#b84900]">*</span>
                </label>
                <select
                  id="enquiry-interest"
                  name="interest"
                  defaultValue=""
                  required
                  className="sw-form-field"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Transcription">Transcription</option>
                  <option value="Data Entry & Capture">
                    Data entry & capture
                  </option>
                  <option value="Data Cleaning">Data cleaning</option>
                  <option value="Survey Capture">Survey capture</option>
                  <option value="Custom Workflow">Custom workflow</option>
                  <option value="General Enquiry">
                    Something else / I’m not sure yet
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enquiry-message" className="sw-form-label">
                  Tell us about your project{" "}
                  <span className="text-[#b84900]">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={6}
                  required
                  maxLength={10000}
                  aria-describedby="enquiry-message-help"
                  placeholder="What information are you working with, and what would you like to achieve?"
                  className="sw-form-field resize-y"
                />
                <p
                  id="enquiry-message-help"
                  className="mt-2 text-xs leading-6 text-slate-500"
                >
                  Include an approximate volume and deadline if you have them.
                  Please leave out confidential records or sensitive personal
                  information.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <button
                type="submit"
                disabled={loading}
                className="sw-form-submit flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-bold text-white"
              >
                {loading ? (
                  <>
                    <LoaderCircle
                      size={19}
                      aria-hidden="true"
                      className="animate-spin motion-reduce:animate-none"
                    />
                    Sending your message…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs leading-6 text-slate-500">
                Fields marked * are required. Read our{" "}
                <a
                  href="/privacy-policy"
                  className="rounded font-semibold text-[#10152f] underline underline-offset-4 hover:text-[#b84900]"
                >
                  Privacy Policy
                </a>{" "}
                for information about how we handle your details.
              </p>
            </div>
          </fieldset>
        </form>

        <div role="status" aria-live="polite" aria-atomic="true">
          {status === "success" && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              <CheckCircle2
                size={21}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />
              <p>
                <strong className="block">Message sent.</strong>
                Thank you for getting in touch. We’ll respond using the email
                address you provided.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-900">
              <CircleAlert
                size={21}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />
              <p>
                <strong className="block">
                  We couldn’t confirm your message was sent.
                </strong>
                Your details are still in the form. Please try again, or email{" "}
                <a
                  href="mailto:mandla@swdatasolutions.com"
                  className="break-all font-semibold underline underline-offset-4"
                >
                  mandla@swdatasolutions.com
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
