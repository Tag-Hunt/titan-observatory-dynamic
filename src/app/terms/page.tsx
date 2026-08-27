import type { Metadata } from "next";
import Link from "next/link";

import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing use of the Titan Observatory platform.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      current="terms"
      title="Terms and Conditions"
      summary="These terms govern your account and use of the Titan Observatory platform."
    >
      <section>
        <h2>1. Agreement</h2>
        <p>
          These Terms and Conditions (“Terms”) are an agreement between you and
          Titan Observatory, a Florida-based 501(c)(3) nonprofit (“Titan,” “we,”
          “us,” or “our”). They apply to the Titan Platform and related services
          (the “Service”). By creating an account or using the Service, you agree to
          these Terms and acknowledge our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>2. Accounts and eligibility</h2>
        <p>
          You must be at least 13 years old to create an account. If you are under
          the age of legal majority where you live, a parent or guardian must agree
          to these Terms for you. Children under 13 may participate only through an
          authorized school or parental-consent program.
        </p>
        <p>
          Keep your account information accurate and your login credentials secure.
          You are responsible for activity through your account and should notify us
          if you suspect unauthorized use.
        </p>
      </section>

      <section>
        <h2>3. Using the Service</h2>
        <p>
          Titan provides educational resources and access to radio astronomy tools.
          Telescope availability, schedules, capabilities, and data quality may
          change because of weather, maintenance, safety requirements, interference,
          or other operational needs. We may delay, interrupt, or cancel an
          observation when reasonably necessary.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Use the Service unlawfully or to harm, harass, or deceive others.</li>
          <li>Access another person’s account or non-public data.</li>
          <li>Bypass security, permissions, safety controls, or operating limits.</li>
          <li>Disrupt the Service or submit commands that could damage equipment.</li>
          <li>Upload malware or infringing, confidential, or otherwise unlawful material.</li>
        </ul>
        <p>
          Follow all displayed instructions and staff directions when scheduling or
          controlling observatory equipment.
        </p>
      </section>

      <section>
        <h2>4. Credits, payments, and donations</h2>
        <p>
          Paid features may use hour credits, memberships, or other purchases. Prices,
          usage rates, renewal terms, and applicable refund rules will be shown before
          purchase. Unless stated otherwise or required by law, credits have no cash
          value and are non-transferable.
        </p>
        <p>
          Observation-credit purchases are not charitable contributions unless they
          are expressly identified as donations. Payment processors may apply their
          own terms and privacy policies. The purchase and use of observation credits
          are also governed by our{" "}
          <a href="https://app.titanobservatory.org/observation-credit-terms">
            Observation Credit Terms
          </a>
          .
        </p>
      </section>

      <section>
        <h2>5. Content and observation data</h2>
        <p>
          You keep any rights you hold in material you submit. You give Titan a
          non-exclusive, royalty-free license to host, process, and display that
          material as needed to provide and improve the Service.
        </p>
        <p>
          Titan may make some observation data available for educational or scientific
          use. Do not include personal, confidential, or sensitive information in
          observation names, plans, or other submissions. Unless Titan expressly says
          material is confidential, you should not assume that it is.
        </p>
        <p>
          Titan owns or licenses the Service, its branding, and its content. You may
          use them only as permitted by the Service or an applicable open-source or
          content license.
        </p>
      </section>

      <section>
        <h2>6. Suspension and third-party services</h2>
        <p>
          We may restrict or suspend access to protect users or equipment, enforce
          these Terms, comply with law, address nonpayment, or discontinue a feature.
          The Service may link to third-party services such as identity providers,
          payment processors, or sky surveys. Those services are governed by their
          own terms, and Titan is not responsible for them.
        </p>
      </section>

      <section>
        <h2>7. Disclaimers and liability</h2>
        <p>
          To the fullest extent permitted by law, the Service is provided “as is” and
          “as available.” We do not guarantee uninterrupted access, successful
          observations, permanent storage, or the accuracy or fitness of educational
          content or observation data for a particular purpose.
        </p>
        <p>
          To the fullest extent permitted by law, Titan and its personnel will not be
          liable for indirect, incidental, special, or consequential damages arising
          from the Service. Titan’s total liability will not exceed the greater of
          $100 or the amount you paid Titan for the Service during the 12 months before
          the claim. These limits do not apply where prohibited by law.
        </p>
      </section>

      <section>
        <h2>8. Changes, disputes, and contact</h2>
        <p>
          We may update these Terms by posting a revised version and updating the date
          above. We will provide additional notice if a change materially affects your
          rights. If you do not agree to revised Terms, stop using the Service.
        </p>
        <p>
          Florida law governs these Terms. Unless applicable law requires otherwise,
          disputes must be brought in the state or federal courts serving Polk County,
          Florida. If any part of these Terms is unenforceable, the remaining parts
          remain in effect.
        </p>
        <p>
          Questions may be sent to Titan Observatory through our{" "}
          <a href="https://titanobservatory.org/contact">public contact page</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
