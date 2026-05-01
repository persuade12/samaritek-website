import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | SamariTek",
  description:
    "How SamariTek collects, uses, and protects personal information when you use our website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <article className="relative pt-28 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm text-[#657786]">Last updated: 1 May 2026</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Privacy <span className="text-[#FEA02F]">Policy</span>
          </h1>
          <p className="mb-10 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-[#EBD9C8]/80">
            This policy describes how SamariTek (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) handles information when you visit{" "}
            <strong className="text-white">samaritek.co.zw</strong> (and related pages we operate) or contact us. It is
            intended as a practical summary. For specific legal questions, consult qualified counsel in your
            jurisdiction.
          </p>

          <div className="space-y-8 text-[#EBD9C8]/85 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-bold text-white">1. Who we are</h2>
              <p>
                SamariTek provides software engineering, cloud, and related technology services. You can reach us at{" "}
                <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                  info@samaritek.co.zw
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">2. What we collect</h2>
              <p className="mb-3">Depending on how you interact with us, we may process:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#FEA02F]">
                <li>
                  <strong className="text-white">Contact and enquiry data</strong> — for example name, email address,
                  company name, phone number (if you provide it), and the content of messages you send via our contact
                  forms, &quot;Get started&quot; flows, or email.
                </li>
                <li>
                  <strong className="text-white">Technical and usage data</strong> — such as IP address, browser type,
                  device type, general location derived from IP, pages viewed, and timestamps. This may be collected
                  through server logs and, where enabled, analytics tools that help us understand site performance and
                  usage in aggregate.
                </li>
                <li>
                  <strong className="text-white">Cookies and similar technologies</strong> — small files or tokens used
                  to maintain security, remember preferences where applicable, or support analytics. You can control
                  cookies through your browser settings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">3. How we use information</h2>
              <p className="mb-3">We use personal information to:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#FEA02F]">
                <li>Respond to enquiries and operate our website;</li>
                <li>Provide, scope, and deliver services you request;</li>
                <li>Send operational emails (for example confirmations related to an enquiry);</li>
                <li>Improve security, prevent abuse, and comply with legal obligations;</li>
                <li>Analyse aggregated usage to improve content and performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">4. Legal bases (where applicable)</h2>
              <p>
                Where data protection law requires a &quot;legal basis&quot;, we rely on appropriate grounds such as
                consent (where we ask for it), performance of a contract or steps prior to contracting, legitimate
                interests (for example operating and securing our website, provided those interests are not overridden
                by your rights), or legal obligation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">5. Sharing and processors</h2>
              <p className="mb-3">
                We do not sell your personal information. We may share data with trusted service providers who assist us
                under contract—for example:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#FEA02F]">
                <li>Hosting and infrastructure providers (for example where our site or applications are hosted);</li>
                <li>Email and communications providers used to deliver messages;</li>
                <li>Analytics providers, where used, typically in aggregated or pseudonymous form.</li>
              </ul>
              <p className="mt-3">
                Those providers may process data in other countries. We take reasonable steps to ensure appropriate
                safeguards where required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">6. Retention</h2>
              <p>
                We keep information only as long as needed for the purposes above, including to resolve disputes,
                enforce agreements, and meet legal, tax, or accounting requirements. Retention periods vary depending on
                the context (for example enquiry records vs. server logs).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">7. Your choices and rights</h2>
              <p className="mb-3">
                Depending on where you live, you may have rights to access, correct, delete, or restrict certain
                processing of your personal information, or to object to processing or request portability. To exercise
                these rights, contact us at the email above. We may need to verify your request.
              </p>
              <p>
                If you believe we have mishandled your data, you may also have the right to lodge a complaint with a
                supervisory authority in your country or region.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">8. Security</h2>
              <p>
                We use reasonable technical and organisational measures to protect information against unauthorised
                access, loss, or alteration. No method of transmission over the Internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">9. Children</h2>
              <p>
                Our website and services are directed at businesses and professionals. They are not intended for
                children under 16, and we do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">10. Changes</h2>
              <p>
                We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change
                when we do. Continued use of the site after changes constitutes acceptance of the updated policy where
                the law allows.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">11. Contact</h2>
              <p>
                Questions about this policy:{" "}
                <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                  info@samaritek.co.zw
                </a>
              </p>
            </section>
          </div>

          <p className="mt-12 text-sm text-[#657786]">
            <Link href="/terms" className="text-[#FEA02F] hover:underline">
              Terms of Service
            </Link>
            {" · "}
            <Link href="/" className="text-[#FEA02F] hover:underline">
              Home
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
