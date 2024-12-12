import React from 'react';

const testimonials = [
  {
    quote: "Vektrus transformed our social media strategy, increasing engagement by 200% in 3 months.",
    author: "John Doe",
    position: "Marketing Manager",
    company: "TechCorp"
  },
  {
    quote: "The AI-driven insights have been invaluable for our content strategy. We've seen remarkable growth.",
    author: "Sarah Smith",
    position: "Social Media Director",
    company: "InnovateLabs"
  },
  {
    quote: "Implementation was seamless, and the results were immediate. Our ROI has never been better.",
    author: "Michael Chen",
    position: "Digital Marketing Lead",
    company: "FutureScale"
  }
];

const SuccessStories = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-16">
          Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-teal-400/20 hover:scale-105 transition-transform duration-300 hover:border-teal-400"
            >
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-4">
                <p className="text-teal-400 font-semibold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;