const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-12">
            {/* Sidebar Navigation - Left Side */}
            <aside className="hidden lg:block w-80 sticky top-24 h-fit">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">On this Page</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Introduction (Who we are)</a>
                  <a href="#who-covers" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Who this Policy covers</a>
                  <a href="#info-collect" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Information we collect</a>
                  <a href="#how-use" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• How we use personal information</a>
                  <a href="#share-info" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• When we share information</a>
                  <a href="#transfers" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• International transfers</a>
                  <a href="#rights" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Your choices & rights</a>
                  <a href="#retention" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Data retention</a>
                  <a href="#children" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Children's privacy</a>
                  <a href="#security2" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Security</a>
                  <a href="#cookies" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Cookies & similar technologies</a>
                  <a href="#reviews" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Reviews, profiles, and public content</a>
                  <a href="#third-party" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Third-party links and social features</a>
                  <a href="#payments" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Payments</a>
                  <a href="#classroom" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Classroom sessions, waitlists, NGOs & vouchers</a>
                  <a href="#recording" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Recording & transcripts</a>
                  <a href="#role" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Role of TapTime</a>
                  <a href="#changes" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Changes to this Policy</a>
                  <a href="#contact" className="block text-sm text-gray-600 hover:text-black transition-colors py-1">• Contact us</a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">TapTime.AI – Privacy Policy</h1>
              <button className="bg-[#efffba] text-black px-6 py-2 rounded-full font-medium text-sm mb-16 hover:bg-black hover:text-white transition-all">
                Download Document →
              </button>
          
              <div className="prose prose-lg max-w-none space-y-12">

                <section id="introduction">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">1. Introduction (Who we are)</h2>
              <p className="text-gray-700 mb-4">
                TapTime is an online learning marketplace that connects Users seeking education, advice, applications, and services from expert service providers ("Experts") or handpicked creators (referred to as "Teachers").
              </p>
              <p className="text-gray-700 mb-4">
                The Privacy Policy applies solely to data collected by us (both digital and postal) and is designed to inform you about our practices and the ways in which data is collected, used, shared, transferred, retained, and secured.
              </p>
            </section>

                <section id="who-covers">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">2. Who this Policy covers</h2>
              <p className="text-gray-700 mb-4">
                This Policy covers TapTime's processing of personal data about visitors and customers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Users:</strong> (Also "Clients" or "Members") Individuals or companies booking sessions</li>
                <li><strong>Visitors:</strong> Individuals who visit our Sites or Platforms or anyone consuming or browsing our content</li>
              </ul>
            </section>

                <section id="info-collect">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">3. Information we collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1. Information you provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Identifiers & contact:</strong> names, email, mobile number (including UIDF verification), country, timezone, username, zip-code, profile picture</li>
                <li><strong>Account & booking:</strong> login/device/browser, saved inquiries, billing, languages, user profile (ID forms), answers and status</li>
                <li><strong>Calendar & availability:</strong> availability you set in TapTime, personal connections to Google/Outlook/Zoom</li>
                <li><strong>Payments:</strong> payment method details and usage of said payment details as processed by our payment processor</li>
                <li><strong>Content & recordings:</strong> questions prior to sessions, any materials shared in a session, recordings/transcripts (if consented and enabled for a session), assignments and answers</li>
                <li><strong>Content from sessions:</strong> meeting minutes/AI background, time, duration), if a session is recorded or transcribed, this event, call characteristics content such as voice recordings, animations</li>
                <li><strong>Reviews & ratings:</strong> ratings, reviews, feedback, complaints and whistleblowing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2. Information collected automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Usage & device data:</strong> pages viewed, referrer, buttons/URLs, time on page, IP address, device/browser type, operating system</li>
                <li><strong>Tracking activities:</strong> page views</li>
                <li><strong>Cookies & similar tech:</strong> cookies, SDKs, pixels, and web beacons to keep you signed in, remember preferences, measure performance, analyze trends and deliver/personalize content. You can manage cookies in browser settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3. Information from third parties</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Calendar providers:</strong> if you connect Gmail, Outlook, or other calendars</li>
                <li><strong>Identity verifications:</strong> providers (background checks and full card numbers)</li>
                <li><strong>Marketing/Analytics partners:</strong> for campaign attribution and data insights</li>
                <li><strong>Social networks/content tools:</strong> like YouTube for embedded video to save time and costs referral programs</li>
                <li><strong>Law Enforcement:</strong> access your account when required by search warrants or court profiles</li>
              </ul>
            </section>

                <section id="how-use">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">4. How we use personal information</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">We process information for:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Provide and improve the Services:</strong> account creation, authentication (2019/2018), matching, search, enabling video sessions, calendar synchronization, notifications, newsletters, websites, security, fraud analysis</li>
                <li><strong>Operate transactions:</strong> pricing, taxes, commissions, refunds, and dispute resolution</li>
                <li><strong>Safety & integrity:</strong> verifying IDs, review suggestions, trust & safety reviews, decision-based detection, preventing malicious conduct</li>
                <li><strong>Communications:</strong> updates, reminders, receipts, alerts; marketing messages; customer support; polls/surveys/newsletters/messages (you can opt out anytime)</li>
                <li><strong>Business & analytics:</strong> usage patterns, conversions, effectiveness; user and product research (often in aggregated/de-identified forms)</li>
                <li><strong>Legal compliance:</strong> responding to legal requests; enforcing our Terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Legal bases where applicable (e.g., GDPR/UK GDPR):</h3>
              <p className="text-gray-700">
                performance of contract, legitimate interests (e.g., secure platform, product improvement), consent (e.g., marketing, recording); and legal obligations (e.g., tax reporting).
              </p>
            </section>

                <section id="share-info">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">5. When we share information</h2>
              
              <p className="text-gray-700 mb-4">We do not sell personal information. We share it only as described below:</p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Between users and experts:</strong> limited profile data to enable matching, bookings, and calendar integrations; payment processing; KYC, fraud prevention. These providers may process payments same to perform services (e.g., payment processing, analytics)</li>
                <li><strong>Service providers:</strong> comply with legal obligations; respond to lawful requests; prevent fraud/harm; enforce our Expert policies</li>
                <li><strong>Partners (for your request):</strong> if you ask us to connect you with a partner program, we share needed details for your enrollment</li>
                <li><strong>Business transfers/merger:</strong> acquisitions, financing, or sale of assets (information transferred subject to this Policy)</li>
                <li><strong>Legal & safety:</strong> to comply with law, court order, or to protect TapTime, our users, or others from harm or fraud</li>
                <li><strong>Aggregated/de-identified:</strong> for any sharing not covered above</li>
              </ul>
            </section>

            <section id="transfers">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">6. International transfers</h2>
              <p className="text-gray-700">
                We may store and process information in countries where TapTime entities or service providers are located. When moving we implement measures for your data to receive consistent levels of protection as in accordance with applicable laws and our policies, including standard contractual clauses and your access to those with a need to know.
              </p>
            </section>

            <section id="rights">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">7. Your choices & rights</h2>
              
              <p className="text-gray-700 mb-4"><strong>Depending on your location, you may have the right to:</strong></p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access, correct, or delete</strong> your personal information</li>
                <li><strong>Restrict/to withdraw consent:</strong> You may request a review of any automated processing & based on consent</li>
                <li><strong>Portability:</strong> request a copy in a machine-readable format</li>
                <li><strong>Marketing controls:</strong> opt out of marketing via the links in emails or control SMS or via settings</li>
                <li><strong>Cookie/tracking:</strong> manage browser and app settings for cookies/SDKs (may prevent features from working fully). See Push Notifications via device settings. To change these settings, please review our applicable Settings (OS) to submit a request and we will honor applicable data rights</li>
              </ul>
              
              <p className="text-gray-700 mt-4">
                To exercise rights, contact us at privacy@taptime.ai or in-product settings, where enabled. We may need to verify your identity before fulfilling certain requests, except to the extent required by applicable laws. You can also appeal subject to restrictions.
              </p>
            </section>

            <section id="retention">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">8. Data retention</h2>
              <p className="text-gray-700">
                We retain personal information to meet business and/or requirements, resolve disputes, prevent fraud, comply with legal obligations and for improved process reasons. Retention criteria (e.g., account/purchase, if needed to execute our services), we process the above factors. We will not retain your data for longer than necessary for the purposes set out in this agreement, and in required relative policies. Specific criteria (e.g., tax records/invoices, IP) available on request via privacy team.
              </p>
            </section>

            <section id="children">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">9. Children's privacy</h2>
              <p className="text-gray-700">
                TapTime is not directed to children. We do not knowingly collect personal information from anyone under 18. For those under 18, access requires the legal basis. If you believe a child provided information, contact privacy@taptime.ai and we will take appropriate steps to delete it.
              </p>
            </section>

            <section id="security2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">10. Security</h2>
              <p className="text-gray-700">
                We use administrative, technical, and physical safeguards designed to protect personal information (encryption in transit, access controls). No system is 100% secure; report any breach at help@taptime.ai. Post data breach, it may be that client's security incident affecting you.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">11. Cookies & similar technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies/SDKs/pixels to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stay logged in and remember preferences</li>
                <li>Measure site performance and improve UX</li>
                <li>Deliver relevant ads (with your consent)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control options via your browser/app settings. Some features may not work without certain cookies. See our Cookie Policy for details via cookie banner when text if you prefer a region policy.
              </p>
            </section>

            <section id="reviews">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">12. Reviews, profiles, and public content</h2>
              <p className="text-gray-700">
                Content you choose to share publicly (e.g., Expert profiles, reviews/ratings) becomes publicly visible to others and indexed by search engines. You can edit/delete certain publicly shared content via your profile/account.
              </p>
            </section>

            <section id="third-party">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">13. Third-party links and social features</h2>
              <p className="text-gray-700">
                Our Services may link to third-party sites or integrate third-party features. We don't control practices not governed by their policies, not ours. Review those policies before sharing information with them.
              </p>
            </section>

            <section id="payments">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">14. Payments</h2>
              <p className="text-gray-700">
                Payments are processed by our payment partners. TapTime does not store full card numbers. We require limited information related to KYC (payments) (e.g., dates, amounts) to fulfill bookings, issue refunds, and track reports.
              </p>
            </section>

            <section id="classroom">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">15. Classroom sessions, waitlists, NGOs & vouchers</h2>
              <p className="text-gray-700">
                Participation for group/classroom sessions is open to waitlist registers. Vouchers may be offered via enterprise partners. NGO vouchers may require validation of respective organizational credentials (if applicable).
              </p>
            </section>

            <section id="recording">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">16. Recording & transcripts</h2>
              <p className="text-gray-700">
                Recording/transcripts require prior consent from all participants (may vary across regions). Recording options generally become less available if sending metrics via opt-outs and certain Recording/Transcripts may be used to deliver your self experience via Reviews/score/key, compliance, and product initiatives.
              </p>
            </section>

            <section id="role">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">17. Role of TapTime</h2>
              <p className="text-gray-700">
                TapTime is a Controller for personal information you provide to use our marketplace. For certain regional services (e.g.) Expert Services such as expert counselling services connected with listed profiles. TapTime may also be a processor to firms responsible, forms processed directly via any associated within regions.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">18. Changes to this Policy</h2>
              <p className="text-gray-700">
                We may update this Policy from time to time. If we make material changes, we will notify you (for example, via email, product notice, or via posting) and update the "Effective date" above. Your continued use of the Services after an effective Policy constitutes acceptance.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pt-8">19. Contact us</h2>
              <p className="text-gray-700">
                Questions or requests about this Policy or your information?
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@taptime.ai
              </p>
            </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4ade80] rounded-full"></div>
              <span className="text-lg font-semibold">taptime</span>
            </div>
            
            <div className="grid grid-cols-3 gap-12">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>FAQ</li>
                  <li>Help</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Why TapTime?</li>
                  <li>Book Experts</li>
                  <li>Become Expert</li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                {/* Social icons would go here */}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
            <p>© 2024 TapTime, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPage