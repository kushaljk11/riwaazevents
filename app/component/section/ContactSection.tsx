"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { contactData } from "../../data/contact";
import { footerData } from "../../data/footer";
import { RevealText, FadeUp, RevealImage, MagneticButton } from "../animation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    estimatedGuests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-ivory py-16 md:py-24">
      <Container size="wide">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <FadeUp delay={0.1} y={15} className="mb-4">
            <span className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              {contactData.badge}
            </span>
          </FadeUp>

          <h2 className="font-editorial text-3xl md:text-5xl font-semibold text-charcoal tracking-wide leading-tight max-w-2xl">
            <RevealText as="span" delay={0.2} duration={1.1}>
              {contactData.titlePrefix}
            </RevealText>
            <RevealText as="span" delay={0.35} duration={1.1}>
              <span className="italic font-semibold text-gold-dark">
                {contactData.titleHighlight}
              </span>
            </RevealText>
          </h2>

          <FadeUp delay={0.5} y={20}>
            <p className="mt-4 font-editorial font-medium text-base md:text-lg text-muted tracking-wide max-w-xl">
              {contactData.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* Content Grid: Form on Left, Photo & Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form Area (7 Cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-ivory-light border border-primary/30 p-8 md:p-12 text-center rounded-sm shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-maroon mx-auto mb-4" />
                <h3 className="font-editorial text-2xl md:text-3xl text-charcoal mb-2 tracking-wide font-semibold">
                  Thank You, {formData.name || "Esteemed Guest"}
                </h3>
                <p className="font-editorial font-medium text-base md:text-lg text-muted max-w-md mx-auto mb-6">
                  Our bespoke wedding concierges have received your vision and
                  will connect with you shortly.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSubmitted(false)}
                >
                  SEND ANOTHER ENQUIRY
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                    >
                      NAME <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base text-charcoal focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                    >
                      PHONE
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+977 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base placeholder-muted/60 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Event Type (Input field) & Event Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                    >
                      EVENT TYPE
                    </label>
                    <input
                      type="text"
                      id="eventType"
                      name="eventType"
                      placeholder="e.g. Wedding, Reception, Gala"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base placeholder-muted/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                    >
                      EVENT DATE
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base text-charcoal focus:outline-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                {/* Row 3: Location & Estimated Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="location"
                      className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                    >
                      LOCATION
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City or venue"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base placeholder-muted/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="estimatedGuests"
                      className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                    >
                      ESTIMATED GUESTS
                    </label>
                    <input
                      type="text"
                      id="estimatedGuests"
                      name="estimatedGuests"
                      placeholder="e.g. 250"
                      value={formData.estimatedGuests}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base placeholder-muted/60 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 4: Tell us about your event */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-charcoal uppercase mb-2"
                  >
                    TELL US ABOUT YOUR EVENT
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="The story, the setting, the feeling — anything that matters to you."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-sm md:text-base placeholder-muted/60 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <MagneticButton strength={0.15}>
                    <Button
                      type="submit"
                      variant="solid"
                      size="lg"
                      arrow="right"
                      className="w-full md:w-auto"
                    >
                      {contactData.submitButtonText}
                    </Button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Image & Info Area (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Couple Photo Container with Editorial Reveal */}
            <RevealImage
              direction="up"
              duration={1.4}
              className="relative aspect-4/5 w-full shadow-lg border border-charcoal/5"
            >
              <Image
                src={contactData.coupleImage.src}
                alt={contactData.coupleImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </RevealImage>

            {/* Direct Studio Contact Cards */}
            <div className="pt-2 space-y-5">
              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-1">
                  PHONE
                </p>
                <a
                  href={`tel:${footerData.contact.phone.replace(/\s+/g, "")}`}
                  className="font-sans text-sm md:text-base text-charcoal hover:text-maroon transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </div>

              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-1">
                  STUDIO
                </p>
                <p className="font-sans text-sm md:text-base text-charcoal">
                  {footerData.contact.studio}
                </p>
              </div>

              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-1">
                  HOURS
                </p>
                <p className="font-sans text-sm md:text-base text-charcoal">
                  {footerData.contact.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
