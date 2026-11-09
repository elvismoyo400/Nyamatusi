import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";

const COLUMNS = [
  {
    heading: "Useful information",
    links: [
      { label: "Travel information", href: "#travel-information" },
      { label: "Safari logistics", href: "#safari-logistics" },
      { label: "Privacy policy", href: "#privacy" },
      { label: "Terms and conditions", href: "#terms" },
    ],
  },
  {
    heading: "Sitemap",
    links: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Suggested itineraries", href: "#itineraries" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "Plan your safari", href: "#enquire" },
      { label: "Contact us", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
];

const MESSAGES = {
  invalid: "Please enter a valid email address.",
  failed: "Something went wrong. Please try again.",
  success: "Thank you for subscribing!",
};

function fakeSubscribe() {
  return new Promise((resolve) => setTimeout(resolve, 800));
}

export default function Footer({ onSubscribe = fakeSubscribe }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setEmail(e.target.value);
    if (status !== "submitting") setStatus("idle");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");
    try {
      await onSubscribe(trimmed);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <footer className="bg-orange-600 font-['Montserrat'] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:px-16 lg:grid-cols-[1fr_1fr_1fr_1.4fr]">
        {COLUMNS.map(({ heading, links }) => (
          <nav key={heading} aria-label={heading}>
            <h2 className="text-sm font-medium italic">{heading}</h2>
            <ul className="mt-5 space-y-3 text-sm font-light">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition-opacity hover:opacity-70 focus-visible:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-sm font-medium italic">
            Sign up for our newsletter
          </h2>

          <form onSubmit={handleSubmit} noValidate className="mt-5">
            <div className="flex">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                aria-label="Email address"
                aria-invalid={status === "invalid"}
                autoComplete="email"
                className="min-w-0 flex-1 bg-white px-4 py-3 text-xs text-slate-800 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-stone-800 px-6 text-sm font-semibold italic transition-colors hover:bg-stone-900 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Submit"}
              </button>
            </div>

            <p role="status" className="mt-3 min-h-5 text-xs font-medium">
              {MESSAGES[status]}
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-white/70 px-6 py-4">
        <p className="flex items-center justify-center gap-2 text-center text-[11px] font-light">
          <FaRegCopyright aria-hidden="true" className="shrink-0 text-sm" />
          <span>
            Copyright {new Date().getFullYear()} Nyamatusi camp. All rights
            reserved
          </span>
        </p>
      </div>
    </footer>
  );
}