const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                book a session, or contact us for support.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Full name, email address, and phone number</li>
                <li>Professional background and expertise areas</li>
                <li>Profile photo and biographical information</li>
                <li>Location and timezone preferences</li>
                <li>LinkedIn profile and professional credentials</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Payment Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Credit card or payment method details (processed securely through Stripe)</li>
                <li>Billing address and tax information</li>
                <li>Transaction history and receipts</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Session recordings (with consent)</li>
                <li>Communication logs between users and experts</li>
                <li>Platform activity and interaction data</li>
                <li>Device information and IP addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Facilitate connections between users and experts</li>
                <li>Process bookings and handle payments securely</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send session reminders and important platform updates</li>
                <li>Improve our matching algorithm and recommendations</li>
                <li>Ensure platform safety through verification and moderation</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We respect your privacy and do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>With Experts:</strong> Basic profile information when you book a session</li>
                <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our platform (payment processors, email services, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>SSL encryption for all data transmission</li>
                <li>Secure servers with regular security audits</li>
                <li>Limited access to personal information by employees</li>
                <li>Regular security training for our team</li>
                <li>PCI DSS compliance for payment processing</li>
                <li>Two-factor authentication option for accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access and download your personal data</li>
                <li>Correct or update your information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control cookie preferences</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will delete or anonymize your personal information within 90 days, except where retention is required for legal or legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">7. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                TapTime is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will promptly delete the information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of TapTime after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@taptime.com</p>
                <p className="text-gray-700"><strong>Address:</strong> TapTime Inc., 123 Innovation Drive, San Francisco, CA 94107</p>
                <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@taptime.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage