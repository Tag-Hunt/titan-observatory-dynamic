export const CONTACT_EMAIL = "contact@titanobservatory.org";

export const CONTACT_SUBJECTS = [
  "General inquiry",
  "Observatory information",
  "Education programs",
  "Telescope access",
  "Account support",
  "Partnerships",
  "Other",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export type ContactSubmissionInput = {
  name: string;
  email: string;
  subject: ContactSubject;
  message: string;
  privacyPolicyAccepted: true;
};
