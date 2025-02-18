'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/LandingPage.module.css';
import Image from 'next/image';
import Footer from './components/Footer';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles
import { toast, ToastContainer } from 'react-toastify';

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",
];


export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://aq1y6mi3p6.execute-api.us-east-1.amazonaws.com/prod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          email: "shashaednk@example.com", // example email
        }),
      });

      // Log the raw response text
      const rawResponse = await response.text();
      console.log("Raw response from server:", rawResponse);

      // Check if the response is valid JSON before parsing
      let data;
      if (rawResponse && rawResponse.trim() !== "") {
        try {
          data = JSON.parse(rawResponse);
          console.log("Parsed data:", data);

          // Now parse the 'body' field again since it's a stringified JSON
          let body;
          if (data.body) {
            try {
              body = JSON.parse(data.body);
              console.log("Parsed body:", body);
            } catch (error) {
              console.error("Error parsing the nested body:", error);
            }
          }

          // Check if the response is successful
          if (response.ok) {
            toast.success("✅ Email submitted successfully!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              className: "custom-toast",
            });
          } else {
            toast.error(`❌ ${body?.error || "Failed to submit email. Try again."}`, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              className: "custom-toast custom-toast-error",
            });
          }

        } catch (error) {
          console.error("Error parsing JSON:", error);
          toast.error("❌ Error submitting email.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            className: "custom-toast custom-toast-error",
          });
        }
      } else {
        console.error("Invalid or empty response body:", rawResponse);
        throw new Error("Received empty or invalid response from server.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("❌ Error submitting email.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        className: "custom-toast custom-toast-error",
      });
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };




  return (
    <div className={styles.container}>
      {/* White Header */}
      {/* <header className={styles.whiteHeader}>
        <img src="/logo_ems.png" alt="Logo" className={styles.logo} />
      </header> */}
      <Header />

      {/* Hero Grid Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Text section: Smaller width */}
        {/* Text section: Smaller width */}
        <div className="md:col-span-1 text-center md:text-left px-6 my-6 sm:my-12 md:my-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 my-10 sm:my-18 md:my-16 font-extrabold">
            Hire the <span className="text-[#6901b1]">BEST STUDIO</span> for your content
          </h1>
        </div>


        {/* Image section: Larger width */}
        {/* Image section: Larger width */}
        <div className="md:col-span-2 flex justify-center items-center relative my-6 sm:my-10 md:my-14">
          <img
            src="/earth.png"
            alt="Image description"
            className="max-w-full h-auto my-4 sm:mt-0"
          />

          {/* Overlay image */}
          <img
            src="/collage.png"
            alt="Overlay Image"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] h-auto object-contain"
          />
        </div>


      </motion.section>



      {/* Hero Section */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

      >
        <h1 className='text-gray-600 mt-16 ' >All in One Studio & Content Production Marketplace</h1>
        <h2 className="text-3xl font-extrabold bg-gradient-to-b from-[#6901b1] to-[#6a00ff] bg-clip-text text-transparent my-6">
          List Your Studio
        </h2>

        {/* <p className='text-gray-500 my-6'>Join the waitlist Now!</p> */}
      </motion.header>

      {/* Form Section */}
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          className={styles.button}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <div className="loader"></div> // Replace with a spinner component or CSS spinner
          ) : (
            "Join the Waitlist"
          )}
        </motion.button>
      </motion.form>

      {/* Row with Image and Text */}
      <div className="flex items-center space-x-4 mt-4">
        <img src="/waitlist.webp" alt="Success" className="w-18 h-6" />
        <p className="text-gray-600 text-sm">1000+ Studio Owners are in waitlist</p>
      </div>

      {/* <hr className="w-full mx-auto border-t-2 border-gray-300 mt-20" /> */}

      {/* Use Case Section */}
      <div className={styles.useCaseText}>
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-center leading-tight sm:whitespace-nowrap py-10">
          Choose Studio <br className="sm:hidden" />
          as per Category
        </h2>
        <div className={styles.marquee}>
          <div className={styles.marqueeText + " flex space-x-6 text-xl sm:text-lg md:text-xl font-medium"}>
            <span className="flex items-center space-x-2">
              <span className="text-base sm:text-xl">🎬</span>
              <span>Dance Videos</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-base sm:text-xl">📸</span>
              <span>Photo Shoot</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-base sm:text-xl">🎥</span>
              <span>Video Shoot</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-base sm:text-xl">🎙️</span>
              <span>Podcast</span>
            </span>
          </div>
        </div>

      </div>
      {/* <hr className="w-full mx-auto  border border-gray-200 border-dotted" /> */}
      <div className='mt-20'>
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-center leading-tight sm:whitespace-nowrap bg-gradient-to-r from-[#6901b1] to-[#222] bg-clip-text text-transparent">
          How To Book Studio?
        </h2>

      </div>




      {/* Steps Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-1/2 relative">
        {[
          { step: "Step 1", text: "Choose Location", icon: "📍" },
          { step: "Step 2", text: "Select Property", icon: "🏢" },
          { step: "Step 3", text: "Select Available Date", icon: "🗓️" },
          { step: "Step 4", text: "Choose Time Slot", icon: "⏱️" },
          { step: "Step 5", text: "Pay and Reserve", icon: "💳" },
        ].map((item, index, arr) => (
          <div key={index} className="relative">
            <div className="bg-white shadow-xl shadow-[#f2e6fc] border border-[#eed9ff] rounded-xl p-6 text-center h-36 my-4">
              <h3 className="text-xl my-2 font-semibold text-[#6901b1]">{item.step}</h3>
              <p className="text-gray-600 text-base font-semibold mb-2">{item.text}</p>
              {item.icon && <span className="text-xl">{item.icon}</span>}
            </div>

            {/* Dotted Line - Only for Mobile & Not Last Item */}
            {index !== arr.length - 1 && (
              <div className="absolute left-1/2 bottom-0 h-2 w-[80%] border-l-2 border-dotted border-gray-400 sm:hidden transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>


      {/* Pick from Top Properties Section */}
      <div className={styles.pickPropertiesText}>

        <div className="mt-20">
          <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-center leading-tight sm:whitespace-nowrap bg-gradient-to-b from-[#6901b1] to-[#8e5eb3] bg-clip-text text-transparent">
            Pick from Top Studios
          </h2>
          <div className="relative w-full overflow-hidden mt-6">
            <motion.div
              className="flex space-x-6 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              {[...images, ...images].map((src, index) => (
                <div key={index} className="w-[150px] sm:w-[200px] md:w-[250px] h-40 flex-shrink-0">
                  <img src={src} alt={`Property ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>


      {/* Left Image and Right Text Section */}
      {/* Left Image and Right Text Section */}
      <div className={styles.imageTextSection}>
        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/dcsalwhgc/image/upload/v1738733071/evpi1j0rtxlzvifvz6rq.png"
            alt="Description of Image"
            width={300}
            height={200}
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.textContainer}>
          <p className="text_black text:xl lg:text-5xl xs:text-4xl font-bold leading-[20px]">
            "We help you find your dream location for content"
          </p>
        </div>
      </div>

      {/* Right Image and Left Text Section */}
      {/* Right Image and Left Text Section */}
      <div className={`${styles.imageTextSectionReverse} flex flex-col items-center text-center`}>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-center leading-tight sm:whitespace-nowrap bg-gradient-to-b from-[#6901b1] to-[#8e5eb3] bg-clip-text text-transparent">
            Benefits for Studio Owners
          </h2>
          <p className="mt-8 opacity-100 text-gray-800 text-xl">
            Unlock the potential and Sky Rocket your Revenue with us.
          </p>

          {/* Feature Section */}
          <div className={`${styles.bottom} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center mt-6 w-full`}>
            <div className={`${styles.featureCard} ${styles.cardHover} w-full flex flex-col items-center text-center`}>
              <div className={styles.left}>
                <h1 className='text-5xl'>🚀</h1>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#6901b1]">Higher Revenue Potential</h4>
                <p className="text-lg opacity-100">Monetize every available time slot by renting out</p>
              </div>
            </div>

            <div className={`${styles.featureCard} ${styles.cardHover} w-full flex flex-col items-center text-center`}>
              <div className={styles.left}>
                <h1 className='text-5xl'>🖥️</h1>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#6901b1]">Hassle Free Booking Management</h4>
                <p className="text-lg opacity-100">Automated booking without phone call</p>
              </div>
            </div>

            <div className={`${styles.featureCard} ${styles.cardHover} w-full flex flex-col items-center text-center`}>
              <div className={styles.left}>
                <h1 className='text-5xl'>💳</h1>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#6901b1]">Prepaid bookings</h4>
                <p className="text-lg opacity-100">Customer makes 100% payment to book slot</p>
              </div>
            </div>
            <div className={`${styles.featureCard} ${styles.cardHover} w-full flex flex-col items-center text-center`}>
              <div className={styles.left}>
                <h1 className='text-5xl'>🅾️</h1>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#6901b1]">Zero Listing Fees</h4>
                <p className="text-lg opacity-100">Listing is absolutely free</p>
              </div>
            </div>
            <div className={`${styles.featureCard} ${styles.cardHover} w-full flex flex-col items-center text-center`}>
              <div className={styles.left}>
                <h1 className='text-5xl'>🤖</h1>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#6901b1]">AI Driven Insights</h4>
                <p className="text-lg opacity-100">Track your business to maximize revenue</p>
              </div>
            </div>
            <div className={`${styles.featureCard} ${styles.cardHover} w-full flex flex-col items-center text-center`}>
              <div className={styles.left}>
                <h1 className='text-5xl'>📈</h1>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#6901b1]">Growth Oppurtunities</h4>
                <p className="text-lg opacity-100">Open new revenue streams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        className="custom-toast-container"
      />








    </div>
  );
}
