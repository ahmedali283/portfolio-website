import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 container-custom py-24 max-w-2xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Contact Us</h1>
        <p className="text-secondary text-center mb-12 text-lg">
          Have a question or want to learn more about our automated booking solutions? We'd love to hear from you.
        </p>

        <div className="bg-divider/20 border border-divider/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-black/20 border border-divider rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/20 border border-divider rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-black/20 border border-divider rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-gradient-to-r from-accent to-accent-teal text-background font-bold py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
