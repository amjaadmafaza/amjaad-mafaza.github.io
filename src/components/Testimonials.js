import React from 'react';

function TestimonialCard({ text, author, role, index }) {
  return (
    <div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <p className="text-gray-300 mb-4">"{text}"</p>
      <p className="text-yellow-400 font-semibold">{author}</p>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "aku ingin kamu bekerja di tempat saya.",
      author: "Jane Doe",
      role: "CEO, Azure"
    },
    {
      text: "Bagus banget hasilnya, mari kerja di microsoft.",
      author: "John Smith",
      role: "Project Manager, Microsoft"
    },
    // Tambahkan testimonial lainnya...
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          data-aos="fade-up"
        >
          Testimonial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;