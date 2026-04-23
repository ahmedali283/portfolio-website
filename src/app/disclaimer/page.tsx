import Footer from '@/components/Footer'

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 container-custom py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Disclaimer</h1>
        <div className="prose prose-invert max-w-none text-secondary space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Website Disclaimer</h2>
          <p>
            The information provided by SkaleUp ("we," "us," or "our") on this website is for general informational purposes only. 
            All information on the site is provided in good faith, however, we make no representation or warranty of any kind, 
            express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Professional Disclaimer</h2>
          <p>
            The site cannot and does not contain legal, business, or specific technical advice tailored to your exact situation. 
            The technical and business information is provided for general informational and educational purposes only and is not a substitute for professional advice. 
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. 
            We do not provide any kind of legal or dedicated business advice. The use or reliance of any information contained on the site is solely at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Results and Metrics</h2>
          <p>
            Any case studies, metrics, performance statistics, and results presented on this website are illustrative of potential outcomes 
            and past performance. They are not intended to represent or guarantee that anyone will achieve the same or similar results. 
            Individual results may vary significantly based on a variety of factors, including the specific APIs integrated, target audience, 
            market conditions, and individual business execution.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
