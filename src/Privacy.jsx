import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full mx-auto py-6 px-12  bg-cyan-100 rounded-lg shadow-md">
      <h1 className="text-3xl mt-16 md:mt-2 font-bold text-center text-gray-800 mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-sm text-center mb-6">
        Last Updated: 30 September, 2024
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Introduction
        </h2>
        <p className="text-gray-600">
          Welcome to GoatTapper. This Privacy Policy explains how we collect,
          use, share, and protect your information when you use our website and
          services, including our Web3 features that support blockchain-based
          transactions and token redemption. By using GoatTapper, you agree to
          the collection and use of your information as described in this
          policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Information We Collect
        </h2>
        <p className="text-gray-600">
          <strong>a. Information You Provide to Us</strong>
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>
            <strong>Account Information:</strong> When you create an account on
            GoatTapper, we may collect your name, email address, wallet address,
            social logins, and other information necessary to identify you.
          </li>
          <li>
            <strong>Transaction Information:</strong> Information about the
            transactions you engage in on GoatTapper, including
            blockchain-related transactions and token claim or transfer.
          </li>
          <li>
            <strong>Communication Data:</strong> If you contact us, we may
            collect information about your communication to provide customer
            support.
          </li>
        </ul>
        <p className="text-gray-600">
          <strong>b. Information We Collect Automatically</strong>
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Usage Information:</strong> We may collect information about
            how you interact with our platform, such as the pages visited, links
            clicked, and transaction histories.
          </li>
          <li>
            <strong>Device Information:</strong> We may collect information
            about the device you use, including your IP address, browser type,
            and operating system.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Account Management and Customer Service:</strong> To create
            and manage your account, provide customer support, and respond to
            your inquiries.
          </li>
          <li>
            <strong>Transactional Processing:</strong> To process transactions,
            including token claim, token transfers, and other blockchain-based
            activities.
          </li>
          <li>
            <strong>Improvement of Services:</strong> To understand how users
            interact with our platform and to improve our services and user
            experience.
          </li>
          <li>
            <strong>Compliance and Protection:</strong> To comply with
            applicable laws and regulations, detect fraudulent activities, and
            protect our legal rights and interests.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          How We Share Your Information
        </h2>
        <p className="text-gray-600">
          We may share your information in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>With Service Providers:</strong> We may share your
            information with third-party service providers to assist us with
            operational functions, including transaction processing, analytics,
            and website hosting.
          </li>
          <li>
            <strong>For Legal Compliance and Protection:</strong> We may share
            your information if required by law or to protect the rights,
            property, or safety of GoatTapper, our users, or others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or asset sale, your information may be transferred as
            part of that transaction, and you will be notified of any such
            change in ownership.
          </li>
        </ul>
        <p className="text-gray-600">
          Note: GoatTapper does not sell or rent your personal data to third
          parties for marketing purposes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
