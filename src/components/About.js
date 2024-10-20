import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center" data-aos="fade-up">Tentang Saya</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 w-full">
          <div className="w-full md:w-1/3" data-aos="fade-right">
            <img src="https://cdn.discordapp.com/attachments/1140684662096810166/1258388147486593064/SUKOWATI_STORE_Logo_-_White_with_Black_Background_-_5000x5000.png?ex=6714448a&is=6712f30a&hm=9119833a5c97bdae3c7bd7066808555047ffca86079f7bdca8ed77aeb3003500&" alt="Foto Profil" className="rounded-full mx-auto border-6 border-yellow-400 w-40 h-40 sm:w-48 sm:h-48 object-cover" />
          </div>
          <div className="w-full md:w-2/3" data-aos="fade-left">
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Saya adalah seorang web developer yang bersemangat dengan pengalaman dalam membuat aplikasi web yang menarik dan fungsional. Saya selalu berusaha untuk belajar teknologi baru dan meningkatkan keterampilan saya.
            </p>
            <p className="text-base sm:text-lg mb-4">
              Keahlian saya meliputi HTML, CSS, JavaScript, React, dan Node.js.
            </p>
            <p className="text-base sm:text-lg">
              Saya percaya bahwa pengembangan web bukan hanya tentang kode, tetapi juga tentang menciptakan pengalaman pengguna yang luar biasa. Saya selalu bersemangat untuk menghadapi tantangan baru dan berkontribusi pada proyek-proyek yang inovatif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;