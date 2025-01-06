import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full mx-auto py-6 px-12  bg-cyan-100 rounded-lg shadow-md">
      <h1 className="text-3xl mt-16 md:mt-2 font-bold text-center text-gray-800 mb-6">
        Terms and Conditions
      </h1>
      <p className="text-gray-600 text-sm text-center mb-6">
        Last Updated: 15 November, 2024
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Acceptance of Terms
        </h2>
        <p className="text-gray-600">
          By accessing or using the GoatTapper protocol or engaging in any
          transactions, including claiming tokens, you agree to comply with and
          be bound by these Terms and Conditions. If you do not agree with any
          part of these terms, please do not use our services{" "}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          1. Grant of License
        </h2>
        <p className="text-gray-600 mb-2">
          1.1 GoatTapper Limited ("GoatTapper") grants you ("User") a
          non-exclusive, non-transferable, revocable license to access and use
          the services available on the GoatTapper.gg website (the "Service")
          for your personal, non-commercial use, subject to the terms and
          conditions herein.
        </p>
        <p className="text-gray-600 mb-2">
          1.2 The Service is not intended for use by individuals under the age
          of 18 or under the legal age of majority in their jurisdiction. By
          using the Service, you represent and warrant that you meet the
          applicable age requirements.
        </p>
        <p className="text-gray-600">
          1.3 You are responsible for ensuring that your use of the Service
          complies with all laws, regulations, and policies applicable to you.
          GoatTapper makes no representations or warranties that the Service is
          appropriate or available for use in your location.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          2. Intellectual Property Rights
        </h2>
        <p className="text-gray-600 mb-2">
          2.1 All content on the GoatTapper.gg website, including but not
          limited to text, graphics, logos, images, audio clips, and software
          (collectively, the "Content"), is the property of GoatTapper or its
          licensors and is protected by international copyright, trademark,
          patent, trade secret, and other intellectual property or proprietary
          rights laws.
        </p>
        <p className="text-gray-600 mb-2">
          2.2 You are granted a limited, non-sublicensable license to access and
          use the Service and Content for personal, non-commercial purposes. Any
          other use of the Service or Content without GoatTapper's prior written
          consent is strictly prohibited.
        </p>
        <p className="text-gray-600">
          2.3 You agree not to reproduce, distribute, modify, create derivative
          works of, publicly display, publicly perform, republish, download,
          store, or transmit any of the Content, except as permitted under these
          terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          3. Disclaimer of Warranties
        </h2>
        <p className="text-gray-600">
          3.1 The Service and all information, content, materials, and other
          services included on or otherwise made available to you through the
          Service are provided on an "as is" and "as available" basis, unless
          otherwise specified in writing.
        </p>
        <p className="text-gray-600">
          3.2 GoatTapper makes no representations or warranties of any kind,
          express or implied, as to the operation of the Service or the
          information, content, or materials included therein. You expressly
          agree that your use of the Service is at your sole risk.
        </p>
      </section>

      {/* Add more sections here following the same structure */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600">
          If you have any questions or concerns about these terms or the
          Service, please contact us at:
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> contact@GoatTapper.gg
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
