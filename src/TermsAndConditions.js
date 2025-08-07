import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#0a1f44] min-h-screen text-gray-400">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Title and Last Updated */}
        <h1 className="text-red-600 text-5xl mb-4 text-center font-bold">Terms & Conditions</h1>
        <p className="text-3x1 mb-8 text-center">Last updated on 24 Oct 2024</p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">1. Acceptance of Terms</h2>
            <p>By accessing and using the AscendAI website (the "Site"), you agree to comply with and be bound by these Terms and Conditions.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">2. User Eligibility</h2>
            <p>You must be at least 18 years old or have the legal capacity to enter into a contract to use this Site. By using the Site, you confirm that you meet these requirements.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">3. Privacy Policy</h2>
            <p>Your use of the Site is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">4. Account Registration</h2>
            <p>To access certain features of the Site, you may need to register for an account. You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities that occur under your account.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">5. Intellectual Property</h2>
            <p>The content on this Site, including but not limited to text, graphics, logos, and images, is the property of AscendAI and is protected by intellectual property laws. You may not use, reproduce, or distribute the content without our express permission.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">6. Prohibited Conduct</h2>
            <p>You agree not to engage in any conduct that may disrupt the Site, harm other users, or violate any laws. Prohibited conduct includes, but is not limited to, hacking, spreading malware, and unauthorized access to the Site.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">7. Disclaimers</h2>
            <p>The information on the Site is provided for general informational purposes only. AscendAI makes no warranties regarding the accuracy, completeness, or reliability of the content. Your use of the Site is at your own risk.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">8. Limitation of Liability</h2>
            <p>AscendAI and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Site.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">9. Termination</h2>
            <p>AscendAI reserves the right to terminate or suspend your access to the Site for any reason, including violation of these Terms and Conditions.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">10. Changes to Terms</h2>
            <p>AscendAI may modify these Terms and Conditions at any time. It is your responsibility to review the Terms regularly. Continued use of the Site after changes constitutes acceptance of the modified Terms.</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">11. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, USA. Any disputes arising out of or in connection with these Terms shall be resolved through arbitration in accordance with the rules of the American Arbitration Association (AAA).</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">12. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at IbrahimK@horizontechautomations.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
