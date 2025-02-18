export default function NeedHelp() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 mt-10">
      <h1 className="text-3xl font-bold text-gray-800">Need Help? 💬</h1>
      <p className="text-gray-600">We're here to assist you with any queries or concerns.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        <details className="p-4 border rounded-lg text-gray-700">
          <summary className="font-medium cursor-pointer text-gray-700">How do I book a studio?</summary>
          <p className="mt-2 text-gray-600">You can book a studio by browsing available listings and selecting the one that fits your needs. Click 'Reserve' to proceed.</p>
        </details>

        <details className="p-4 border rounded-lg">
          <summary className="font-medium cursor-pointer text-gray-700">What payment methods do you accept?</summary>
          <p className="mt-2 text-gray-600">We accept UPI, credit/debit cards, and net banking for payments.</p>
        </details>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Support</h2>
        <p className="text-gray-600">Need further assistance? Reach out to us:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Email: <a href="mailto:support@easemyshoot.com" className="text-[#6901b1]">support@easemyshoot.com</a></li>
          {/* <li>Phone: +91-9549800020</li> */}
          {/* <li>Live Chat: Available 9 AM - 9 PM IST</li> */}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your full name" required />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-gray-700">Mobile Number</label>
            <input type="tel" className="w-full p-2 border rounded-lg" placeholder="Enter your mobile number" required />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded-lg" rows="4" placeholder="Type your message" required></textarea>
          </div>
          <button type="submit" className="w-full bg-[#6901b1] text-white p-2 rounded-lg h-12">Submit</button>
        </form>
      </div>
    </div>
  );
}
