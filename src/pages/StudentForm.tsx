import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  mobile: string;
  institutionName: string;
  courseName: string;
  idCardNo: string;
  courseCompletionDate: string;
  residenceAddress: string;
  institutionAddress: string;
  photograph: File | null;
  bonafideCertificate: File | null;
}

const initialForm: FormData = {
  name: "",
  email: "",
  mobile: "",
  institutionName: "",
  courseName: "",
  idCardNo: "",
  courseCompletionDate: "",
  residenceAddress: "",
  institutionAddress: "",
  photograph: null,
  bonafideCertificate: null,
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-(--color-muted) bg-surface text-bg-warm text-sm font-body placeholder:text-bg-warm/30 focus:outline-none focus:border-purple transition-colors";

const labelClass =
  "text-xs font-body font-medium text-purple tracking-[0.15em] uppercase";

export default function StudentForm() {
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files?.[0] ?? null }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submitted! Proceeding to payment…");
  }

  return (
    <main
      ref={container}
      className="min-h-screen bg-white text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── HERO HEADER ── */}
      <section className="hero-section px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0">
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

          <h1 className="hero-text font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] tracking-tight uppercase">
            Student <br />
            <span className="text-yellow">Membership Form</span>
          </h1>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="px-6 md:px-16 py-12 pb-32">
        <div className="max-w-3xl mx-auto border border-(--color-muted) rounded-2xl p-8 md:p-12 bg-white shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* ── Personal Details ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Personal Details
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile Number
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
            </div>

            {/* ── Institution Details ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Institution Details
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="institutionName" className={labelClass}>
                  Name of the Institution where studying
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="courseName" className={labelClass}>
                    Name of the Course of Study
                  </label>
                  <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={form.courseName}
                    onChange={handleChange}
                    required
                    placeholder="Course name"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="idCardNo" className={labelClass}>
                    ID Card No.
                  </label>
                  <input
                    type="text"
                    id="idCardNo"
                    name="idCardNo"
                    value={form.idCardNo}
                    onChange={handleChange}
                    required
                    placeholder="Student ID card number"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="courseCompletionDate" className={labelClass}>
                  Likely date of completion of the Course
                </label>
                <input
                  type="date"
                  id="courseCompletionDate"
                  name="courseCompletionDate"
                  value={form.courseCompletionDate}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* ── Addresses ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Address
              </h2>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="residenceAddress" className={labelClass}>
                  Address (Residence)
                </label>
                <textarea
                  id="residenceAddress"
                  name="residenceAddress"
                  value={form.residenceAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Residential address"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="institutionAddress" className={labelClass}>
                  Address (Institution)
                </label>
                <textarea
                  id="institutionAddress"
                  name="institutionAddress"
                  value={form.institutionAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Institution address"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* ── Uploads ── */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-bg-warm text-xl tracking-tight border-b border-(--color-muted) pb-3">
                Documents
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="photograph" className={labelClass}>
                    Photograph
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="photograph"
                      name="photograph"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="w-full text-sm font-body text-bg-warm/70 file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple/10 file:text-purple hover:file:bg-purple/20 file:cursor-pointer file:transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="bonafideCertificate" className={labelClass}>
                    Bonafide Certificate from Institution
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="bonafideCertificate"
                      name="bonafideCertificate"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      required
                      className="w-full text-sm font-body text-bg-warm/70 file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-purple/10 file:text-purple hover:file:bg-purple/20 file:cursor-pointer file:transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Payment & Submit ── */}
            <div className="flex flex-col gap-4 border-t border-(--color-muted) pt-8">
              <p className="font-body text-sm text-bg-warm/70">
                Payment Details: <span className="font-bold text-bg-warm">Rs. 1,000</span> for annual membership
              </p>
              <button
                type="submit"
                className="self-end inline-flex items-center gap-2 px-8 py-4 text-sm font-body font-bold uppercase tracking-widest text-white bg-purple rounded-full transition-all hover:opacity-85 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Submit &amp; Proceed to Pay →
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
