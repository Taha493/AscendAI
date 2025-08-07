import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0a1f44] min-h-screen text-gray-400">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Title and Last Updated */}
        <h1 className="text-red-600 text-5xl mb-4 text-center font-bold">Privacy Policy</h1>
        <p className="text-3x1 mb-10 text-center">Last updated on 24 Oct 2024</p>

        {/* Introduction */}
        <p className="mb-8">
          Welcome to AscendAI ("we," "us," or "our"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and protect your personal information when you use our website and related services, including AI automation and voice agents.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">1. Information We Collect</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-lg font-bold mb-2">1.1 Personal Information</h3>
                <p>We may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it through account registration, newsletter subscriptions, or when you newsletters, or contact us through the website.</p>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-2">1.2 Usage Information</h3>
                <p>We may collect information about your use of the website, including your IP address, browser type, device information, and access times. This information helps us analyze user trends, administer the site, and improve user experience.</p>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-2">1.3 Usage Information</h3>
                <p>When you use our AI automations or voice agents, we may collect interaction data, including your inputs and our responses, to enhance our services and improve AI performance.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information for various purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Providing our services</li>
              <li>Communicating with you about your account and our offerings</li>
              <li>Sending newsletters, promotional materials, and other information you request</li>
              <li>Analyzing website usage and improving our services</li>
              <li>Enhancing AI performance and user experience</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">3. Sharing Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent except as described in this Privacy Policy. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">4. Cookies and Similar Technologies</h2>
            <p>We use cookies and similar technologies to enhance your experience on our website. You can control Cookies through your browser settings. Disabling them may affect your ability to use certain features of the site.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">5. Your Choices</h2>
            <p>You can manage your communication preferences by unsubscribing from newsletters or adjusting your account settings. You may also contact us to update or delete your personal information.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">6. Security</h2>
            <p>We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">7. Children's Privacy</h2>
            <p>Our website is not directed to individuals under the age of 13. If we become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">8. Changes to This Privacy Policy</h2>
            <p>We may update this privacy policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Privacy Policy.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-white text-lg mb-4 font-bold">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at infoascendaiautomations@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
