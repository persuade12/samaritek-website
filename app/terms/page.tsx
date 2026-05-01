import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | SamariTek",
  description:
    "Terms governing your use of the SamariTek website and general engagement with our services and communications.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black">
      <article className="relative pt-28 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm text-[#657786]">Last updated: 1 May 2026</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Terms of <span className="text-[#FEA02F]">Service</span>
          </h1>
          <p className="mb-10 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-[#EBD9C8]/80">
            These Terms govern your use of the SamariTek website and general rules for engaging with us. A separate
            written agreement (statement of work, master services agreement, or similar) will apply to specific
            projects where we agree one with you.
          </p>

          <div className="space-y-8 text-[#EBD9C8]/85 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-bold text-white">1. Agreement</h2>
              <p>
                By accessing or using <strong className="text-white">samaritek.co.zw</strong> and related pages we
                operate (&quot;Site&quot;), you agree to these Terms. If you do not agree, do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">2. Who we are</h2>
              <p>
                The Site is operated by SamariTek. Contact:{" "}
                <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                  info@samaritek.co.zw
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">3. Use of the Site</h2>
              <p className="mb-3">You agree that you will not:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#FEA02F]">
                <li>Use the Site in any way that violates applicable law or infringes others&apos; rights;</li>
                <li>Attempt to gain unauthorised access to our systems, other users, or networks;</li>
                <li>Introduce malware, overload or disrupt the Site, or scrape the Site in a manner that harms our
                  operations;</li>
                <li>Misrepresent your identity or affiliation when contacting us.</li>
              </ul>
              <p className="mt-3">
                We may suspend or restrict access where reasonably necessary to protect security or comply with law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">4. Information you provide</h2>
              <p>
                You are responsible for the accuracy of information you submit through forms or email. You must have
                the right to share any materials or personal data you send us in connection with an enquiry or project.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">5. Intellectual property</h2>
              <p className="mb-3">
                The Site, its branding, text, graphics, and underlying software are owned by SamariTek or our licensors
                and are protected by intellectual property laws. You receive a limited, non-exclusive, non-transferable
                licence to access and use the Site for personal or internal business purposes. No other rights are
                granted unless we agree in writing.
              </p>
              <p>
                Deliverables and IP for paid engagements are governed by the applicable project agreement, not these
                Terms alone.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">6. Third-party links</h2>
              <p>
                The Site may link to third-party websites or services. We are not responsible for their content,
                practices, or availability. Your use of third-party sites is at your own risk and subject to their
                terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">7. Disclaimers</h2>
              <p className="mb-3">
                The Site and its content are provided <strong className="text-white">&quot;as is&quot;</strong> and{" "}
                <strong className="text-white">&quot;as available&quot;</strong>. To the fullest extent permitted by
                law, we disclaim all warranties, express or implied, including merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
              <p>
                Nothing on the Site constitutes professional, legal, or financial advice. Case studies or examples are
                illustrative and may not reflect your outcomes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">8. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by applicable law, SamariTek and its directors, employees, and
                contractors will not be liable for any indirect, incidental, special, consequential, or punitive
                damages, or for loss of profits, data, goodwill, or business opportunities, arising from or related to
                your use of the Site or inability to use the Site.
              </p>
              <p className="mt-3">
                Our total aggregate liability arising out of or relating to the Site (and these Terms) shall not
                exceed the greater of (a) the amount you paid us specifically for access to the Site in the twelve (12)
                months before the claim (typically zero for browsing), or (b) one hundred United States dollars
                (USD 100), except where liability cannot be limited by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">9. Indemnity</h2>
              <p>
                You will defend and indemnify SamariTek against any claims, damages, losses, or expenses (including
                reasonable legal fees) arising from your misuse of the Site, your violation of these Terms, or your
                violation of third-party rights, to the extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">10. Changes</h2>
              <p>
                We may modify these Terms by posting an updated version on the Site and changing the &quot;Last
                updated&quot; date. Material changes may also be announced where appropriate. Continued use after the
                effective date may constitute acceptance where permitted by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">11. Governing law and disputes</h2>
              <p>
                These Terms are governed by the laws of <strong className="text-white">Zimbabwe</strong>, without
                regard to conflict-of-law rules. Courts in Zimbabwe shall have non-exclusive jurisdiction, subject to
                any mandatory provisions of the law applicable to you.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">12. Contact</h2>
              <p>
                Questions about these Terms:{" "}
                <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                  info@samaritek.co.zw
                </a>
              </p>
            </section>
          </div>

          <p className="mt-12 text-sm text-[#657786]">
            <Link href="/privacy" className="text-[#FEA02F] hover:underline">
              Privacy Policy
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
