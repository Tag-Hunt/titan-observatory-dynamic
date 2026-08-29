"use client";

import {
  IconCheck,
  IconLoader2,
  IconMail,
  IconSend,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import {
  CONTACT_EMAIL,
  CONTACT_SUBJECTS,
  type ContactSubject,
} from "@/lib/contact";

type RequiredField = "name" | "email" | "subject" | "message";

const emptyRequiredFields: Record<RequiredField, boolean> = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const fieldClassName =
  "mt-2 w-full rounded-xl border bg-titan-surface/75 px-4 py-3 text-base text-titan-text-secondary outline-none transition placeholder:text-titan-text-muted/60";

function fieldStateClassName(invalid: boolean): string {
  return invalid
    ? "border-titan-red focus:border-titan-red focus:ring-2 focus:ring-titan-red/20"
    : "border-titan-border/80 focus:border-titan-orange focus:ring-2 focus:ring-titan-orange/20";
}

export default function ContactForm() {
  const [subject, setSubject] = useState<ContactSubject>(CONTACT_SUBJECTS[0]);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [privacyPolicyError, setPrivacyPolicyError] = useState(false);
  const [requiredErrors, setRequiredErrors] = useState(emptyRequiredFields);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const requiredValues: Record<RequiredField, string> = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const nextRequiredErrors = Object.fromEntries(
      Object.entries(requiredValues).map(([field, value]) => [
        field,
        !value.trim(),
      ]),
    ) as Record<RequiredField, boolean>;

    setRequiredErrors(nextRequiredErrors);
    setPrivacyPolicyError(!privacyPolicyAccepted);
    if (
      Object.values(nextRequiredErrors).some(Boolean) ||
      !privacyPolicyAccepted ||
      !form.reportValidity()
    ) {
      return;
    }

    setErrorMessage("");
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...requiredValues,
          privacyPolicyAccepted: true,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          setErrorMessage(
            "You've sent several messages recently. Please wait before trying again. You can also email us at",
          );
        } else {
          setErrorMessage(
            "We couldn't send your message. Please try again or email us at",
          );
        }
        setStatus("error");
        return;
      }

      form.reset();
      setSubject(CONTACT_SUBJECTS[0]);
      setPrivacyPolicyAccepted(false);
      setPrivacyPolicyError(false);
      setRequiredErrors(emptyRequiredFields);
      setStatus("sent");
    } catch {
      setErrorMessage(
        "We couldn't send your message. Please try again or email us at",
      );
      setStatus("error");
    }
  }

  return (
    <div className="grid items-center gap-10 py-4 md:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:py-10">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-titan-orange">
          Get in touch
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-titan-text-secondary sm:text-5xl">
          Contact Titan Observatory
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-titan-text-primary/80 sm:text-lg">
          Have a question about the observatory, education programs, telescope
          access, or your account? Send us a message and our team will get back
          to you.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-titan-border/70 bg-titan-bg-alt/75 p-5 text-titan-text-secondary shadow-titan backdrop-blur-sm transition hover:border-titan-orange/60 hover:bg-titan-surface/70 hover:text-titan-text-secondary"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-titan-orange/15 text-titan-orange">
            <IconMail aria-hidden="true" size={24} stroke={1.8} />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-wider text-titan-text-muted">
              Email us directly
            </span>
            <span className="mt-1 block break-all text-base font-semibold sm:text-lg">
              {CONTACT_EMAIL}
            </span>
          </span>
        </a>
      </section>

      <section className="rounded-3xl border border-titan-border/70 bg-titan-bg-alt/90 p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
        <h2 className="text-2xl font-semibold text-titan-text-secondary">
          Send a message
        </h2>
        <p className="mt-2 text-sm text-titan-text-muted">
          All fields are required. We&apos;ll reply to the email address you
          provide.
        </p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-titan-text-secondary">
              Name <span className="text-titan-red" aria-hidden="true">*</span>
              <input
                className={`${fieldClassName} ${fieldStateClassName(requiredErrors.name)}`}
                type="text"
                name="name"
                autoComplete="name"
                maxLength={120}
                aria-invalid={requiredErrors.name}
                onBlur={event =>
                  setRequiredErrors(current => ({
                    ...current,
                    name: !event.target.value.trim(),
                  }))
                }
                onChange={event => {
                  if (event.target.value.trim()) {
                    setRequiredErrors(current => ({ ...current, name: false }));
                  }
                }}
                required
              />
            </label>

            <label className="text-sm font-medium text-titan-text-secondary">
              Email <span className="text-titan-red" aria-hidden="true">*</span>
              <input
                className={`${fieldClassName} ${fieldStateClassName(requiredErrors.email)}`}
                type="email"
                name="email"
                autoComplete="email"
                maxLength={320}
                aria-invalid={requiredErrors.email}
                onBlur={event =>
                  setRequiredErrors(current => ({
                    ...current,
                    email: !event.target.value.trim(),
                  }))
                }
                onChange={event => {
                  if (event.target.value.trim()) {
                    setRequiredErrors(current => ({ ...current, email: false }));
                  }
                }}
                required
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-titan-text-secondary">
            Subject <span className="text-titan-red" aria-hidden="true">*</span>
            <select
              className={`${fieldClassName} ${fieldStateClassName(requiredErrors.subject)}`}
              name="subject"
              value={subject}
              aria-invalid={requiredErrors.subject}
              onChange={event => {
                setSubject(event.target.value as ContactSubject);
                setRequiredErrors(current => ({ ...current, subject: false }));
              }}
              required
            >
              {CONTACT_SUBJECTS.map(option => (
                <option key={option} value={option} className="bg-titan-surface">
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-titan-text-secondary">
            Message <span className="text-titan-red" aria-hidden="true">*</span>
            <textarea
              className={`${fieldClassName} ${fieldStateClassName(requiredErrors.message)} min-h-36 resize-y`}
              name="message"
              maxLength={10_000}
              aria-invalid={requiredErrors.message}
              onBlur={event =>
                setRequiredErrors(current => ({
                  ...current,
                  message: !event.target.value.trim(),
                }))
              }
              onChange={event => {
                if (event.target.value.trim()) {
                  setRequiredErrors(current => ({ ...current, message: false }));
                }
              }}
              required
            />
          </label>

          {status === "sent" ? (
            <div
              className="flex items-start gap-3 rounded-xl border border-titan-green/30 bg-titan-green/10 px-4 py-3 text-sm text-titan-green"
              role="status"
            >
              <IconCheck className="mt-0.5 shrink-0" aria-hidden="true" size={18} />
              Thanks for reaching out. Your message has been sent.
            </div>
          ) : null}

          {status === "error" ? (
            <p
              className="rounded-xl border border-titan-red/30 bg-titan-red/10 px-4 py-3 text-sm text-titan-red"
              role="alert"
            >
              {errorMessage}{" "}
              <a className="font-semibold text-inherit underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          ) : null}

          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
            <div>
              <div className="flex items-start gap-3">
                <input
                  id="contact-privacy-policy"
                  className={`mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border bg-titan-surface accent-titan-orange ${privacyPolicyError ? "border-titan-red" : "border-titan-border"}`}
                  type="checkbox"
                  name="privacyPolicyAccepted"
                  checked={privacyPolicyAccepted}
                  aria-invalid={privacyPolicyError}
                  aria-describedby={
                    privacyPolicyError
                      ? "contact-privacy-policy-error"
                      : undefined
                  }
                  onChange={event => {
                    setPrivacyPolicyAccepted(event.target.checked);
                    if (event.target.checked) setPrivacyPolicyError(false);
                  }}
                  required
                />
                <label
                  htmlFor="contact-privacy-policy"
                  className="text-sm leading-5 text-titan-text-primary/80"
                >
                  I accept the{" "}
                  <Link
                    className="font-semibold text-titan-orange underline-offset-2 hover:underline"
                    href="/privacy"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              {privacyPolicyError ? (
                <p
                  id="contact-privacy-policy-error"
                  className="mt-2 text-xs text-titan-red"
                  role="alert"
                >
                  Please accept the Privacy Policy before sending your message.
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-titan-orange px-6 py-3 text-sm font-semibold text-titan-bg transition hover:bg-titan-yellow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <IconLoader2 className="animate-spin" aria-hidden="true" size={19} />
              ) : (
                <IconSend aria-hidden="true" size={19} />
              )}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
