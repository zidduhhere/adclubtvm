import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "../components/PageHero";

gsap.registerPlugin(ScrollTrigger);

interface Nominee {
  name: string;
  designation: string;
  email: string;
  mobile: string;
}

interface FormData {
  organisationName: string;
  address: string;
  gstNo: string;
  panNo: string;
  contactPersonName: string;
  phone: string;
  mobile: string;
  email: string;
  nominees: Nominee[];
  agreed: boolean;
}

const initialNominee: Nominee = {
  name: "",
  designation: "",
  email: "",
  mobile: "",
};

const initialForm: FormData = {
  organisationName: "",
  address: "",
  gstNo: "",
  panNo: "",
  contactPersonName: "",
  phone: "",
  mobile: "",
  email: "",
  nominees: [
    { ...initialNominee },
    { ...initialNominee },
    { ...initialNominee },
    { ...initialNominee },
    { ...initialNominee },
  ],
  agreed: false,
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-(--color-muted) bg-surface text-bg-warm text-sm font-body placeholder:text-bg-warm/30 focus:outline-none focus:border-purple transition-colors";

const labelClass =
  "text-xs font-body font-medium text-purple tracking-[0.15em] uppercase";

export default function CorporateForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(".parallax-bg", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".parallax-fast", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.1,
        },
      );
    },
    { scope: container },
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleNomineeChange(
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => {
      const newNominees = [...prev.nominees];
      newNominees[index] = { ...newNominees[index], [name]: value };
      return { ...prev, nominees: newNominees };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    alert("Application submitted!");
  }

  return (
    <main
      ref={container}
      className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── HERO HEADER ── */}
      <PageHero
        title={
          <>
            <span className="hero-text block text-center">Corporate</span>
            <span className="hero-text block text-center">Membership Form</span>
          </>
        }
      />

      {/* ── FORM ── */}
      <section className="px-6 md:px-16 py-12 pb-32 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto border border-(--color-muted) rounded-3xl p-8 md:p-14 bg-white shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            
            {/* ── Organisation Details ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-2xl tracking-tight border-b border-(--color-muted) pb-3">
                Organisation Details
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="organisationName" className={labelClass}>
                  Name of the Organisation
                </label>
                <input
                  type="text"
                  id="organisationName"
                  name="organisationName"
                  value={form.organisationName}
                  onChange={handleChange}
                  required
                  placeholder="Company / Organisation Name"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="address" className={labelClass}>
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Full Address"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="gstNo" className={labelClass}>
                    GST No
                  </label>
                  <input
                    type="text"
                    id="gstNo"
                    name="gstNo"
                    value={form.gstNo}
                    onChange={handleChange}
                    placeholder="GSTIN"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="panNo" className={labelClass}>
                    PAN No
                  </label>
                  <input
                    type="text"
                    id="panNo"
                    name="panNo"
                    value={form.panNo}
                    onChange={handleChange}
                    required
                    placeholder="PAN Number"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* ── Contact Person Details ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-2xl tracking-tight border-b border-(--color-muted) pb-3">
                Contact Person Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="contactPersonName" className={labelClass}>
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    id="contactPersonName"
                    name="contactPersonName"
                    value={form.contactPersonName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Landline number (optional)"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Mobile number"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* ── Corporate Nominees ── */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 border-b border-(--color-muted) pb-3">
                <h2 className="font-display font-bold text-bg-warm text-2xl tracking-tight">
                  Name of the 5 Corporate Nominees
                </h2>
                <p className="font-body text-sm text-bg-warm/60">
                  Please provide details for up to 5 nominees from your organization.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {form.nominees.map((nominee, index) => (
                  <div key={index} className="flex flex-col gap-5 p-6 rounded-2xl border border-black/5 bg-[#F8F9FA]">
                    <h3 className="font-display font-bold text-lg text-purple">Nominee {index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className={labelClass}>Name {index + 1}</label>
                        <input
                          type="text"
                          name="name"
                          value={nominee.name}
                          onChange={(e) => handleNomineeChange(index, e)}
                          placeholder={`Nominee ${index + 1} Name`}
                          className={inputClass}
                          required={index === 0} // Make at least the first one required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>Designation</label>
                        <input
                          type="text"
                          name="designation"
                          value={nominee.designation}
                          onChange={(e) => handleNomineeChange(index, e)}
                          placeholder="Designation"
                          className={inputClass}
                          required={index === 0 && nominee.name !== ""}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={nominee.email}
                          onChange={(e) => handleNomineeChange(index, e)}
                          placeholder="Email address"
                          className={inputClass}
                          required={index === 0 && nominee.name !== ""}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className={labelClass}>Mobile</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={nominee.mobile}
                          onChange={(e) => handleNomineeChange(index, e)}
                          placeholder="Mobile number"
                          className={inputClass}
                          required={index === 0 && nominee.name !== ""}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Declaration & Submit ── */}
            <div className="flex flex-col gap-8 border-t border-(--color-muted) pt-10">
              <div className="bg-purple/5 border border-purple/10 rounded-2xl p-6">
                <p className="font-body text-sm text-bg-warm/80 leading-relaxed mb-6">
                  We wish to be a Corporate Member of Advertising Club Trivandrum. We subscribe to the aims and objects of the Club and if elected shall observe the rules and regulations and pay the subscription for the time being in force. We have read the eligibility clause given behind the form and confirm that we fulfill the conditions laid therein. We also agree that we shall automatically cease to be a member for defaults in payment if any.
                </p>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={form.agreed}
                      onChange={handleChange}
                      className="peer appearance-none w-5 h-5 rounded border-2 border-purple/30 checked:border-purple checked:bg-purple transition-all cursor-pointer"
                    />
                    <svg
                      className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-sm font-bold text-bg-warm group-hover:text-purple transition-colors">
                    I Agree to the Terms &amp; Conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled
                className="w-full md:w-auto self-end inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-body font-bold uppercase tracking-widest text-black/40 bg-black/5 rounded-full cursor-not-allowed border border-black/10 transition-all"
              >
                Form Disabled
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── NOTE SECTION ── */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-bg-warm text-2xl tracking-tight mb-6">
            Note:
          </h3>
          <ul className="flex flex-col gap-4 font-body text-sm text-bg-warm/70 leading-relaxed list-decimal list-outside pl-4 marker:font-bold marker:text-purple">
            <li className="pl-2">Advertising Agencies and mainline Media Houses engaged in the business of advertising and mass communication in print and electronic media shall be eligible to become Corporate Member</li>
            <li className="pl-2">The membership will be entitled to nominate a maximum of five (5) persons from its organisation to participate in the affairs of the Club and each of these nominees shall enjoy the same rights and privileges to which the Individual Members are entitled.</li>
            <li className="pl-2">In the event any nominated persons leave the organization nominated by him/her, then the organization shall nominate another person by giving a written request to the Club.</li>
            <li className="pl-2">Organisations interested to empanel more individuals can opt for additional memberships with an amount of Rs. 4000 for each person per year.</li>
            <li className="pl-2">An organization shall be entitled to only one corporate membership.</li>
            <li className="pl-2">A Corporate Member shall be entitled to a maximum of five votes, exercised on the basis of one vote only to each of its accredited representatives to the Club</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
