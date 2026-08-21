import { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────
// Replace image URLs and captions with real posts from @adclubtrivandrum.
// Each post mimics the Instagram single-post view.

interface Post {
  id: string;
  image: string;
  alt: string;
  likes: number;
  caption: string;
  tags: string[];
  date: string;
  comments: { user: string; text: string }[];
}

const HANDLE = "adclubtvm";
const AVATAR = "https://ui-avatars.com/api/?name=ACT&background=1a1a1a&color=fff&size=128&bold=true&font-size=0.4";

const posts: Post[] = [
  {
    id: "1",
    image: "https://placehold.co/600x600/1a1a2e/ffffff?text=Post+1",
    alt: "Post placeholder 1",
    likes: 214,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["#AdClubTVM", "#Advertising", "#Creativity"],
    date: "March 2024",
    comments: [
      { user: "user_one", text: "Lorem ipsum dolor sit amet." },
      { user: "user_two", text: "Consectetur adipiscing elit!" },
    ],
  },
  {
    id: "2",
    image: "https://placehold.co/600x600/2d1b69/ffffff?text=Post+2",
    alt: "Post placeholder 2",
    likes: 178,
    caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["#AdClubTVM", "#Workshop"],
    date: "February 2024",
    comments: [
      { user: "user_three", text: "Duis aute irure dolor!" },
      { user: "user_four", text: "Excepteur sint occaecat." },
    ],
  },
  {
    id: "3",
    image: "https://placehold.co/600x600/1a1a2e/ffffff?text=Post+3",
    alt: "Post placeholder 3",
    likes: 301,
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["#AdClubTVM", "#CreativeProcess"],
    date: "January 2024",
    comments: [
      { user: "user_five", text: "Sunt in culpa qui officia." },
      { user: "user_six", text: "Deserunt mollit anim id est." },
    ],
  },
  {
    id: "4",
    image: "https://placehold.co/600x600/2d1b69/ffffff?text=Post+4",
    alt: "Post placeholder 4",
    likes: 256,
    caption: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["#AdClubTVM", "#Collaboration"],
    date: "December 2023",
    comments: [
      { user: "user_seven", text: "Lorem ipsum consectetur." },
      { user: "user_eight", text: "Adipiscing elit sed do." },
    ],
  },
  {
    id: "5",
    image: "https://placehold.co/600x600/1a1a2e/ffffff?text=Post+5",
    alt: "Post placeholder 5",
    likes: 189,
    caption: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    tags: ["#AdClubTVM", "#Industry"],
    date: "November 2023",
    comments: [
      { user: "user_nine", text: "Nemo enim ipsam voluptatem." },
    ],
  },
  {
    id: "6",
    image: "https://placehold.co/600x600/2d1b69/ffffff?text=Post+6",
    alt: "Post placeholder 6",
    likes: 342,
    caption: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    tags: ["#AdClubTVM", "#Community"],
    date: "October 2023",
    comments: [
      { user: "user_ten", text: "Ut labore et dolore magnam." },
      { user: "user_eleven", text: "Aliquam quaerat voluptatem!" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  );
}

function EllipsisIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
  );
}

// ─── Single Instagram Post Card ───────────────────────────────────────────────

function InstagramCard({ post, index }: { post: Post; index: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const displayedComments = showAllComments ? post.comments : post.comments.slice(0, 1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="bg-paper border border-rule w-full max-w-[468px] mx-auto"
      style={{ fontFamily: "var(--font-body, system-ui, sans-serif)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-rule">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-ink ring-offset-2 ring-offset-paper">
            <img src={AVATAR} alt={HANDLE} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold text-ink tracking-tight">
              {HANDLE}
            </span>
            <span className="text-[11px] text-mid mt-0.5">{post.date}</span>
          </div>
        </div>
        <button className="text-mid hover:text-ink transition-colors">
          <EllipsisIcon />
        </button>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-rule">
        <img
          src={post.image}
          alt={post.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        <div className="flex items-center gap-3.5">
          {/* Like */}
          <motion.button
            onClick={() => setLiked((v) => !v)}
            whileTap={{ scale: 0.82 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`transition-colors ${liked ? "text-rose-500" : "text-ink hover:text-mid"}`}
            aria-label="Like"
          >
            <HeartIcon filled={liked} />
          </motion.button>

          {/* Comment */}
          <button className="text-ink hover:text-mid transition-colors" aria-label="Comment">
            <CommentIcon />
          </button>

          {/* Share */}
          <button className="text-ink hover:text-mid transition-colors" aria-label="Share">
            <ShareIcon />
          </button>
        </div>

        {/* Bookmark */}
        <motion.button
          onClick={() => setSaved((v) => !v)}
          whileTap={{ scale: 0.82 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`transition-colors ${saved ? "text-ink" : "text-ink hover:text-mid"}`}
          aria-label="Save"
        >
          <BookmarkIcon />
        </motion.button>
      </div>

      {/* Likes count */}
      <div className="px-3 py-1">
        <span className="text-[13px] font-semibold text-ink">
          {(post.likes + (liked ? 1 : 0)).toLocaleString()} likes
        </span>
      </div>

      {/* Caption */}
      <div className="px-3 pb-2">
        <p className="text-[13px] text-ink leading-relaxed">
          <span className="font-semibold mr-1.5">{HANDLE}</span>
          {expanded || post.caption.length < 100
            ? post.caption
            : post.caption.slice(0, 100) + "…"}
          {post.caption.length >= 100 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-mid ml-1 text-[12px] hover:text-ink transition-colors"
            >
              {expanded ? "less" : "more"}
            </button>
          )}
        </p>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[12px] text-blue-500/80">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className="px-3 pb-2 space-y-1">
        {post.comments.length > 1 && !showAllComments && (
          <button
            onClick={() => setShowAllComments(true)}
            className="text-[12px] text-mid hover:text-ink transition-colors block"
          >
            View all {post.comments.length} comments
          </button>
        )}
        {displayedComments.map((c) => (
          <p key={c.user} className="text-[13px] text-ink">
            <span className="font-semibold mr-1.5">{c.user}</span>
            {c.text}
          </p>
        ))}
      </div>

      {/* Add a comment */}
      <div className="flex items-center gap-2 px-3 py-3 border-t border-rule">
        <div className="w-6 h-6 rounded-full overflow-hidden bg-rule shrink-0" />
        <input
          type="text"
          placeholder="Add a comment…"
          className="flex-1 text-[13px] text-ink bg-transparent placeholder:text-mid outline-none"
          readOnly
          onFocus={(e) => e.target.blur()}
        />
        <span className="text-[12px] font-semibold text-blue-400/70 cursor-default select-none">Post</span>
      </div>
    </motion.article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Instagram() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax background elements
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

      // Hero Text Stagger Intro
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

  return (
    <main
      ref={container}
      className="min-h-screen bg-paper text-black overflow-x-hidden font-body selection:bg-yellow selection:text-black pt-20"
    >
      {/* ── 1. HERO HEADER ── */}
      <section className="hero-section min-h-screen px-6 md:px-16 pt-32 pb-24 relative flex flex-col items-center justify-center text-center">
        {/* Wavy lines / Grid Backgrounds from Figma */}
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

          {/* Left Grid */}
          <img
            src="/SVG/grid.svg"
            alt=""
            className="parallax-fast absolute top-4 left-0 h-[60%] md:h-[70%] object-contain -ml-[5%] lg:-ml-[10%]"
          />
          {/* Right Grid */}
          <img
            src="/SVG/grid-2.svg"
            alt=""
            className="parallax-fast absolute top-4 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
          {/* Bottom Right Grid */}
          <img
            src="/SVG/grid-3.svg"
            alt=""
            className="parallax-fast absolute bottom-0 right-0 h-[40%] md:h-[50%] object-contain -mr-[5%] lg:-mr-[10%]"
          />
        </div>

        <div className="relative z-10 max-w-5xl flex flex-col items-center gap-8">
          <div className="hero-text inline-block border-2 border-black/20 rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest text-black/60 shadow-sm">
            @{HANDLE}
          </div>

          <h1 className="hero-text font-display font-bold text-[clamp(3.5rem,8.5vw,6rem)] leading-[0.9] tracking-tight uppercase">
            <span className="text-yellow">Instagram</span>
          </h1>

          <p className="hero-text font-body text-xl md:text-2xl text-black/70 max-w-2xl leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Feed */}
      <section className="py-12 px-4">
        <div className="flex flex-col gap-8 items-center">
          {posts.map((post, i) => (
            <InstagramCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 pb-4"
        >
          <p className="text-xs text-mid font-body tracking-widest uppercase mb-3">
            See more on Instagram
          </p>
          <a
            href={`https://www.instagram.com/${HANDLE}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-body text-ink border border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-all duration-200"
          >
            Follow @{HANDLE}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
