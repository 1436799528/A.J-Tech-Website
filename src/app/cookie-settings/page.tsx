
'use client';

import { useState, useEffect } from 'react';

export default function CookieSettingsPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Cookie Settings</h1>
        <div className="prose prose-lg max-w-none prose-h2:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-base prose-li:text-base text-muted-foreground space-y-6">
          <p>Last Updated: {currentDate}</p>

          <section>
            <h2>Our Use of Cookies</h2>
            <p>
              At AJ Tech Solutions, we believe in transparency and simplicity. Our website uses a minimal number of cookies to provide you with the best possible user experience. We do not use cookies to track your personal information or for advertising purposes.
            </p>
          </section>

          <section>
            <h2>What is a Cookie?</h2>
            <p>
              A cookie is a small text file that a website stores on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </section>
          
          <section>
            <h2>Functional Cookies (The Only Cookies We Use)</h2>
            <p>
              We use one type of cookie on this website: a functional cookie.
            </p>
            <ul>
              <li>
                <strong>`sidebar_state` Cookie:</strong> This cookie is used to remember whether you have left the sidebar menu open or closed. It stores a simple "true" or "false" value. Its sole purpose is to maintain the user interface state you prefer during your session and for future visits. It does not contain any personal information and is not used for any other purpose.
              </li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Cookies</h2>
            <p>
              We do not use any third-party cookies on our website. This means we do not embed services that would place tracking cookies from advertisers or analytics providers on your device.
            </p>
          </section>

          <section>
            <h2>Your Choices</h2>
            <p>
              Because we only use a strictly necessary functional cookie, there is no mechanism to opt-out. This cookie is essential for the website's user interface to function as intended. If you wish to remove this cookie, you can clear it from your browser's settings, but please note that the sidebar's state will no longer be remembered across your sessions.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at <a href="mailto:a.j.engr.tech@gmail.com">a.j.engr.tech@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
