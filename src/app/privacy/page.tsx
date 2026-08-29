import type { Metadata } from "next";

import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Titan Observatory collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      current="privacy"
      title="Privacy Policy"
      summary="This policy explains what information Titan Observatory collects, why we use it, and the choices available to you."
    >
      <section>
        <h2>1. Information we collect</h2>
        <p>We collect information in three main ways:</p>
        <ul>
          <li>
            <strong>Information you provide,</strong> such as your name, email,
            password, optional profile details, reservations, submissions, feedback,
            and transaction information.
          </li>
          <li>
            <strong>Information collected automatically,</strong> such as basic usage
            data, cookies, browser or device information, IP address, and technical or
            security logs.
          </li>
          <li>
            <strong>Information from services you connect,</strong> such as your name,
            verified email, and account identifier when you sign in with Google or
            Discord. Payment providers may also send us transaction confirmations.
          </li>
        </ul>
        <p>
          Payment-card and bank details are generally collected by our payment
          processor rather than stored by Titan.
        </p>
      </section>

      <section>
        <h2>2. How we use information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Create, secure, and support your account.</li>
          <li>Provide educational, scheduling, telescope, and observation services.</li>
          <li>Process purchases, credits, memberships, refunds, or donations.</li>
          <li>Send verification, password-reset, service, and requested messages.</li>
          <li>Maintain security, prevent misuse, troubleshoot problems, and improve the Service.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
      </section>

      <section>
        <h2>3. How we share information</h2>
        <p>We may share information with:</p>
        <ul>
          <li>Providers that help us host, secure, maintain, email, or process payments for the Service.</li>
          <li>Google, Discord, or another integration when you choose to connect it.</li>
          <li>A school or organization administering a program in which you participate.</li>
          <li>Authorities or affected parties when required by law or needed to protect people, rights, or equipment.</li>
          <li>A successor organization if Titan or the Service is reorganized or transferred.</li>
        </ul>
        <p>
          Some observation data may be shared or published for educational or
          scientific use. Do not put personal or confidential information in
          observation names, plans, or related submissions unless Titan has expressly
          agreed to treat it as confidential.
        </p>
        <p>
          We do not sell personal information or use Platform account data for
          third-party targeted advertising. We may share aggregated or de-identified
          information that does not reasonably identify you.
        </p>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          We use cookies and browser storage needed to keep you signed in, secure
          Google or Discord sign-in, remember limited preferences, and understand how
          the Service is used. Blocking them may prevent login or other features from
          working.
        </p>
      </section>

      <section>
        <h2>5. Retention and security</h2>
        <p>
          We keep information for as long as reasonably necessary to provide the
          Service, maintain security and required records, resolve disputes, and
          comply with law. Public or de-identified scientific data may be retained
          longer. Backup copies may remain for a limited period after deletion.
        </p>
        <p>
          We use reasonable administrative and technical safeguards, including
          storing password hashes rather than readable passwords.
        </p>
      </section>

      <section>
        <h2>6. Your choices and rights</h2>
        <p>
          You can update available profile information through your account. You may
          also ask us to access, correct, delete, or provide a copy of your personal
          information, subject to applicable law and necessary exceptions. We may
          need to verify your identity before completing a request.
        </p>
      </section>

      <section>
        <h2>7. Children and international users</h2>
        <p>
          Children under 13 may not create their own accounts or provide personal
          information directly to Titan unless participating through an authorized
          school or parental-consent program. Contact us if you believe a child has
          provided information outside such a program.
        </p>
        <p>
          Titan is based in the United States. If you use the Service elsewhere, your
          information may be processed in the United States or other countries where
          our providers operate.
        </p>
      </section>

      <section>
        <h2>8. Changes and contact</h2>
        <p>
          We may update this policy by posting a revised version and updating the date
          above. We will provide additional notice when a change is material.
        </p>
        <p>
          For privacy questions or requests, contact Titan Observatory through our{" "}
          <a href="/contact">public contact page</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
