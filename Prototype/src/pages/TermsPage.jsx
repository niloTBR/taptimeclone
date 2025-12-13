const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-16">Last updated: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing, browsing, or using TapTime ("Platform"), you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree 
                to these Terms, you must not use our Platform.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms constitute a legally binding agreement between you and TapTime Inc. ("Company", "we", "us", or "our").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                TapTime is a platform that connects individuals seeking professional guidance ("Users") 
                with verified industry experts ("Experts") for mentorship and consultation sessions ("Sessions").
              </p>
              <p className="text-gray-700 mb-4">Our services include:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Facilitating discovery and booking of expert sessions</li>
                <li>Providing video conferencing infrastructure for sessions</li>
                <li>Processing payments between users and experts</li>
                <li>Offering scheduling and calendar management tools</li>
                <li>Maintaining profiles and reviews for quality assurance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">3. Account Registration</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Eligibility</h3>
              <p className="text-gray-700 mb-4">
                You must be at least 18 years old to use TapTime. By registering, you represent and warrant that you meet this age requirement.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">3.2 Account Information</h3>
              <p className="text-gray-700 mb-4">
                You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account password and for any activities or actions under your account.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">3.3 Account Types</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>User Account:</strong> For individuals seeking expert guidance</li>
                <li><strong>Expert Account:</strong> For professionals offering consultation services (subject to verification)</li>
                <li><strong>Enterprise Account:</strong> For organizations booking sessions for their teams</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">4. Expert Verification and Standards</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Verification Process</h3>
              <p className="text-gray-700 mb-4">
                Experts must undergo our verification process, which may include identity verification, credential validation, background checks, and skill assessments. We reserve the right to accept or reject any expert application at our discretion.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">4.2 Expert Obligations</h3>
              <p className="text-gray-700 mb-4">Experts agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate information about their expertise and experience</li>
                <li>Deliver sessions professionally and punctually</li>
                <li>Maintain confidentiality of user information</li>
                <li>Comply with our Expert Code of Conduct</li>
                <li>Set fair and transparent pricing for their services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">5. Booking and Session Terms</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 Booking Process</h3>
              <p className="text-gray-700 mb-4">
                Users can browse expert profiles and book available sessions. Bookings are confirmed once payment is processed successfully.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">5.2 Session Conduct</h3>
              <p className="text-gray-700 mb-4">All participants must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Join sessions on time and prepared</li>
                <li>Maintain professional and respectful communication</li>
                <li>Not record sessions without explicit consent from all parties</li>
                <li>Not share or misuse confidential information discussed</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">5.3 Cancellation and Rescheduling</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cancellations made 24+ hours in advance: Full refund</li>
                <li>Cancellations made 12-24 hours in advance: 50% refund</li>
                <li>Cancellations made less than 12 hours in advance: No refund</li>
                <li>Expert no-shows: Full refund plus credit for future session</li>
                <li>Rescheduling is subject to expert availability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">6. Payment Terms</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Pricing</h3>
              <p className="text-gray-700 mb-4">
                Session prices are set by experts and displayed clearly before booking. All prices are in USD unless otherwise specified.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">6.2 Payment Processing</h3>
              <p className="text-gray-700 mb-4">
                Payments are processed securely through our third-party payment processor (Stripe). TapTime does not store credit card information. Platform fees are automatically deducted from expert earnings.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">6.3 Expert Payouts</h3>
              <p className="text-gray-700 mb-4">
                Experts receive payouts weekly for completed sessions, minus our platform fee (20% of session price). Payouts are processed via direct deposit or PayPal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">7. Intellectual Property</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">7.1 Platform Content</h3>
              <p className="text-gray-700 mb-4">
                All content on TapTime, including text, graphics, logos, and software, is the property of TapTime Inc. or its licensors and is protected by intellectual property laws.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">7.2 User Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you submit but grant TapTime a worldwide, non-exclusive, royalty-free license to use, modify, and display such content for platform operations and marketing.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">7.3 Session Content</h3>
              <p className="text-gray-700 mb-4">
                Information shared during sessions remains the intellectual property of the respective party. Recording sessions requires consent from all participants.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">8. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the platform for illegal or unauthorized purposes</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Harass, abuse, or harm other users or experts</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to circumvent the platform for direct transactions</li>
                <li>Use automated systems or bots to access the platform</li>
                <li>Interfere with or disrupt the platform's operation</li>
                <li>Impersonate others or create multiple accounts</li>
                <li>Share account credentials with others</li>
                <li>Engage in any activity that could damage our reputation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">9. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">9.1 Platform Role</h3>
              <p className="text-gray-700 mb-4">
                TapTime is a marketplace that facilitates connections. We are not responsible for the quality, accuracy, or outcomes of expert advice. Experts are independent contractors, not employees of TapTime.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">9.2 No Warranties</h3>
              <p className="text-gray-700 mb-4">
                The platform is provided "as is" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">9.3 Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, TapTime shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">10. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless TapTime, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from your use of the platform or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">11. Dispute Resolution</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">11.1 Informal Resolution</h3>
              <p className="text-gray-700 mb-4">
                We encourage you to contact us first to resolve any disputes informally through our support team.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">11.2 Arbitration</h3>
              <p className="text-gray-700 mb-4">
                Any disputes not resolved informally shall be resolved through binding arbitration in accordance with the American Arbitration Association rules.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">11.3 Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">12. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may terminate your account at any time through your account settings.
              </p>
              <p className="text-gray-700 mb-4">
                Upon termination, your right to use the platform will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">13. Modifications to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Material changes will be notified via email or platform notification. Your continued use after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">14. General Provisions</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">14.1 Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and TapTime.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">14.2 Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force.
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">14.3 No Waiver</h3>
              <p className="text-gray-700 mb-4">
                Our failure to enforce any provision shall not constitute a waiver of that provision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pt-6">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@taptime.com</p>
                <p className="text-gray-700"><strong>Address:</strong> TapTime Inc., 123 Innovation Drive, San Francisco, CA 94107</p>
                <p className="text-gray-700"><strong>Phone:</strong> 1-800-TAP-TIME</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage