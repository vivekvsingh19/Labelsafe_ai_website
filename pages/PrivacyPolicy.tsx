import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
               backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               opacity: 0.3
           }}>
      </div>

      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-black mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 text-lg">
            Last updated: <span className="text-black font-medium">February 13, 2026</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 mb-12 rounded-2xl">
            <h2 className="font-serif text-2xl text-black mb-6">Table of Contents</h2>
            <ul className="space-y-3">
              <li><a href="#introduction" className="text-gray-600 hover:text-terracotta transition-colors">1. Introduction</a></li>
              <li><a href="#information-we-collect" className="text-gray-600 hover:text-terracotta transition-colors">2. Information We Collect</a></li>
              <li><a href="#how-we-use" className="text-gray-600 hover:text-terracotta transition-colors">3. How We Use Your Information</a></li>
              <li><a href="#data-sharing" className="text-gray-600 hover:text-terracotta transition-colors">4. Data Sharing and Disclosure</a></li>
              <li><a href="#data-security" className="text-gray-600 hover:text-terracotta transition-colors">5. Data Security</a></li>
              <li><a href="#data-retention" className="text-gray-600 hover:text-terracotta transition-colors">6. Data Retention</a></li>
              <li><a href="#user-rights" className="text-gray-600 hover:text-terracotta transition-colors">7. Your Rights and Choices</a></li>
              <li><a href="#children" className="text-gray-600 hover:text-terracotta transition-colors">8. Children's Privacy</a></li>
              <li><a href="#third-party" className="text-gray-600 hover:text-terracotta transition-colors">9. Third-Party Links</a></li>
              <li><a href="#updates" className="text-gray-600 hover:text-terracotta transition-colors">10. Updates to This Policy</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-terracotta transition-colors">11. Contact Us</a></li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* 1. Introduction */}
            <section id="introduction">
              <h2 className="font-serif text-3xl text-black mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                LabelSafe AI ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and related services (collectively, the "Services").
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services. By accessing and using LabelSafe AI, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-we-collect">
              <h2 className="font-serif text-3xl text-black mb-6">2. Information We Collect</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-black mb-4">2.1 Information You Provide Directly</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account</li>
                    <li><strong>Profile Information:</strong> Profile picture, bio, preferences, and settings</li>
                    <li><strong>Content You Upload:</strong> Images, documents, text, and other content you submit for analysis</li>
                    <li><strong>Communication Data:</strong> Messages, feedback, support requests, and communications with our team</li>
                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party providers)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">2.2 Information Collected Automatically</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, IP address, and device settings</li>
                    <li><strong>Usage Information:</strong> How you interact with our Services, features used, content viewed, and time spent</li>
                    <li><strong>Location Information:</strong> General location based on IP address (not GPS tracking unless you explicitly grant permission)</li>
                    <li><strong>Cookies and Tracking:</strong> Cookies, pixels, beacons, and similar technologies to enhance user experience</li>
                    <li><strong>Log Data:</strong> Server logs including timestamps, page requests, and error information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-black mb-4">2.3 Information from Third Parties</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Information from social media platforms (if you link your account)</li>
                    <li>Analytics providers and analytics data</li>
                    <li>Payment processors and transaction information</li>
                    <li>Information from publicly available sources</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-we-use">
              <h2 className="font-serif text-3xl text-black mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Service Delivery:</strong> Providing, maintaining, and improving our Services</li>
                <li><strong>Personalization:</strong> Personalizing your experience and delivering targeted content</li>
                <li><strong>AI Analysis:</strong> Processing your uploaded content for safety analysis and insights</li>
                <li><strong>Communication:</strong> Sending service updates, security alerts, and customer support</li>
                <li><strong>Analytics:</strong> Understanding usage patterns and optimizing our Services</li>
                <li><strong>Marketing:</strong> Sending promotional materials and newsletters (with your consent)</li>
                <li><strong>Legal Compliance:</strong> Complying with laws, regulations, and legal processes</li>
                <li><strong>Fraud Prevention:</strong> Detecting and preventing fraudulent activities and security breaches</li>
                <li><strong>Research:</strong> Conducting research and analytics to improve our algorithms and features</li>
              </ul>
            </section>

            {/* 4. Data Sharing and Disclosure */}
            <section id="data-sharing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>We do not sell your personal information.</strong> However, we may share your information in the following circumstances:
                </p>

                <div>
                  <h3 className="font-semibold mb-2">4.1 Service Providers</h3>
                  <p>We share information with trusted service providers who assist in operating our Services, including cloud hosting providers, payment processors, analytics services, and customer support platforms. These providers are bound by confidentiality agreements.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4.2 Legal Requirements</h3>
                  <p>We may disclose your information if required by law, regulation, court order, or government request, and when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4.3 Business Transfers</h3>
                  <p>In the event of a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4.4 Aggregated Data</h3>
                  <p>We may share aggregated, anonymized data that cannot identify you for research, marketing, analytics, and other purposes.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4.5 With Your Consent</h3>
                  <p>We may share your information with third parties when you explicitly consent to such sharing.</p>
                </div>
              </div>
            </section>

            {/* 5. Data Security */}
            <section id="data-security">
              <h2 className="font-serif text-3xl text-black mb-6">5. Data Security</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We implement comprehensive security measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Secure authentication mechanisms and password hashing</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and role-based permissions</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
              <p className="text-gray-700 bg-terracotta/5 border-l-4 border-terracotta p-5 rounded-lg mt-6 leading-relaxed">
                <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, and any transmission of data is at your own risk.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section id="data-retention">
              <h2 className="font-serif text-3xl text-black mb-6">6. Data Retention</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Provide and maintain our Services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve and optimize our Services</li>
              </ul>
              <p className="text-gray-700">
                Once you delete your account, we will delete your personal information within 30 days, except where we are required to retain it by law or for legitimate business purposes.
              </p>
            </section>

            {/* 7. Your Rights and Choices */}
            <section id="user-rights">
              <h2 className="font-serif text-3xl text-black mb-6">7. Your Rights and Choices</h2>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold mb-2">7.1 Access and Portability</h3>
                  <p>You have the right to access and obtain a copy of your personal information we hold. You can download your data in a portable format.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7.2 Correction and Updates</h3>
                  <p>You can update or correct your account information at any time through your account settings.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7.3 Deletion</h3>
                  <p>You have the right to request deletion of your account and associated personal information. We will delete your data within 30 days, subject to legal retention requirements.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7.4 Opt-Out of Marketing</h3>
                  <p>You can opt out of promotional emails and marketing communications by clicking the unsubscribe link or adjusting your preferences in your account settings.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7.5 Cookie Management</h3>
                  <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our Services.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">7.6 Regional Rights</h3>
                  <p>
                    <strong>GDPR (EU/EEA):</strong> If you are in the EU or EEA, you have additional rights including the right to restrict processing and the right to object to processing. <br/>
                    <strong>CCPA (California):</strong> If you are a California resident, you have rights to know, delete, and opt-out of the sale of your personal information. <br/>
                    <strong>Other Jurisdictions:</strong> Similar privacy rights may apply depending on your location.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Children's Privacy */}
            <section id="children">
              <h2 className="font-serif text-3xl text-black mb-6">8. Children's Privacy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our Services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will delete such information immediately and terminate the child's account.
              </p>
              <p className="text-gray-700">
                For users between 13 and 18 years of age, we provide additional privacy protections and limit the use of their information. Parents or guardians can contact us to review, update, or delete information about their children.
              </p>
            </section>

            {/* 9. Third-Party Links */}
            <section id="third-party">
              <h2 className="font-serif text-3xl text-black mb-6">9. Third-Party Links and Services</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our Services may contain links to third-party websites and services that are not operated by us. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.
              </p>
              <p className="text-gray-700">
                If you use social media integration or connect to third-party services, they may share information with us according to your privacy settings on those platforms.
              </p>
            </section>

            {/* 10. Updates to This Policy */}
            <section id="updates">
              <h2 className="font-serif text-3xl text-black mb-6">10. Updates to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date.
              </p>
              <p className="text-gray-700">
                Your continued use of our Services after such modifications constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* 11. Contact Us */}
            <section id="contact">
              <h2 className="font-serif text-3xl text-black mb-6">11. Contact Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl">
                <p className="text-black font-medium text-lg mb-4">LabelSafe AI</p>
                <p className="text-gray-600 mb-3">
                  <strong className="text-black">Email:</strong> <a href="mailto:privacy@labelsafe.ai" className="text-terracotta hover:underline">privacy@labelsafe.ai</a>
                </p>
                <p className="text-gray-600 mb-3">
                  <strong className="text-black">Support:</strong> <a href="mailto:support@labelsafe.ai" className="text-terracotta hover:underline">support@labelsafe.ai</a>
                </p>
                <p className="text-gray-600">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>
            </section>

            {/* GDPR/CCPA Notice */}
            <section className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-medium text-black mb-4">Your Privacy Rights Notice</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>For GDPR/CCPA Compliance:</strong> We process your personal data based on legitimate business interests, contractual necessity, legal compliance, and your explicit consent. You have the right to lodge a complaint with your local data protection authority if you believe your rights have been violated.
              </p>
              <p className="text-gray-700">
                <strong>Data Processing Agreement:</strong> If you are a business customer, we can provide a Data Processing Agreement (DPA) upon request.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">
              © 2026 LabelSafe AI. All rights reserved. | <Link to="/" className="text-terracotta hover:underline">Home</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
