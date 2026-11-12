import { useEffect, useState } from "react"
import {
  Clock3,
  CircleAlert,
  Landmark,
  Layers3,
  LockOpen,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react"

import { LogoWordmark } from "@/components/patterns/logo-link"
import { EditorialExtras } from "./EditorialExtras"
import { HeroFlow } from "./HeroFlow"

const cashBenefits = [
  { icon: ShieldCheck, label: "Up to $1M FDIC insurance through partner banks" },
  { icon: Landmark, label: "Interest accrues daily, paid monthly" },
  { icon: Clock3, label: "Withdraw anytime; usually 1–3 business days" },
  { icon: Layers3, label: "No portfolio to manage" },
  { icon: LockOpen, label: "No lock-in period" },
]

const incomeBenefits = [
  { icon: Layers3, label: "Professionally managed" },
  { icon: WalletCards, label: "Monthly income as a second paycheck, or reinvest" },
  { icon: Landmark, label: "Withdraw anytime" },
  { icon: TrendingUp, label: "Start with $500 · add more anytime" },
  { icon: LockOpen, label: "No lock-in period" },
]

const wealthBenefits = [
  { icon: TrendingUp, label: "Designed for long-term compounding" },
  { icon: Clock3, label: "Built for money you can leave for 3+ years" },
  { icon: CircleAlert, label: "Expect high volatility by design" },
  { icon: WalletCards, label: "Early access by invitation" },
]

export function EditorialDirection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToCash = (event: { detail: number }) => {
    document.querySelector("#editorial-cash")?.scrollIntoView({
      behavior: event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    })
  }

  return (
    <div className="north-stack">
      <header className={`north-stack-header${scrolled ? " is-scrolled" : ""}`}>
        <nav className="north-stack-nav" aria-label="Main navigation">
          <a href="#editorial-top" aria-label="Crobo Earn home">
            <span className="north-stack-logo">
              <LogoWordmark />
            </span>
          </a>
          <a className="north-stack-login" href="/login">
            Log in
          </a>
        </nav>
      </header>

      <main>
        <section id="editorial-top" className="north-stack-section north-stack-hero">
          <HeroFlow />
          <div className="north-stack-hero-inner">
            <div className="north-stack-hero-copy">
              <h1>
                Earn money
                <span>beyond your paycheck.</span>
              </h1>
              <p className="north-stack-lede">
                Earn interest on your cash, invest for monthly income, and build wealth over time.
              </p>
              <button className="north-stack-primary" type="button" onClick={scrollToCash}>
                Explore plans
              </button>
            </div>

          </div>
        </section>

        <section id="editorial-cash" className="north-stack-section north-stack-product north-stack-cash">
          <div className="north-stack-product-inner">
            <div className="north-stack-product-copy">
              <p className="north-stack-kicker">CASH</p>
              <h2 className="north-stack-offer-rate">3.75%</h2>
              <p className="north-stack-offer-rate-label">Current variable annual rate</p>
              <p className="north-stack-offer-promise">Keep it earning. Keep it close.</p>
              <ul className="north-stack-offer-benefits">
                {cashBenefits.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <div className="north-stack-offer-actions">
                <button
                  className="north-stack-primary north-stack-primary-light"
                  type="button" aria-disabled="true"
                >
                  Get started
                </button>
                <button className="north-stack-secondary" type="button" aria-disabled="true">
                  Learn more
                </button>
              </div>
              <p className="north-stack-disclosure">
                Rate is variable. FDIC insurance applies to eligible deposits through
                partner banks, subject to program terms and coverage limits.
              </p>
            </div>
          </div>
        </section>

        <section id="editorial-income" className="north-stack-section north-stack-product north-stack-income">
          <div className="north-stack-product-inner">
            <div className="north-stack-product-copy">
              <p className="north-stack-kicker">INCOME</p>
              <h2 className="north-stack-offer-rate">7.5% to 10%</h2>
              <p className="north-stack-offer-rate-label">Annual target based on your risk profile</p>
              <p className="north-stack-offer-promise">Turn investing into monthly income.</p>
              <ul className="north-stack-offer-benefits">
                {incomeBenefits.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <div className="north-stack-offer-actions">
                <button className="north-stack-primary" type="button" aria-disabled="true">
                  Get started
                </button>
                <button className="north-stack-secondary" type="button" aria-disabled="true">
                  Learn more
                </button>
              </div>
              <p className="north-stack-disclosure">
                Targets are not guaranteed; investments can lose value.
              </p>
            </div>
          </div>
        </section>

        <section id="editorial-wealth" className="north-stack-section north-stack-product north-stack-wealth">
          <div className="north-stack-product-inner">
            <div className="north-stack-product-copy">
              <div className="north-stack-label-row">
                <p className="north-stack-kicker">WEALTH</p>
                <span className="north-stack-invite">INVITE ONLY</span>
              </div>
              <h2 className="north-stack-offer-rate">3+ years</h2>
              <p className="north-stack-offer-rate-label">A long-term investment horizon</p>
              <p className="north-stack-offer-promise">Build for what comes next.</p>
              <ul className="north-stack-offer-benefits">
                {wealthBenefits.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <div className="north-stack-offer-actions">
                <button
                  className="north-stack-primary"
                  type="button"
                  aria-disabled="true"
                >
                  Join the early list
                </button>
              </div>
              <p className="north-stack-disclosure">
                Investments can lose value. A 3+ year horizon is not a lock-in period.
              </p>
            </div>
          </div>
        </section>
      </main>
      <EditorialExtras />
    </div>
  )
}
