import React from "react";
import { Award, Heart, Star, Sparkles, Moon, Sun } from "lucide-react";
import SacredGeometry from "../components/SacredGeometry";
import img4 from '../images/img4.JPG';


const AboutPage = () => {
  const certifications = [
    "Certified Professional Numerologist - International Numerology Association",
    "Advanced Sacred Geometry Studies - Metaphysical Academy",
    "Spiritual Life Coaching Certification",
    "Crystal Healing and Energy Work Level II",
  ];

  const milestones = [
    {
      year: "2018",
      event: "Discovered numerology during personal spiritual awakening",
    },
    {
      year: "2019",
      event: "Completed first professional numerology certification",
    },
    { year: "2020", event: "Started offering private consultations" },
    { year: "2021", event: "Conducted first numerology workshop series" },
    { year: "2022", event: "Featured in Spiritual Living Magazine" },
    { year: "2023", event: "Launched online numerology course platform" },
    { year: "2024", event: "Over 1000 successful consultations completed" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Journey to the
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent block">
              Sacred Numbers
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From a curious seeker to a dedicated guide, discover how numerology
            transformed my life and ignited my passion for helping others find
            their cosmic purpose.
          </p>
        </div>

        {/* My Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative overflow-hidden">
                <SacredGeometry
                  className="absolute -top-4 -right-4 text-accent-400"
                  size="md"
                />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Heart className="h-8 w-8 text-pink-400 mr-3" />
                    <h2 className="text-3xl font-bold text-white">My Story</h2>
                  </div>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      My journey into numerology began during a profound
                      spiritual awakening in 2022. After experiencing a series
                      of synchronicities involving repeating numbers, I felt
                      drawn to understand their deeper meaning.
                    </p>
                    <p>
                      What started as personal curiosity quickly blossomed into
                      a passionate calling. I discovered that numbers weren't
                      just mathematical symbols—they were gateways to
                      understanding the cosmic patterns that govern our lives.
                    </p>
                    <p>
                      Through years of study, practice, and personal
                      transformation, I've learned that numerology is both an
                      ancient wisdom tradition and a practical tool for modern
                      spiritual growth. Each consultation deepens my
                      appreciation for the profound intelligence woven into the
                      fabric of existence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-3xl p-8 backdrop-blur-md border border-white/20">
                <img
                  src="images/img4.jpg"
                  alt="Spiritual numerology consultation"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-900/50 to-transparent rounded-3xl"></div>
                <SacredGeometry className="absolute bottom-4 right-4 text-secondary-400" size="sm" />
              </div>
            </div> */}
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-3xl p-8 backdrop-blur-md border border-white/20 relative">
                <img
                  src={img4}
                  alt="Spiritual numerology consultation"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-900/50 to-transparent rounded-3xl"></div>

                {/* Sacred geometry element */}
                <SacredGeometry
                  className="absolute bottom-4 right-4 text-secondary-400"
                  size="sm"
                />

                {/* Signature name below image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <p className="text-accent-400 text-2xl italic font-[Great_Vibes,cursive] drop-shadow-lg">
                    Shilpa A. Jain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach & Beliefs */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Sun className="h-8 w-8 text-accent-400 mr-3 animate-twinkle" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  My Approach
                </h2>
                <Moon className="h-8 w-8 text-primary-400 ml-3 animate-float" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in-up">
                <Sparkles className="h-12 w-12 text-accent-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Intuitive & Compassionate
                </h3>
                <p className="text-white/80">
                  I believe numerology is both a science and an art. While I
                  rely on precise calculations, I also trust my intuition to
                  provide insights that resonate deeply with your soul's
                  journey.
                </p>
              </div>

              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Star className="h-12 w-12 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Empowering & Practical
                </h3>
                <p className="text-white/80">
                  My goal is not just to share insights, but to empower you with
                  practical tools and understanding that you can apply in your
                  daily life for continued growth and alignment.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-white/90 italic max-w-3xl mx-auto">
                "Every soul carries a unique numerical signature that reveals
                their purpose, challenges, and gifts. My role is to help you
                decode this cosmic blueprint and step into your highest
                potential."
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Certifications & Training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white/90">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Journey Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-400 to-primary-400"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-accent-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-white/90">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-accent-400 rounded-full border-2 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
