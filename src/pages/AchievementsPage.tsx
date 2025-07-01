import React from 'react';
import { Award, Users, Star, Calendar, Camera, Quote, ExternalLink } from 'lucide-react';
import SacredGeometry from '../components/SacredGeometry';

const AchievementsPage = () => {
  const achievements = [
    {
      year: '2024',
      title: 'Master Numerologist Certification',
      description: 'Achieved the highest level of certification from the International Numerology Council',
      image: 'https://images.pexels.com/photos/6348124/pexels-photo-6348124.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2023',
      title: 'Spiritual Living Magazine Feature',
      description: 'Featured as "Rising Star in Modern Numerology" with a 6-page interview and profile',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2023',
      title: 'Numerology Workshop Series',
      description: 'Successfully conducted 12 sold-out workshops across California, reaching over 500 participants',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2022',
      title: '1000+ Successful Consultations',
      description: 'Milestone of completing over 1000 personal numerology readings with 98% satisfaction rate',
      image: 'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The numerology reading completely transformed my understanding of my life path. I finally found the clarity I was searching for about my business direction and personal relationships.',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Life Coach',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Professional, accurate, and deeply spiritual. The insights I received have helped me better understand my clients and my own coaching approach. Truly remarkable work.',
      rating: 5,
      location: 'Los Angeles, CA'
    },
    {
      name: 'Emma Thompson',
      role: 'Artist & Writer',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'I was skeptical at first, but the reading exceeded all my expectations. The accuracy was uncanny, and I feel more aligned with my creative purpose than ever before.',
      rating: 5,
      location: 'New York, NY'
    },
    {
      name: 'David Park',
      role: 'Tech Executive',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'As someone who values logic and data, I was amazed by how the numerical patterns revealed such profound truths about my career path and personal growth.',
      rating: 5,
      location: 'Seattle, WA'
    },
    {
      name: 'Maria Santos',
      role: 'Wellness Practitioner',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The relationship compatibility reading saved my marriage. We now understand each other on a much deeper level. Thank you for this incredible gift of insight.',
      rating: 5,
      location: 'Miami, FL'
    },
    {
      name: 'James Wilson',
      role: 'Musician',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The career guidance session helped me understand why certain musical paths felt right while others didn\'t. My music has reached new depths since our session.',
      rating: 5,
      location: 'Nashville, TN'
    }
  ];

  const stats = [
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: '5+', label: 'Workshops Conducted', icon: Calendar },
    { number: '3', label: 'Years Experience', icon: Award }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements &
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent block">
              Client Love
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Celebrating milestones, recognitions, and the incredible transformations 
            experienced by souls on their numerological journey.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-12 w-12 text-accent-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Achievements
            </h2>
          </div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative overflow-hidden">
                    <SacredGeometry className="absolute -top-4 -right-4 text-accent-400" size="sm" />
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <Award className="h-8 w-8 text-accent-400 mr-3" />
                        <span className="text-accent-400 font-bold text-xl">{achievement.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{achievement.title}</h3>
                      <p className="text-white/90 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mystic-900/50 to-transparent rounded-2xl"></div>
                    <Camera className="absolute bottom-4 right-4 h-6 w-6 text-white/70" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Client Testimonials
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Real stories from souls who have discovered their cosmic blueprint and transformed their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-400/50"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-accent-300">{testimonial.role}</p>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                  <Quote className="h-8 w-8 text-accent-400/50" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-400 fill-current" />
                  ))}
                </div>

                <p className="text-white/90 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* CTA for more testimonials */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              View More Testimonials
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AchievementsPage;