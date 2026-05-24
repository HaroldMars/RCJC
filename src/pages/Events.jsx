import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Background from "../assets/eventslogo.jpg";
import Logo from "../assets/logo.png";
import "aos/dist/aos.css";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
import Youth from "../assets/Youth.jfif";
import Community from "../assets/Community.jfif";
import AOS from "aos";
AOS.init();

export default function Events() {
  const [scrollY, setScrollY] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gallery images array
  const galleryImages = [
    { id: 1, src: Youth, alt: "Youth Summer Camp 2026 - Day 1" },
    { id: 2, src: Community, alt: "Youth Summer Camp 2026 - Day 2" },
    { id: 3, src: Youth, alt: "Youth Summer Camp 2026 - Day 3" },
    { id: 4, src: Community, alt: "Youth Summer Camp 2026 - Day 4" },
    { id: 5, src: Youth, alt: "Youth Summer Camp 2026 - Day 5" },
    { id: 6, src: Community, alt: "Youth Summer Camp 2026 - Day 6" },
    { id: 7, src: Youth, alt: "Youth Summer Camp 2026 - Activities" },
    { id: 8, src: Community, alt: "Youth Summer Camp 2026 - Team" },
    { id: 9, src: Youth, alt: "Youth Summer Camp 2026 - Fun Times" },
    { id: 10, src: Community, alt: "Youth Summer Camp 2026 - Closing" },
    { id: 11, src: Youth, alt: "Youth Summer Camp 2026 - Memories" },
    { id: 12, src: Community, alt: "Youth Summer Camp 2026 - Highlights" },
    { id: 13, src: Youth, alt: "Youth Summer Camp 2026 - Group Photo" },
  ];

  // Post event stories with images
  const eventPosts = [
    {
      id: 1,
      image: Youth,
      title: "Day 1: Opening Ceremony",
      description:
        "Our Youth Summer Camp 2026 kicked off with an exciting opening ceremony! Participants gathered to meet fellow campers and counselors, participated in icebreaker activities, and set the tone for an unforgettable week. The energy and enthusiasm were incredible as everyone shared their expectations for the camp.",
    },
    {
      id: 2,
      image: Community,
      title: "Day 2-3: Team Building & Activities",
      description:
        "The campers engaged in thrilling team-building activities including outdoor adventures, creative workshops, and interactive games. These activities fostered friendship, teamwork, and personal growth. Participants learned valuable life skills while having an amazing time with their new friends.",
    },
    {
      id: 3,
      image: Youth,
      title: "Mid-Week: Skill Development",
      description:
        "This week focused on developing practical skills through hands-on workshops and mentoring sessions. Campers participated in leadership training, public speaking sessions, and various skill-building activities. The instructors provided valuable guidance to help each participant grow and build confidence.",
    },
    {
      id: 4,
      image: Community,
      title: "Closing: Reflections & Memories",
      description:
        "As the camp concluded, campers reflected on their experiences and celebrated the friendships they've made. The closing ceremony featured highlights from the week, award presentations, and heartfelt goodbyes. Participants left with unforgettable memories and lasting connections with peers from the community.",
    },
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="nav-text bg-blue-100 w-screen h-fit font-Roboto text-black">
      <Header />

      {/* PARALLAX HERO SECTION */}
      <div
        className="relative h-80 md:h-96 lg:h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Parallax overlay */}
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: "transform",
          }}
        >
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
              EVENTS
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md mt-4">
              Youth Summer Camp 2026 Highlights
            </p>
          </div>
        </div>
      </div>

      {/* EVENT POSTS SECTION - 4 IMAGES WITH DESCRIPTIONS */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Event Recap
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {eventPosts.map((post, index) => (
              <div
                key={post.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-semibold">Click gallery for more</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {post.description}
                    </p>
                    <button
                      onClick={() => openLightbox(index)}
                      className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FANCY MASONRY GALLERY SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Explore all the amazing moments from Youth Summer Camp 2026
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Masonry Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max"
            style={{
              gridAutoFlow: "dense",
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  index % 5 === 0 || index % 5 === 4
                    ? "lg:col-span-2 lg:row-span-2"
                    : ""
                }`}
                onClick={() => openLightbox(index)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{
                    minHeight: index % 5 === 0 || index % 5 === 4 ? "400px" : "250px",
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                  <div className="text-white text-right">
                    <p className="text-sm font-semibold mb-2">{image.alt}</p>
                    <div className="flex items-center gap-2 justify-end">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.343 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.343 5.343a1 1 0 011.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM10 13a3 3 0 110-6 3 3 0 010 6z" />
                      </svg>
                      <span className="text-xs">Click to expand</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-60"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main image */}
          <div
            className="relative max-w-4xl w-full mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="text-center mt-6 text-white">
              <p className="text-lg font-semibold mb-4">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>

              {/* Thumbnail strip */}
              <div className="flex justify-center gap-2 overflow-x-auto pb-4 max-w-full">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(idx);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === lightboxIndex
                        ? "border-green-500 scale-110"
                        : "border-gray-500 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-content">
          <div className="connect-text">connect with us</div>
          <div className="links">
            <a
              href="https://www.facebook.com/rcjcim"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <img src={fb} alt="Facebook" className="icon" />
              <span className="link-text">/rcjcim</span>
            </a>
            <a href="mailto:rcjcim2003@gmail.com" className="link">
              <img src={Gmail} alt="Email" className="icon" />
              <span className="link-text">rcjcim2003@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="copyright">RCJCIM | 2025</div>
      </div>
    </div>
  );
}
