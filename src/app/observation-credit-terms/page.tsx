import type { Metadata } from "next";
import Link from "next/link";

import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Observation Credit Terms",
  description:
    "Terms governing the purchase and use of Titan Observatory observation credits.",
};

export default function ObservationCreditTermsPage() {
  return (
    <LegalPageLayout
      current="observation-credits"
      title="Observation Credit Terms"
      summary="These terms explain how observation credits may be purchased and used on the Titan Observatory platform."
      lastUpdated="August 9, 2026"
    >
      <section>
        <h2>1. Agreement and scope</h2>
        <p>
          These Observation Credit Terms apply when you purchase, receive, or use
          observation credits on the Titan Observatory platform. They supplement
          Titan Observatory&apos;s <Link href="/terms">Terms and Conditions</Link>. By
          purchasing or using observation credits, you agree to both documents.
        </p>
        <p>
          If these Observation Credit Terms conflict with the Terms and Conditions,
          these terms control only with respect to observation credits.
        </p>
      </section>

      <section>
        <h2>2. Purchasing credits</h2>
        <p>
          Observation credits are prepaid units that may be applied to eligible
          telescope time and related platform features. The price, number of credits,
          taxes, and any payment-processing charges will be shown before you complete
          a purchase.
        </p>
        <p>
          You authorize Titan and its payment processor to charge the payment method
          you provide. You are responsible for providing accurate billing information
          and for resolving unauthorized access to your account.
        </p>
        <p>
          Memberships purchased before telescope reservations launch are a way to
          support the development and operation of Titan Observatory. Any observation
          credits included with a membership are a membership benefit: they will
          accrue during the pre-launch period but cannot be used until telescope
          reservations become available.
        </p>
      </section>

      <section>
        <h2>3. Using credits</h2>
        <p>
          The number of credits required for an observation is shown when you schedule
          it and may depend on the telescope, observation length, or selected features.
          Credits are deducted according to the rate displayed when the observation is
          booked.
        </p>
        <p>
          Observation credits may be used only through the account to which they were
          issued. They have no cash value, cannot be redeemed for cash, and may not be
          sold, transferred, or combined between accounts unless Titan expressly
          permits it.
        </p>
      </section>

      <section>
        <h2>4. Scheduling and availability</h2>
        <p>
          Purchasing credits does not guarantee telescope availability, a particular
          observation time, or any specific scientific result. Observations remain
          subject to scheduling limits, weather, maintenance, interference, equipment
          safety, and other operational needs.
        </p>
      </section>

      <section>
        <h2>5. Cancellations, failed observations, and refunds</h2>
        <p>
          If Titan cancels or interrupts an observation because of equipment failure,
          maintenance, network failure, unsafe operating conditions, or another
          operational issue, the affected credits will be restored to the customer’s
          account. If an observation is canceled by the customer before the observation
          begins, the credits used for that observation will be refunded.
        </p>
      </section>

      <section>
        <h2>6. Account restrictions and corrections</h2>
        <p>
          Titan may suspend the use of credits while investigating fraud, chargebacks,
          payment disputes, account misuse, or violations of the Terms and Conditions.
          We may correct a credit balance when a technical or administrative error
          caused credits to be added, deducted, or displayed incorrectly.
        </p>
      </section>

      <section>
        <h2>7. Changes and contact</h2>
        <p>
          We may update these terms for future purchases by posting a revised version
          and updating the date above. Any material change affecting credits you
          already purchased will apply only to the extent permitted by law.
        </p>
        <p>
          Questions about observation credits may be sent to Titan Observatory through
          our <Link href="/contact">public contact page</Link>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
