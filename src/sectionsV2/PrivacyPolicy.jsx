import React, { useState } from "react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: `
      Welcome to OverHere. This Privacy Policy explains how we collect, use, share, and protect your information when you use our website and services, including our Web3 features that support blockchain-based transactions and token redemption. By using OverHere, you agree to the collection and use of your information as described in this policy.
      `,
    },
    {
      title: "Information We Collect",
      content: `
      a. Information You Provide to Us

      - Account Information: When you create an account on OverHere, we may collect your name, email address, wallet address, social logins, and other information necessary to identify you.
      - Transaction Information: Information about the transactions you engage in on OverHere, including blockchain-related transactions and token claim or transfer.
      - Communication Data: If you contact us, we may collect information about your communication to provide customer support.

      b. Information We Collect Automatically

      - Usage Information: We may collect information about how you interact with our platform, such as the pages visited, links clicked, and transaction histories.
      - Device Information: We may collect information about the device you use, including your IP address, browser type, and operating system.
      `,
    },
    {
      title: "How We Use Your Information",
      content: `
      We use the information we collect for the following purposes:

      - Account Management and Customer Service: To create and manage your account, provide customer support, and respond to your inquiries.
      - Transactional Processing: To process transactions, including token claim, token transfers, and other blockchain-based activities.
      - Improvement of Services: To understand how users interact with our platform and to improve our services and user experience.
      - Compliance and Protection: To comply with applicable laws and regulations, detect fraudulent activities, and protect our legal rights and interests.
      `,
    },
    {
      title: "How We Share Your Information",
      content: `
      We may share your information in the following circumstances:

      - With Service Providers: We may share your information with third-party service providers to assist us with operational functions, including transaction processing, analytics, and website hosting.
      - For Legal Compliance and Protection: We may share your information if required by law or to protect the rights, property, or safety of OverHere, our users, or others.
      - Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred as part of that transaction, and you will be notified of any such change in ownership.

      Note: OverHere does not sell or rent your personal data to third parties for marketing purposes.
      `,
    },
    // Add more sections here following the same pattern
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-sm text-center mb-6">
        Last Updated: 30 September, 2024
      </p>
      {sections.map((section, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left p-4 text-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-t focus:outline-none"
          >
            {section.title}
          </button>
          {openSection === index && (
            <div className="p-4 text-gray-600 bg-white rounded-b">
              <pre className="whitespace-pre-wrap">{section.content}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
