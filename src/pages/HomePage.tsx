import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, User, Star, Sparkles, Moon } from "lucide-react";
import SacredGeometry from "../components/SacredGeometry";
import img3 from '../images/img3.jpg';

const HomePage = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      text: "The numerology reading completely transformed my understanding of my life path. Amazing insights!",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      text: "Professional, accurate, and deeply spiritual. I found clarity I never thought possible.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      text: "The session exceeded all my expectations. I feel more aligned with my true purpose now.",
      rating: 5,
    },
  ];

  const blogPreviews = [
    {
      title: "Understanding Your Life Path Number",
      excerpt:
        "Discover how your birth date reveals your soul's journey and purpose in this lifetime...",
      date: "2024-01-15",
    },
    {
      title: "The Power of Master Numbers 11, 22, and 33",
      excerpt:
        "Explore the heightened spiritual significance of these powerful double-digit numbers...",
      date: "2024-01-10",
    },
    {
      title: "Numerology and Career Guidance",
      excerpt:
        "Learn how your personal numbers can guide you toward your ideal professional path...",
      date: "2024-01-05",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <SacredGeometry
          className="absolute top-10 right-10 text-accent-400"
          size="lg"
        />
        <SacredGeometry
          className="absolute bottom-20 left-10 text-primary-400"
          size="md"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Unlock Your
              <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent block">
                Cosmic Blueprint
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the sacred wisdom hidden in your numbers. Transform your
              life through the ancient art of numerology.
            </p>

            {/* Mission Statement */}
            {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-accent-400 mr-2" />
                <h2 className="text-2xl font-semibold text-white">My Mission</h2>
                <Sparkles className="h-6 w-6 text-accent-400 ml-2" />
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                To guide souls on their journey of self-discovery through the profound wisdom of numerology. 
                I believe every number carries divine energy, and by understanding your personal numerological blueprint, 
                you can align with your highest purpose and create a life of meaning, abundance, and spiritual fulfillment.
              </p>
            </div> */}

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-white/20">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Image */}
                <img
                  src={img3}
                  alt="Sacred Numerology"
                  className="w-full md:w-1/3 rounded-xl shadow-lg object-cover"
                />

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-accent-400 mr-2" />
                    <h2 className="text-2xl font-semibold text-white text-center">
                      My Mission
                    </h2>
                    <Sparkles className="h-6 w-6 text-accent-400 ml-2" />
                  </div>

                  <p className="text-white/90 text-lg leading-relaxed text-center animate-slide-in">
                    To guide souls on their journey of self-discovery through
                    the profound wisdom of numerology. I believe every number
                    carries divine energy, and by understanding your personal
                    numerological blueprint, you can align with your highest
                    purpose and create a life of meaning, abundance, and
                    spiritual fulfillment.
                  </p>

                  {/* Signature */}
                  <p className="mt-6 text-accent-400 text-center font-bold text-3xl font-[ArrusBT]">
                    Shilpa A. Jain
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/booking"
                className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-accent-500/30 flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
                <Star className="ml-2 h-5 w-5 group-hover:animate-twinkle" />
              </Link>

              <Link
                to="/about"
                className="group bg-primary-500/20 backdrop-blur-sm hover:bg-primary-500/30 text-white border border-primary-400/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <User className="mr-2 h-5 w-5" />
                Explore My Journey
              </Link>

              <Link
                to="/blog"
                className="group bg-secondary-500/20 backdrop-blur-sm hover:bg-secondary-500/30 text-white border border-secondary-400/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Your Path
                <Moon className="ml-2 h-4 w-4 group-hover:animate-float" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-accent-300 font-semibold">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreviews.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent-300 text-sm">{post.date}</span>
                  <Link
                    to="/blog"
                    className="text-accent-400 hover:text-accent-300 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
