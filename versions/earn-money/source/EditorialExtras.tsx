import { useId, useState } from "react"
import { Fingerprint, Landmark, Link2, LockKeyhole, Plus } from "lucide-react"
import { Link } from "react-router"
import { LogoWordmark } from "@/components/patterns/logo-link"
import "./editorial-extras.css"

const protections = [
  { icon: Link2, title: "Your bank login stays yours.", body: "Connect through Plaid. Crobo receives the account information needed to link your bank, never your bank password.", name: "Plaid", href: "https://plaid.com/trust-safety/" },
  { icon: Fingerprint, title: "Identity checks before account access.", body: "Persona handles identity verification as part of opening your investing account.", name: "Persona", href: "https://withpersona.com/security" },
  { icon: Landmark, title: "Know who holds your investments.", body: "Alpaca provides brokerage and custody. Crobo Advisors manages your Income portfolio.", name: "Alpaca", href: "https://alpaca.markets/disclosures" },
  { icon: LockKeyhole, title: "Personal information, protected.", body: "Our privacy policy explains the encryption, computer safeguards and secured systems used to protect your information.", name: "Our privacy policy", href: "/privacy-policy" },
]

const stories = [
  { product: "Cash", title: "An emergency fund that earns.", body: "Keep a cash buffer accessible while it earns interest." },
  { product: "Income", title: "Investments that help with the bills.", body: "Build monthly income you can take or reinvest." },
  { product: "Wealth", title: "Wealth for the years ahead.", body: "Invest toward a future home, greater flexibility or retirement." },
]

const faqs = [
  { q: "What’s the difference between Cash, Income and Wealth?", a: "Cash earns interest while keeping money accessible. Income is a managed portfolio of dividend-paying preferred shares, designed for monthly income. Wealth is a proposed long-term investment offering with early access by invitation." },
  { q: "Is the Cash rate fixed?", a: "No. The 3.75% annual rate shown here is variable and may change. Interest is paid monthly. Final program terms apply." },
  { q: "Are the investment returns guaranteed?", a: "No. Income’s 7.5% to 10% annual targets depend on your risk profile and include the 1.5% annual advisory fee. Income and investment values can fall. Wealth’s 20%+ figure is illustrative, with the portfolio and terms still to be confirmed." },
  { q: "How much do I need to start?", a: "Income starts at $500, and you can add more later. The minimums for Cash and Wealth will be confirmed with their final product terms." },
  { q: "Can I take my money out?", a: "Cash has no lock-in. Withdrawals to your linked bank usually arrive in 1 to 3 business days. Income also has no lock-in, but selling investments and transferring the proceeds takes time. Wealth’s access terms are still being defined." },
  { q: "Can I reinvest my monthly income?", a: "For the Income portfolio, you can choose monthly cash or automatic reinvestment. How Cash interest can be moved or withdrawn separately will be confirmed in the final program terms." },
  { q: "What does FDIC insurance cover?", a: "Eligible Cash deposits may receive up to $1 million in pass-through FDIC insurance through partner banks, limited to $250,000 per program bank and subject to program terms and your other deposits at those banks. FDIC insurance protects eligible deposits if a bank fails. It does not guarantee interest rates or cover investment losses.", href: "https://alpaca.markets/disclosures", link: "Read Alpaca’s disclosures" },
  { q: "Why do I take a quiz for Income?", a: "The quiz helps us understand your investing goals and comfort with risk so we can recommend an Income portfolio. Cash does not use the investment risk quiz in this prototype." },
]

export function EditorialExtras() {
  const [open, setOpen] = useState<number | null>(null)
  const [instantToggle, setInstantToggle] = useState(false)
  const faqId = useId()

  return (
    <>
      <section id="editorial-security" className="north-extra north-trust" aria-labelledby="north-trust-heading">
        <div className="north-extra-inner">
          <div className="north-extra-heading">
            <p className="north-stack-kicker">SECURITY &amp; PROTECTION</p>
            <h2 id="north-trust-heading">Trust starts<br />with the details.</h2>
            <p>Who connects your bank. Who verifies your identity. Who holds your investments. You should know.</p>
          </div>
          <div className="north-trust-grid">
            {protections.map(({ icon: Icon, title, body, name, href }) => (
              <article key={title}>
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
                <a href={href} {...(href.startsWith("https:") ? { target: "_blank", rel: "noreferrer" } : {})}>{name}</a>
              </article>
            ))}
          </div>
          <div className="north-trust-note">
            <Landmark size={25} strokeWidth={1.5} aria-hidden="true" />
            <p><strong>Cash protection and investment risk are different.</strong> Eligible Cash deposits may have FDIC coverage through partner banks. Income and Wealth investments are not FDIC insured and can lose value.</p>
          </div>
        </div>
      </section>

      <section id="editorial-stories" className="north-extra north-stories" aria-labelledby="north-stories-heading">
        <div className="north-extra-inner">
          <div className="north-extra-heading">
            <h2 id="north-stories-heading">More income.<br />More possibilities.</h2>
          </div>
          <div className="north-stories-grid">
            {stories.map(({ product, title, body }) => (
              <article key={product}>
                <span className="north-story-product">{product}</span>
                <h3>{title}</h3>
                <p className="north-goal-description">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="editorial-faq" className="north-extra north-questions" aria-labelledby="north-questions-heading">
        <div className="north-extra-inner north-questions-layout">
          <div className="north-extra-heading">
            <p className="north-stack-kicker">A FEW GOOD QUESTIONS</p>
            <h2 id="north-questions-heading">Before you<br />get started.</h2>
            <p>Need a hand with something else?</p>
            <a className="north-text-link" href="mailto:care@croboearn.com">Talk to our team</a>
          </div>
          <div className="north-question-list" data-instant-toggle={instantToggle || undefined}>
            {faqs.map(({ q, a, href, link }, index) => (
              <div className="north-question" key={q}>
                <h3>
                  <button id={`${faqId}-q-${index}`} type="button" aria-expanded={open === index} aria-controls={`${faqId}-a-${index}`} onClick={(event) => { setInstantToggle(event.detail === 0); setOpen(open === index ? null : index) }}>
                    <span>{q}</span><Plus size={22} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`${faqId}-a-${index}`} role="region" aria-labelledby={`${faqId}-q-${index}`} hidden={open !== index} className="north-question-answer">
                  <p>{a}</p>
                  {href && <a href={href} target="_blank" rel="noreferrer">{link}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="north-footer">
        <div className="north-extra-inner">
          <div className="north-footer-top">
            <div>
              <a href="#editorial-top" className="north-footer-logo" aria-label="Crobo Earn home"><LogoWordmark /></a>
              <p>More life from your money.</p>
            </div>
            <nav aria-label="Explore products"><h3>Explore</h3><a href="#editorial-cash">Cash</a><a href="#editorial-income">Income</a><a href="#editorial-wealth">Wealth</a></nav>
            <nav aria-label="Help and information"><h3>Here to help</h3><a href="#editorial-faq">FAQs</a><a href="#editorial-security">Security</a><a href="mailto:care@croboearn.com">Contact us</a></nav>
            <nav aria-label="Legal information"><h3>The details</h3><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-of-service">Terms of service</Link><Link to="/disclosures">Disclosures</Link></nav>
          </div>
          <div className="north-footer-bottom">
            <p>© 2026 Crobo Advisors LLC</p><span>Prototype for product review</span>
          </div>
          <p className="north-footer-disclosure">Crobo Earn is not a bank. Eligible Cash deposits may receive pass-through FDIC coverage through partner banks, subject to program terms and coverage limits. Managed investments are not FDIC insured and can lose value. Rates may change. Investment targets are not guaranteed. Wealth is an illustrative product concept.</p>
        </div>
      </footer>
    </>
  )
}
