'use client';

import { useState, useEffect } from 'react';

export default function TermsAndConditionsPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Terms and Conditions</h1>
        <div className="prose max-w-none prose-h2:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-sm prose-li:text-sm text-muted-foreground space-y-6">
          <p>Last Updated: {currentDate}</p>

          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By using our website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our website. We reserve the right to modify these terms at any time. All changes will be effective immediately upon posting to the website and, by continuing to use the website, you agree to be bound by the new terms.
            </p>
          </section>

          <section>
            <h2>2. Use of the Website</h2>
            <p>
              You agree to use this website only for lawful purposes. You may not use this website in any way that infringes on the rights of others, or that restricts or inhibits their use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
            </p>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, images, logos, and graphics, is the property of AJ Tech Solutions or its content suppliers and is protected by intellectual property laws. You may not reproduce, duplicate, copy, sell, or otherwise exploit any portion of the website without express written permission from us.
            </p>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              This website and its content are provided "as is." We do not warrant that the website will be uninterrupted or error-free. To the fullest extent permitted by law, AJ Tech Solutions will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
            </p>
          </section>

          <section>
            <h2>5. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company is based, without regard to its conflict of law principles.
            </p>
          </section>

           <section>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:a.j.engr.tech@gmail.com">a.j.engr.tech@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
