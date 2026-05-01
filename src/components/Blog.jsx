import {
  Search,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  User,
  Tag,
  TrendingUp,
  BookOpen,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

  const [Categories] = useState([
    { id: "all", label: "All Stories", count: 24 },
    { id: "wellness", label: "Wellness", count: 8 },
    { id: "skincare", label: "Skincare", count: 6 },
    { id: "rituals", label: "Rituals", count: 5 },
    { id: "mindfulness", label: "Mindfulness", count: 5 },
  ]);

  const [Featured] = useState({
    id: 1,
    category: "wellness",
    categoryLabel: "Wellness",
    title: "The Quiet Science of Slow Living",
    excerpt:
      "We spend so much of our lives chasing the next moment that we forget the one we're in. Here's what twelve years of guiding guests has taught us about reclaiming time — and why it changes everything.",
    author: "Tania Mareli",
    authorImg: "/images/webp/user1.webp",
    authorRole: "Founder",
    date: "April 28, 2024",
    readTime: "8 min read",
    img: "/images/webp/mas5.webp",
  });

  const [Posts] = useState([
    {
      id: 2,
      category: "skincare",
      categoryLabel: "Skincare",
      title: "Why Your Skin Needs Less, Not More",
      excerpt:
        "The minimalist routine that transformed our most loyal guests' complexions — and why expensive serums might be the problem, not the solution.",
      author: "Chris James",
      authorImg: "/images/webp/user2.webp",
      date: "April 22, 2024",
      readTime: "6 min read",
      img: "/images/webp/mas7.webp",
      trending: true,
    },
    {
      id: 3,
      category: "rituals",
      categoryLabel: "Rituals",
      title: "Hot Stones, Ancient Roots",
      excerpt:
        "From Hawaiian volcanic traditions to modern therapy rooms — the surprising journey of one of our most-requested treatments.",
      author: "Goslin Mane",
      authorImg: "/images/webp/user3.webp",
      date: "April 18, 2024",
      readTime: "5 min read",
      img: "/images/webp/mas9.webp",
      trending: false,
    },
    {
      id: 4,
      category: "mindfulness",
      categoryLabel: "Mindfulness",
      title: "Five Minutes of Stillness Beats an Hour of Sleep",
      excerpt:
        "A controversial claim from our wellness consultant — backed by guests who've quietly redesigned their mornings.",
      author: "Tania Mareli",
      authorImg: "/images/webp/user1.webp",
      date: "April 14, 2024",
      readTime: "4 min read",
      img: "/images/webp/mas10.webp",
      trending: true,
    },
    {
      id: 5,
      category: "wellness",
      categoryLabel: "Wellness",
      title: "The Body Keeps Score — And So Should You",
      excerpt:
        "Why journaling your treatments matters more than you think, and how to start a wellness diary that actually sticks.",
      author: "Alex Hormozi",
      authorImg: "/images/webp/user1.webp",
      date: "April 10, 2024",
      readTime: "7 min read",
      img: "/images/webp/mas2.webp",
      trending: false,
    },
    {
      id: 6,
      category: "rituals",
      categoryLabel: "Rituals",
      title: "Aromatherapy: Beyond the Scented Candle",
      excerpt:
        "What makes therapeutic-grade essential oils worth the difference — explained by someone who almost didn't believe it either.",
      author: "Chris James",
      authorImg: "/images/webp/user2.webp",
      date: "April 5, 2024",
      readTime: "6 min read",
      img: "/images/webp/mas6.webp",
      trending: false,
    },
    {
      id: 7,
      category: "skincare",
      categoryLabel: "Skincare",
      title: "Reading Your Skin Like a Map",
      excerpt:
        "What different skin reactions are trying to tell you — and the simple shifts that fix them faster than products ever will.",
      author: "Goslin Mane",
      authorImg: "/images/webp/user3.webp",
      date: "March 30, 2024",
      readTime: "5 min read",
      img: "/images/webp/mas1.webp",
      trending: false,
    },
    {
      id: 8,
      category: "mindfulness",
      categoryLabel: "Mindfulness",
      title: "The Pause Between Breaths",
      excerpt:
        "An ancient breathing practice that's taken our guests by surprise — and the science of why it works in under two minutes.",
      author: "Tania Mareli",
      authorImg: "/images/webp/user1.webp",
      date: "March 25, 2024",
      readTime: "4 min read",
      img: "/images/webp/mas12.webp",
      trending: false,
    },
    {
      id: 9,
      category: "wellness",
      categoryLabel: "Wellness",
      title: "When Recovery Becomes a Practice",
      excerpt:
        "Athletes, busy parents, and burnt-out professionals all share one thing — and it's not what you'd expect.",
      author: "Alex Hormozi",
      authorImg: "/images/webp/user1.webp",
      date: "March 20, 2024",
      readTime: "8 min read",
      img: "/images/webp/mas4.webp",
      trending: true,
    },
  ]);

  const [PopularTags] = useState([
    "Self-Care",
    "Massage Therapy",
    "Skincare Tips",
    "Meditation",
    "Aromatherapy",
    "Recovery",
    "Sleep",
    "Stress Relief",
    "Detox",
    "Beginner Guides",
  ]);

  const filteredPosts = Posts.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingPosts = Posts.filter((p) => p.trending).slice(0, 3);

  return (
    <>
      {/* Editorial header */}
      <section className="w-full pt-[60px] pb-[40px] flex justify-center">
        <div className="w-[90%] flex flex-col gap-y-6">
          <div className="flex items-center gap-x-3">
            <BookOpen size={16} strokeWidth={2} color="#dc2626" />
            <p className="text-red-600 font-semibold uppercase text-xs tracking-[0.2em]">
              The Tania Journal
            </p>
          </div>
          <div className="flex xl:flex-row md:flex-row flex-col gap-x-10 gap-y-6 items-end justify-between">
            <h1 className="font-bold xl:text-7xl md:text-5xl text-4xl leading-[1] max-w-[800px] tracking-tight">
              Notes on
              <br />
              <span className="italic text-red-600">slowing down,</span>
              <br />
              one read at a time.
            </h1>
            <p className="text-black/60 max-w-[350px] xl:text-[15px] text-[14px] leading-relaxed">
              Stories, science, and quiet observations from our therapists,
              founders, and the guests who walk through our doors.
            </p>
          </div>
          <div className="h-[1px] w-full bg-black/10 mt-4" />
        </div>
      </section>

      {/* Featured post — full-width editorial spread */}
      <section className="w-full pb-[60px] flex justify-center">
        <div className="w-[90%]">
          <Link
            to=""
            className="group flex xl:flex-row md:flex-row flex-col gap-x-8 gap-y-5 cursor-pointer"
          >
            <div className="xl:w-[55%] md:w-[50%] w-full xl:h-[28em] md:h-[24em] h-[16em] rounded-2xl overflow-hidden relative">
              <img
                src={Featured.img}
                alt={Featured.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
              />
              <span className="absolute top-5 left-5 bg-white text-red-600 text-[11px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                Featured · {Featured.categoryLabel}
              </span>
            </div>
            <div className="xl:w-[45%] md:w-[50%] w-full flex flex-col justify-center gap-y-4">
              <div className="flex items-center gap-x-3 text-black/50 text-[12px]">
                <span className="flex items-center gap-x-1">
                  <Calendar size={12} strokeWidth={2} />
                  {Featured.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-x-1">
                  <Clock size={12} strokeWidth={2} />
                  {Featured.readTime}
                </span>
              </div>
              <h2 className="font-bold xl:text-5xl md:text-4xl text-3xl leading-[1.1] tracking-tight group-hover:text-red-600 transition duration-300">
                {Featured.title}
              </h2>
              <p className="text-black/70 xl:text-[16px] text-[14px] leading-relaxed">
                {Featured.excerpt}
              </p>
              <div className="flex items-center gap-x-3 pt-3 border-t border-black/10 mt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={Featured.authorImg}
                    alt={Featured.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[14px]">{Featured.author}</p>
                  <p className="text-black/50 text-[12px]">
                    {Featured.authorRole}
                  </p>
                </div>
                <span className="text-red-600 font-semibold text-[13px] flex items-center gap-x-1 group-hover:gap-x-2 transition-all duration-300">
                  Read story
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover:rotate-45 transition duration-300"
                  />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter strip — sticky-feeling toolbar */}
      <section className="w-full py-[20px] flex justify-center bg-[#faf7f5] border-y border-black/5">
        <div className="w-[90%] flex xl:flex-row md:flex-row flex-col-reverse gap-x-6 gap-y-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 xl:justify-start md:justify-start justify-center">
            {Categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-x-2 px-4 py-2 rounded-full text-[12px] font-semibold uppercase tracking-wider transition duration-300 ${
                  activeCategory === cat.id
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-white text-black/70 hover:bg-black hover:text-white"
                }`}
              >
                {cat.label}
                <span
                  className={`text-[10px] ${
                    activeCategory === cat.id
                      ? "text-white/70"
                      : "text-black/40"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
          <div className="relative w-full xl:w-[280px] md:w-[280px]">
            <Search
              size={16}
              strokeWidth={2}
              color="#999"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border-2 border-transparent focus:border-red-500 focus:outline-none text-[13px] transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Main grid + sidebar */}
      <section className="w-full py-[60px] flex justify-center">
        <div className="w-[90%] flex xl:flex-row gap-x-10 gap-y-10 flex-col">
          {/* Article grid */}
          <div className="xl:w-[70%] w-full">
            {filteredPosts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-black/60 italic text-[15px]">
                  No articles match your search. Try a different keyword or
                  category.
                </p>
              </div>
            ) : (
              <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
                {filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                    className="group cursor-pointer flex flex-col gap-y-4"
                  >
                    <Link to="" className="block">
                      <div className="w-full xl:h-[15em] md:h-[14em] h-[14em] rounded-xl overflow-hidden relative mb-4">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-red-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                          {post.categoryLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-x-3 text-black/50 text-[11px] mb-2">
                        <span className="flex items-center gap-x-1">
                          <Calendar size={11} strokeWidth={2} />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-x-1">
                          <Clock size={11} strokeWidth={2} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold xl:text-2xl text-xl leading-tight tracking-tight group-hover:text-red-600 transition duration-300 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-black/70 text-[14px] leading-relaxed line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-x-2 pt-3 border-t border-black/10">
                        <div className="w-7 h-7 rounded-full overflow-hidden">
                          <img
                            src={post.authorImg}
                            alt={post.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[12px] font-medium text-black/70">
                          {post.author}
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-12">
                <Link
                  to=""
                  className="bg-red-600 hover:bg-black transition duration-300 text-white px-7 py-3 rounded-full text-[13px] font-semibold flex items-center gap-x-2 group"
                >
                  Load more articles
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition duration-300"
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="xl:w-[30%] w-full flex flex-col gap-y-10">
            {/* Newsletter */}
            <div className="bg-black text-white p-6 rounded-2xl flex flex-col gap-y-4">
              <Mail size={28} strokeWidth={1.5} color="#dc2626" />
              <h3 className="font-bold text-xl leading-tight">
                Quiet reads, every Sunday morning.
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed">
                Our weekly letter. One thoughtful piece, no noise, no marketing.
                Unsubscribe anytime.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white/10 border-2 border-white/10 focus:border-red-500 focus:outline-none text-[13px] text-white placeholder:text-white/40 transition duration-300"
              />
              <button className="bg-red-600 hover:bg-white hover:text-red-600 transition duration-300 text-white px-5 py-3 rounded-full text-[13px] font-semibold">
                Subscribe
              </button>
            </div>

            {/* Trending */}
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-2">
                <TrendingUp size={16} strokeWidth={2.5} color="#dc2626" />
                <p className="text-red-600 font-semibold uppercase text-xs tracking-[0.2em]">
                  Trending Now
                </p>
              </div>
              {trendingPosts.map((post, i) => (
                <Link
                  key={post.id}
                  to=""
                  className="group flex gap-x-4 cursor-pointer"
                >
                  <span className="font-bold xl:text-3xl text-2xl text-red-600/30 group-hover:text-red-600 transition duration-300 flex-shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-y-1 flex-1 border-b border-black/10 pb-4">
                    <p className="text-[10px] uppercase tracking-wider text-black/50 font-semibold">
                      {post.categoryLabel}
                    </p>
                    <h4 className="font-semibold text-[14px] leading-snug group-hover:text-red-600 transition duration-300">
                      {post.title}
                    </h4>
                    <p className="text-black/50 text-[11px]">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <Tag size={14} strokeWidth={2.5} color="#dc2626" />
                <p className="text-red-600 font-semibold uppercase text-xs tracking-[0.2em]">
                  Popular Tags
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {PopularTags.map((tag, i) => (
                  <Link
                    key={i}
                    to=""
                    className="bg-[#faf7f5] hover:bg-red-600 hover:text-white transition duration-300 text-black/70 px-3 py-1 rounded-full text-[12px] border border-black/10 hover:border-red-600"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* About author teaser */}
            <div className="bg-[#faf7f5] p-6 rounded-2xl flex flex-col items-start gap-y-3">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="/images/webp/user1.webp"
                  alt="Tania"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[15px]">Written from the spa.</p>
                <p className="text-black/60 text-[12px] mt-1">
                  Tania Mareli & our team of therapists
                </p>
              </div>
              <p className="text-black/70 text-[13px] leading-relaxed">
                Every piece on this journal is written by someone who works in
                our rooms — not a content team. Real practitioners, real
                stories.
              </p>
              <Link
                to=""
                className="text-red-600 font-semibold text-[12px] flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 mt-1"
              >
                Meet our team
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Closing — quiet, like a sign-off */}
      <section className="w-full py-[80px] flex justify-center bg-[#faf7f5]">
        <div className="w-[90%] xl:w-[60%] flex flex-col items-center gap-y-5 text-center">
          <p className="text-red-600 font-semibold uppercase text-xs tracking-[0.2em]">
            Closing Note
          </p>
          <h2 className="font-bold xl:text-4xl md:text-3xl text-2xl tracking-tight max-w-[600px] leading-[1.2]">
            Reading is rest, too.
          </h2>
          <p className="text-black/60 max-w-[450px] xl:text-[15px] text-[14px] leading-relaxed">
            Bookmark this page. Come back when life gets loud. We'll keep
            writing slowly, so you can read slowly.
          </p>
          <Link
            to=""
            className="text-red-600 font-semibold text-[13px] flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 mt-2 underline-offset-4 hover:underline"
          >
            Browse the full archive
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
