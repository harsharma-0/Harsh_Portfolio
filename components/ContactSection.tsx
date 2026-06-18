import SectionHeading from "@/components/SectionHeading";

const contactLinks = [
  { label: "Email", value: "harsharma109@gmail.com", href: "mailto:harsharma109@gmail.com" },
  { label: "Location", value: "Noida, Uttar Pradesh, India", href: null },
  { label: "GitHub", value: "github.com/harsharma-0", href: "https://github.com/harsharma-0" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/harsh-vishwakarma-0a4482218",
    href: "https://www.linkedin.com/in/harsh-vishwakarma-0a4482218"
  },
  { label: "LeetCode", value: "leetcode.com/u/harsh6341", href: "https://leetcode.com/u/harsh6341/" }
];

const socials = [
  { label: "GitHub", href: "https://github.com/harsharma-0", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-vishwakarma-0a4482218", icon: "in" },
  { label: "LeetCode", href: "https://leetcode.com/u/harsh6341/", icon: "LC" }
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something"
        description="Reach out for backend engineering roles, cloud automation work, AI systems collaboration, or product engineering opportunities."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          {contactLinks.map((item) => {
            const content = (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                  {item.label}
                </p>
                <p className="mt-3 break-words text-white">{item.value}</p>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan/60 hover:bg-cyan/10"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                {content}
              </div>
            );
          })}

          <div className="flex flex-wrap gap-3 pt-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-md border border-cyan/35 bg-cyan/10 font-heading text-sm font-semibold text-cyan transition hover:-translate-y-1 hover:bg-cyan hover:text-navy hover:shadow-glow"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_38px_rgba(0,212,255,0.08)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-ink">Name</span>
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-md border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none transition placeholder:text-muted/70 focus:border-cyan focus:ring-2 focus:ring-cyan/25"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Email</span>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-md border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none transition placeholder:text-muted/70 focus:border-cyan focus:ring-2 focus:ring-cyan/25"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-semibold text-ink">Message</span>
            <textarea
              name="message"
              rows={7}
              className="mt-2 w-full resize-none rounded-md border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none transition placeholder:text-muted/70 focus:border-cyan focus:ring-2 focus:ring-cyan/25"
              placeholder="Tell me what you want to build."
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-md bg-cyan px-6 py-3 text-sm font-semibold text-navy shadow-[0_0_28px_rgba(0,212,255,0.35)] transition hover:-translate-y-1 hover:bg-white hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-navy"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
