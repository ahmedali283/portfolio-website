import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container-custom max-w-4xl">
        <Link href="/" className="text-accent hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-secondary space-y-6">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              At KonvertPro, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data includes first name, last name.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li>Usage Data includes information about how you use our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide the services you have requested.</li>
              <li>To improve our website and customer experience.</li>
              <li>To communicate with you regarding your inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
