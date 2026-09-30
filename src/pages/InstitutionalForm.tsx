import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  institutionName: string;
  address: string;
  gstNo: string;
  panNo: string;
  contactPersonName: string;
  phone: string;
  mobile: string;
  email: string;
  nominatedMemberName: string;
  nominatedMemberDesignation: string;
  nominatedMemberEmail: string;
  nominatedMemberMobile: string;
  agreed: boolean;
}

const initialForm: FormData = {
  institutionName: "",
  address: "",
  gstNo: "",
  panNo: "",
  contactPersonName: "",
  phone: "",
  mobile: "",
  email: "",
  nominatedMemberName: "",
  nominatedMemberDesignation: "",
  nominatedMemberEmail: "",
  nominatedMemberMobile: "",
  agreed: false,
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-(--color-muted) bg-surface text-bg-warm text-sm font-body placeholder:text-bg-warm/30 focus:outline-none focus:border-purple transition-colors";

const labelClass =
  "text-xs font-body font-medium text-purple tracking-[0.15em] uppercase";

export default function InstitutionalForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.agreed) {
      alert("Please agree to the declaration before submitting.");
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
      <section className="hero-section px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 100"
            className="parallax-bg absolute top-20 left-0 w-full h-auto opacity-[0.15] stroke-black fill-none"
            preserveAspectRatio="none"
            style={{ strokeWidth: "1.5px" }}
          >
            <path d="M0,30 Q180,-10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50" />
            <path d="M0,70 Q180,30 360,70 T720,70 T1080,70 T1440,70" />
          </svg>

          <img
            src="/SVG/grid.svg"
            alt=""
            className="parallax-fast absolute top-4 left-0 h-[60%] md:h-[70%] object-contain -ml-[5%] lg:-ml-[10%]"
          />
          <img
            src="/SVG/grid-2.svg"
            alt=""
            className="parallax-fast absolute top-4 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
        </div>

        <div className="relative z-10 max-w-5xl flex flex-col items-center gap-8">
          <div className="hero-text inline-block border-2 border-black/20 rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest text-black/60 shadow-sm">
            Membership
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] tracking-tight">
            Institutional <br />
            <span className="text-yellow">membership form</span>
          </h1>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="px-6 md:px-16 py-12 pb-32">
        <div className="max-w-3xl mx-auto border border-(--color-muted) rounded-2xl p-8 md:p-12 bg-white shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* ── Institution Details ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Institution Details
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="institutionName" className={labelClass}>
                  Name of the Institution
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  value={form.institutionName}
                  onChange={handleChange}
                  required
                  placeholder="Institution name"
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
                  placeholder="Full address"
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
                    placeholder="GST number"
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
                    placeholder="PAN number"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* ── Contact Person ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Contact Person
              </h2>

              <div className="flex flex-col gap-1.5">
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
                  placeholder="Contact person's full name"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    placeholder="Landline number"
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
              </div>

              <div className="flex flex-col gap-1.5">
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
                  placeholder="email@institution.org"
                  className={inputClass}
                />
              </div>
            </div>

            {/* ── Nominated Member ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Name of the Nominated Member
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="nominatedMemberName" className={labelClass}>
                  Name
                </label>
                <input
                  type="text"
                  id="nominatedMemberName"
                  name="nominatedMemberName"
                  value={form.nominatedMemberName}
                  onChange={handleChange}
                  required
                  placeholder="Nominated member's full name"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="nominatedMemberDesignation"
                  className={labelClass}
                >
                  Designation
                </label>
                <input
                  type="text"
                  id="nominatedMemberDesignation"
                  name="nominatedMemberDesignation"
                  value={form.nominatedMemberDesignation}
                  onChange={handleChange}
                  required
                  placeholder="Designation"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nominatedMemberEmail" className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="nominatedMemberEmail"
                    name="nominatedMemberEmail"
                    value={form.nominatedMemberEmail}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nominatedMemberMobile" className={labelClass}>
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="nominatedMemberMobile"
                    name="nominatedMemberMobile"
                    value={form.nominatedMemberMobile}
                    onChange={handleChange}
                    required
                    placeholder="Mobile number"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* ── Declaration ── */}
            <div className="flex flex-col gap-5">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Declaration
              </h2>

              <p className="font-body text-sm text-bg-warm/70 leading-relaxed">
                We wish to be a Institutional Member of Advertising Club
                Trivandrum. We subscribe to the aims and objects of the Club and
                if elected shall observe the rules and regulations and pay the
                subscription for the time being in force. We have read the
                eligibility clause given behind the form and confirm that we
                fulfill the conditions laid therein. We also agree that we shall
                automatically cease to be a member for defaults in payment if
                any.
              </p>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-2 border-(--color-muted) accent-purple cursor-pointer"
                />
                <span className="font-body text-sm font-medium text-bg-warm group-hover:text-purple transition-colors">
                  I agree to the above declaration
                </span>
              </label>
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={!form.agreed}
              className="self-end inline-flex items-center gap-2 px-8 py-4 text-sm font-body font-bold uppercase tracking-widest text-white bg-purple rounded-full transition-all hover:opacity-85 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-lg"
            >
              Submit application →
            </button>
          </form>
        </div>

        {/* ── Notes ── */}
        <div className="max-w-3xl mx-auto mt-10 p-6 md:p-8 bg-[#F8F9FA] border border-(--color-muted) rounded-2xl">
          <h3 className="font-display font-bold text-bg-warm text-base tracking-tight mb-4">
            Note:
          </h3>
          <ol className="list-decimal list-outside pl-5 flex flex-col gap-3 font-body text-sm text-bg-warm/70 leading-relaxed">
            <li>
              Central/State Government Organizations, Central/State PSU's,
              Central/State Organizations of Govt Undertaking and Boards, Public
              Sector Banks shall be eligible for Institutional Members.
            </li>
            <li>
              The professionals in the field of communication &amp; public
              relations of these organizations shall represent as members of the
              Club.
            </li>
            <li>
              Institutional members are not eligible to be nominated as Office
              Bearers.
            </li>
            <li>
              The Institutional member shall hold the right to cast the vote
              during election procedure, if any.
            </li>
            <li>
              The membership fee for Institutional members shall be Rs. 10,000/-
              a year with 1 membership, payable in advance. An amount of Rs.
              5,000 per member shall be paid for an additional membership.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
