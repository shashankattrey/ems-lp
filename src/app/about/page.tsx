import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      {/* Our Story */}
      <section className="mb-8 mt-10">
        <h2 className="text-3xl font-bold text-[#6901b1] mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          EaseMyShoot was founded with a vision to simplify the process of finding and booking the perfect studio for various creative needs. Whether you are a photographer looking for a professional space, a filmmaker in need of a well-equipped location, or a content creator searching for an inspiring backdrop, EaseMyShoot provides a seamless solution to meet all your requirements.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The idea was born from personal experiences of struggling to find high-quality studio spaces that fit both budget and creative vision. Traditional methods involved long searches, multiple calls, and unnecessary hassles. We realized that the creative industry needed a platform that could make the booking process as easy as booking a hotel room. Thus, EaseMyShoot was created—a platform dedicated to bridging the gap between studio owners and artists, offering a curated list of premium studios for all types of productions.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#6901b1] mb-4">Our Mission</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            To <strong className="font-semibold">simplify</strong> the process of finding and booking creative spaces.
          </li>
          <li>
            To <strong className="font-semibold">empower</strong> artists, photographers, filmmakers, and content creators by providing them with a diverse range of studio options.
          </li>
          <li>
            To <strong className="font-semibold">support</strong> studio owners by giving them an effective platform to showcase their spaces to potential clients.
          </li>
          <li>
            To <strong className="font-semibold">enhance</strong> the creative industry by removing logistical hurdles and allowing talent to focus on their art.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          We believe that every creator deserves access to a professional space that aligns with their vision, and we strive to make this process effortless.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#6901b1] mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision EaseMyShoot becoming the <strong className="font-semibold">go-to platform</strong> for creative professionals seeking studios worldwide. Our goal is to build an ecosystem where:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Studios are easily accessible to anyone, regardless of their location.</li>
          <li>The booking process is <strong className="font-semibold">hassle-free, transparent, and efficient</strong>.</li>
          <li>Creators have access to premium facilities at competitive prices.</li>
          <li>The community of artists and studio owners can collaborate and grow together.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          We aim to set new industry standards in convenience and efficiency, making studio bookings as easy as a few clicks.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#6901b1] mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed">
          EaseMyShoot provides a wide range of <strong className="font-semibold">high-quality studios</strong> for various needs, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Dance Studios</h3>
            <p className="text-gray-700">Spacious and well-lit spaces for dance rehearsals, video shoots, and classes.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Photo Shoot Studios</h3>
            <p className="text-gray-700">Professional photography setups with controlled lighting, backdrops, and equipment.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Video Shoot Studios</h3>
            <p className="text-gray-700">Fully equipped video production spaces with state-of-the-art technology.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Podcast Studios</h3>
            <p className="text-gray-700">Soundproofed rooms designed for professional audio recordings and interviews.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800">Multifunctional Spaces</h3>
            <p className="text-gray-700">Versatile studios that can be customized for various creative projects.</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our user-friendly platform allows clients to browse, compare, and book studios in just a few steps, eliminating the frustration of traditional searches.
        </p>
      </section>

      {/* Why Choose EaseMyShoot? */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#6901b1] mb-4">Why Choose EaseMyShoot?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Wide Range of Studios</h3>
            <p className="text-gray-700">
              We collaborate with top-tier studio owners to provide a <strong className="font-semibold">diverse selection</strong> of spaces tailored to different creative needs. Whether you need a minimalist aesthetic or a high-tech production studio, we have it all.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Seamless Booking Experience</h3>
            <p className="text-gray-700">Forget endless phone calls and long negotiation processes. With EaseMyShoot, you can browse, book, and confirm your studio in just a few clicks.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Verified Listings</h3>
            <p className="text-gray-700">Every studio listed on our platform undergoes a strict verification process to ensure quality, authenticity, and reliability.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Affordable Pricing</h3>
            <p className="text-gray-700">We offer a range of pricing options, making it easier for both independent artists and large production teams to find a space that fits their budget.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
            <p className="text-gray-700">Our dedicated team is available to assist you at every step, ensuring a smooth and hassle-free booking experience.</p>
          </div>
          <div className="bg-white rounded-lg border border-[#f0d5ff] p-4">
            <h3 className="text-xl font-semibold text-gray-800">Community-Centric Approach</h3>
            <p className="text-gray-700">We are not just a booking platform; we are a community. Our aim is to foster collaborations between studio owners and creative professionals to promote growth in the industry.</p>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}


      {/* Our Values */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#6901b1] mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong className="font-semibold">Innovation:</strong> We continuously improve our platform to offer the best possible experience to our users.
          </li>
          <li>
            <strong className="font-semibold">Integrity:</strong> We believe in transparency, honesty, and ethical business practices.
          </li>
          <li>
            <strong className="font-semibold">Excellence:</strong> We strive to maintain the highest standards in our services and offerings.
          </li>
          <li>
            <strong className="font-semibold">Collaboration:</strong> We foster partnerships and encourage the creative community to grow together.
          </li>
          <li>
            <strong className="font-semibold">Customer-Centric Approach:</strong> Our users are at the heart of everything we do.
          </li>
        </ul>
      </section>

      {/* Join Us on Our Journey */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#6901b1] mb-4">Join Us on Our Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          EaseMyShoot is more than just a platform—it’s a <strong className="font-semibold">movement</strong> to revolutionize the creative industry. We invite you to be part of our journey, whether as a <strong className="font-semibold">studio owner</strong>, a <strong className="font-semibold">creative professional</strong>, or a <strong className="font-semibold">partner</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          If you’re looking for the perfect studio, browse our listings today. If you own a studio, join us and connect with potential clients. Together, we can make creativity effortless and accessible to all.
        </p>
      </section>

      {/* Get In Touch */}


      {/* Footer */}
      <footer className="text-center text-gray-600">
        <p>Thank you for choosing <strong className="font-semibold">EaseMyShoot</strong>—where creativity meets convenience!</p>
      </footer>
    </div>
  );
};

export default AboutUs;

