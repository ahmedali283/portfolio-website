import Link from 'next/link'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container-custom max-w-4xl">
        <Link href="/" className="text-accent hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none text-secondary space-y-6">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on KonvertPro&apos;s website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
            <p>
              The materials on KonvertPro&apos;s website are provided on an &apos;as is&apos; basis. KonvertPro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
            <p>
              In no event shall KonvertPro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KonvertPro&apos;s website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
