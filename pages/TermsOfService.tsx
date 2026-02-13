import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
          <h1 className="font-serif text-5xl md:text-7xl text-black mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 text-lg">
            Last updated: <span className="text-black font-medium">February 13, 2026</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 mb-12 rounded-2xl">
            <h2 className="font-serif text-2xl text-black mb-6">Table of Contents</h2>
            <ul className="space-y-3">
              <li><a href="#agreement" className="text-gray-600 hover:text-terracotta transition-colors">1. Agreement to Terms</a></li>
              <li><a href="#use-license" className="text-gray-600 hover:text-terracotta transition-colors">2. Use License</a></li>
              <li><a href="#disclaimer" className="text-gray-600 hover:text-terracotta transition-colors">3. Disclaimer of Warranties</a></li>
              <li><a href="#limitations" className="text-gray-600 hover:text-terracotta transition-colors">4. Limitations of Liability</a></li>
              <li><a href="#accuracy" className="text-gray-600 hover:text-terracotta transition-colors">5. Accuracy of Materials</a></li>
              <li><a href="#materials" className="text-gray-600 hover:text-terracotta transition-colors">6. Materials and Content</a></li>
              <li><a href="#user-content" className="text-gray-600 hover:text-terracotta transition-colors">7. User-Generated Content</a></li>
              <li><a href="#prohibited" className="text-gray-600 hover:text-terracotta transition-colors">8. Prohibited Activities</a></li>
              <li><a href="#termination" className="text-gray-600 hover:text-terracotta transition-colors">9. Termination</a></li>
              <li><a href="#governing-law" className="text-gray-600 hover:text-terracotta transition-colors">10. Governing Law</a></li>
              <li><a href="#dispute-resolution" className="text-gray-600 hover:text-terracotta transition-colors">11. Dispute Resolution</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-terracotta transition-colors">12. Contact Information</a></li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* 1. Agreement to Terms */}
            <section id="agreement">
              <h2 className="font-serif text-3xl text-black mb-6">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These Terms of Service ("Terms") constitute a legal agreement between you and LabelSafe AI ("Company," "we," "us," or "our") regarding your use of our mobile application, website, and related services (collectively, the "Services").
              </p>
              <p className="text-gray-600 mb-4">
                By accessing, downloading, installing, or using LabelSafe AI in any way, you agree to be bound by these Terms. If you do not agree to all the terms and conditions outlined herein, you are not authorized to use the Services.
              </p>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. Continued use of the Services after changes constitutes your acceptance of the modified Terms. We will notify you of material changes via email or prominent notice on our website.
              </p>
            </section>

            {/* 2. Use License */}
            <section id="use-license">
              <h2 className="font-serif text-3xl text-black mb-6">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Subject to your compliance with these Terms, LabelSafe AI grants you a limited, non-exclusive, non-transferable, and revocable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Access and use the Services for your personal or internal business purposes</li>
                <li>Download and install our mobile application on your personal devices</li>
                <li>Use the features and functionality provided by our Services</li>
              </ul>
              <p className="text-gray-600">
                <strong>Restrictions:</strong> You may not license, sell, rent, lease, transfer, assign, or otherwise dispose of the Services. You may not reverse engineer, decompile, disassemble, or attempt to derive source code from the Services.
              </p>
            </section>

            {/* 3. Disclaimer of Warranties */}
            <section id="disclaimer">
              <h2 className="font-serif text-3xl text-black mb-6">3. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                The Services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.
              </p>
              <p className="text-gray-600 mb-4">
                LabelSafe AI disclaims all warranties, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>Warranties regarding uninterrupted, error-free, or secure operation of the Services</li>
                <li>Warranties regarding the accuracy, completeness, or reliability of content</li>
                <li>Warranties regarding the absence of viruses or harmful code</li>
              </ul>
              <p className="text-gray-600 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                We do not guarantee that the AI analysis provided will always be accurate or that it will meet your specific requirements. The analysis is provided as a tool to assist with content moderation and should not be relied upon as the sole basis for critical decisions.
              </p>
            </section>

            {/* 4. Limitations of Liability */}
            <section id="limitations">
              <h2 className="font-serif text-3xl text-black mb-6">4. Limitations of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, LabelSafe AI shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including damages for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Loss of goodwill or reputation</li>
                <li>Business interruption</li>
                <li>Any other loss arising out of or related to your use of the Services</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>Liability Cap:</strong> Our total liability to you for any claims arising out of or relating to these Terms or the Services shall not exceed the amount you paid to LabelSafe AI in the 12 months preceding the claim, or $100 USD if you have not paid anything.
              </p>
              <p className="text-gray-600">
                Some jurisdictions do not allow limitation of liability, so this limitation may not apply to you.
              </p>
            </section>

            {/* 5. Accuracy of Materials */}
            <section id="accuracy">
              <h2 className="font-serif text-3xl text-black mb-6">5. Accuracy of Materials</h2>
              <p className="text-gray-600 mb-4">
                The materials and information provided through the Services are provided for informational purposes only. While we strive to provide accurate and current information, we do not warrant the accuracy, completeness, or timeliness of any information.
              </p>
              <p className="text-gray-600">
                LabelSafe AI may make changes to the materials contained in the Services at any time without notice. However, we do not make any commitment to update the materials.
              </p>
            </section>

            {/* 6. Materials and Content */}
            <section id="materials">
              <h2 className="font-serif text-3xl text-black mb-6">6. Materials and Content</h2>
              <p className="text-gray-600 mb-4">
                All content included in the Services, including text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of LabelSafe AI or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, transmit, display, perform, publish, license, create derivative works from, transfer, or sell any materials from the Services without prior written permission from LabelSafe AI.
              </p>
            </section>

            {/* 7. User-Generated Content */}
            <section id="user-content">
              <h2 className="font-serif text-3xl text-black mb-6">7. User-Generated Content</h2>
              <p className="text-gray-600 mb-4">
                You retain ownership of any content you upload to LabelSafe AI ("User Content"). However, by uploading content, you grant us a worldwide, non-exclusive, royalty-free license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Use, process, analyze, and store your content to provide the Services</li>
                <li>Use your content for service improvement and AI model training (anonymized)</li>
                <li>Display your content within your account and to your authorized users</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>Your Responsibility:</strong> You are solely responsible for the content you upload. You represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>You own or have the right to upload the content</li>
                <li>The content does not infringe on third-party intellectual property rights</li>
                <li>The content complies with all applicable laws and regulations</li>
                <li>The content does not contain malware or harmful code</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to remove any content that violates these Terms or applicable laws.
              </p>
            </section>

            {/* 8. Prohibited Activities */}
            <section id="prohibited">
              <h2 className="font-serif text-3xl text-black mb-6">8. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">
                You agree not to use the Services for any unlawful purpose or in any way that could damage, disable, or impair the Services. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Using the Services to upload illegal content or content that violates third-party rights</li>
                <li>Attempting to gain unauthorized access to the Services or related systems</li>
                <li>Interfering with or disrupting the integrity or performance of the Services</li>
                <li>Removing, obscuring, or altering any proprietary notices or labels</li>
                <li>Using automated tools, bots, or scrapers to access or collect data from the Services</li>
                <li>Engaging in any form of harassment, threats, or abusive behavior</li>
                <li>Sharing your account credentials or allowing unauthorized access</li>
                <li>Circumventing security measures or access controls</li>
                <li>Using the Services for illegal activities, fraud, or deception</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            {/* 9. Termination */}
            <section id="termination">
              <h2 className="font-serif text-3xl text-black mb-6">9. Termination</h2>
              <p className="text-gray-600 mb-4">
                <strong>Termination by You:</strong> You may terminate your account and use of the Services at any time by contacting us or following the account deletion process in your account settings.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your account and access to the Services if you violate these Terms or engage in prohibited activities. Termination may be immediate and without notice for serious violations.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the Services ceases immediately. We are not liable for any loss or damage resulting from termination of your account.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section id="governing-law">
              <h2 className="font-serif text-3xl text-black mb-6">10. Governing Law</h2>
              <p className="text-gray-600">
                These Terms and your use of the Services are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in [Your Jurisdiction] and waive any objection based on improper venue or inconvenient forum.
              </p>
            </section>

            {/* 11. Dispute Resolution */}
            <section id="dispute-resolution">
              <h2 className="font-serif text-3xl text-black mb-6">11. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                <strong>Informal Resolution:</strong> Before initiating formal proceedings, you agree to attempt to resolve any dispute by contacting us and negotiating in good faith.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Arbitration:</strong> If the dispute cannot be resolved informally within 30 days, you and LabelSafe AI agree to submit the dispute to binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.
              </p>
              <p className="text-gray-600">
                <strong>Class Action Waiver:</strong> You agree that any arbitration or legal action shall be conducted on an individual basis and not on a class-wide, consolidated, or representative basis. You waive the right to participate in class actions or class arbitrations.
              </p>
            </section>

            {/* 12. Contact Information */}
            <section id="contact">
              <h2 className="font-serif text-3xl text-black mb-6">12. Contact Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For questions, complaints, or requests regarding these Terms or the Services, please contact us at:
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl">
                <p className="text-black font-medium text-lg mb-4">LabelSafe AI</p>
                <p className="text-gray-600 mb-3">
                  <strong className="text-black">Email:</strong> <a href="mailto:legal@labelsafe.ai" className="text-terracotta hover:underline">legal@labelsafe.ai</a>
                </p>
                <p className="text-gray-600 mb-3">
                  <strong className="text-black">Support:</strong> <a href="mailto:support@labelsafe.ai" className="text-terracotta hover:underline">support@labelsafe.ai</a>
                </p>
                <p className="text-gray-600">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>
            </section>

            {/* Additional Notices */}
            <section className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-medium text-black mb-4">App Store Specific Terms</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Apple App Store:</strong> These Terms are in addition to Apple's Standard License Agreement. In case of conflict, Apple's terms for your jurisdiction will apply.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Google Play Store:</strong> These Terms are in addition to Google Play's Terms of Service. By downloading from Google Play, you also agree to Google's policies.
              </p>
            </section>

            {/* Severability */}
            <section className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-medium text-black mb-4">Severability</h3>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, such provision shall be severable and shall not affect the validity or enforceability of the remaining provisions, which shall continue in full force and effect.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">
              © 2026 LabelSafe AI. All rights reserved. | <Link to="/" className="text-terracotta hover:underline">Home</Link> | <Link to="/privacy" className="text-terracotta hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
