import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p>
                By accessing our website, booking an appointment, or using our services, you agree to comply with 
                these Terms and Conditions ("Terms"). Timeless Aesthetic ("Company," "we," "us," or "our") operates 
                in accordance with these Terms to ensure a transparent and satisfactory client experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Timeless Aesthetic</strong></p>
                <p>Incorporated: 2022</p>
                <p>Type: Aesthetic & Cosmetic Service Provider</p>
                <p>Address: 2nd Floor, Ameya One, Golf Course Road, Sector 42, Gurgaon, Haryana 122022</p>
                <p>Contact: +91 9654009966 | info@timelessaesthetic.in</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
              <p>We provide a wide range of professional aesthetic and wellness services, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Skin rejuvenation and anti-aging treatments</li>
                <li>Laser hair removal and skincare therapies</li>
                <li>Botox, fillers, and cosmetic dermatology</li>
                <li>Body contouring and weight management solutions</li>
                <li>Hair restoration and scalp treatments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Appointments and Bookings</h2>
              <p>
                When you Book Your Appointment with Timeless Aesthetic (online, via call, or in person):
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Appointment confirmations will be sent via email or WhatsApp</li>
                <li>Rescheduling or cancellations should be made at least 24 hours in advance</li>
                <li>Late arrivals may result in reduced treatment time or rescheduling</li>
                <li>Missed appointments without notice may incur cancellation charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information about your health and medical history</li>
                <li>Follow pre- and post-treatment care instructions provided by our specialists</li>
                <li>Inform our staff of any allergies, sensitivities, or medications</li>
                <li>Make payments as per agreed packages and treatment terms</li>
                <li>Respect the privacy and professionalism of our staff</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payments and Refunds</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>All service charges and consultation fees must be paid in full before or at the time of service</li>
                <li>Advance payments are non-transferable</li>
                <li>Refunds are only applicable in case of medical contraindications verified by our doctors</li>
                <li>Discounts and offers are subject to change without prior notice</li>
                <li>Payments should be made only through authorized company channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
              <p>
                All treatments at Timeless Aesthetic are performed by qualified professionals using approved 
                products and technologies. However, individual results may vary based on skin type, age, and 
                medical history. We do not guarantee identical outcomes for every client.
              </p>
              <p>
                Clients are advised to consult our certified practitioners before undergoing any treatment. 
                The company will not be held liable for complications arising from undisclosed medical conditions 
                or failure to follow care instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p>
                All website content, logos, service descriptions, images, and promotional materials are the 
                intellectual property of Timeless Aesthetic. Unauthorized use, reproduction, or modification 
                of this content is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                Timeless Aesthetic shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adverse reactions caused by undisclosed allergies or medical conditions</li>
                <li>Delays due to equipment maintenance or unforeseen technical issues</li>
                <li>Results differing from client expectations</li>
                <li>Third-party product or service failures</li>
                <li>Force majeure events such as natural disasters or pandemics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Privacy and Data Protection</h2>
              <p>
                We value your privacy. All client data, including health information and personal details, 
                is kept confidential and used solely for providing services and improving client experience. 
                We comply with all applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <p>
                In the event of any disputes, both parties agree to attempt resolution through:
              </p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Informal discussions and good faith negotiations</li>
                <li>Mediation by a neutral third party if required</li>
                <li>Arbitration under the Arbitration and Conciliation Act, 2015</li>
                <li>Courts in Gurgaon, Haryana shall have exclusive jurisdiction</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Amendments</h2>
              <p>
                These Terms may be updated periodically to reflect changes in our policies, services, or 
                legal obligations. Updated terms will be posted on our website, and continued use of our 
                services constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>For questions regarding these Terms, please contact us:</p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Timeless Aesthetic</strong></p>
                <p>Client Relations Department</p>
                <p>Email: info@timelessaesthetic.in</p>
                <p>Phone: +91 9654009966</p>
                <p>Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
