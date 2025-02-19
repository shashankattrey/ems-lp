import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Refund Policy</h1>

      <p className="text-gray-700 mb-4">
        Effective Date: 01 Febuary, 2025
      </p>

      <p className="text-gray-700 mb-4">
        At EaseMyShoot (Above Edge Tech Solutions Pvt Ltd), we are committed to delivering a seamless booking experience for our users. However, we understand that unforeseen issues may arise, and you may have concerns regarding refunds. This policy outlines the terms and conditions under which refunds may or may not be granted. Please read the following details carefully before making a booking on our platform.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. General Refund Terms</h2>
        <p className="text-gray-700">
          EaseMyShoot operates as an intermediary platform connecting users with studio owners. Refund requests are subject to our policies as well as the individual policies of the studio owners. We encourage users to review studio-specific terms before making a reservation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Eligibility for Refunds</h2>
        <p className="text-gray-700 mb-3">
          Refunds will be considered under the following conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Studio Service Failure:</strong> If the studio fails to provide the services as agreed at the time of booking (e.g., the venue is closed, unavailable, or not in the condition as advertised), you may be eligible for a refund.
          </li>
          <li>
            <strong>Technical Errors:</strong> If you were charged twice or experienced an incorrect transaction due to a technical glitch on our platform, you may request a refund.
          </li>

        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Non-Refundable Cases</h2>
        <p className="text-gray-700 mb-3">
          Refunds will not be granted in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Non-Cancellable Bookings:</strong> Once a booking is reserved, it cannot be canceled, and no refunds will be issued.
          </li>
          <li>
            <strong>No-Show:</strong> If you fail to arrive at the booked studio at the scheduled time, no refund will be provided.
          </li>
          <li>
            <strong>Dissatisfaction Without Timely Complaint:</strong> If you are dissatisfied with the service but do not raise an issue with our customer support team within 24 hours of booking completion, your refund request will not be considered.
          </li>
          <li>
            <strong>Third-Party Issues:</strong> Refunds are not applicable for issues beyond our control, such as unfavorable weather conditions, transportation delays, or third-party service failures.
          </li>
          <li>
            <strong>Change of Mind:</strong> Refunds will not be issued simply because you no longer need the studio after booking.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Refund Process and Timeline</h2>
        <p className="text-gray-700 mb-3">
          To request a refund, you must follow the process outlined below:
        </p>
        <ul className="list-decimal list-inside text-gray-700">
          <li>
            <strong>Initiate a Refund Request:</strong> Contact our support team at <a href="mailto:help.easemyshoot@gmail.com" className="text-blue-500 hover:underline">help.easemyshoot@gmail.com</a> within 24 hours of the issue, providing relevant details such as booking confirmation, issue description, and supporting evidence (e.g., photos, screenshots).
          </li>
          <li>
            <strong>Review Period:</strong> Our team will assess your request and respond within 5-7 business days to confirm eligibility.
          </li>
          <li>
            <strong>Processing the Refund:</strong> If approved, the refund will be processed within 7-10 business days and credited to your original payment method.
          </li>
          <li>
            <strong>Refund Method:</strong> Refunds will only be issued through the original mode of payment used during the booking.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Partial Refunds</h2>
        <p className="text-gray-700 mb-3">
          In some cases, a partial refund may be granted under the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700">


          <li>
            <strong>Platform Service Fees:</strong> Some service fees may be non-refundable, and the refund amount will be adjusted accordingly.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Exceptions and Special Cases</h2>
        <p className="text-gray-700">
          We understand that exceptional cases may arise. If your refund request does not fall within the standard guidelines but you believe you deserve compensation, please reach out to our customer support. We will review requests on a case-by-case basis and determine whether an exception can be made.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Chargeback Policy</h2>
        <p className="text-gray-700">
          If you dispute a transaction with your bank or payment provider instead of following our refund process, we reserve the right to contest the chargeback. We encourage users to contact us first to resolve any disputes amicably.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Changes to This Policy</h2>
        <p className="text-gray-700">
          EaseMyShoot reserves the right to update or modify this refund policy at any time. Changes will be communicated via our website, and the revised policy will be effective from the date specified.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
        <p className="text-gray-700 mb-3">
          If you have any questions regarding our refund policy or need further assistance, please contact us through the following channels:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Email:</strong> <a href="mailto:help.easemyshoot@gmail.com" className="text-blue-500 hover:underline">help.easemyshoot@gmail.com</a>
          </li>

          {/* <li>
            <strong>Live Chat:</strong> Available from 9 AM - 9 PM IST
          </li> */}
        </ul>
      </section>

      <p className="text-gray-700">
        We appreciate your understanding and cooperation. Thank you for choosing EaseMyShoot!
      </p>
    </div>
  );
};

export default RefundPolicy;
