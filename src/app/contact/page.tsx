import type { Metadata } from "next";

import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Titan Observatory team.",
};

export default function ContactPage() {
  return <ContactForm />;
}
