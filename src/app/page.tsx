import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-900 container mx-auto px-4 py-8">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="flex justify-between items-center">
          <div id="branding">
            <h1 className="text-xl font-bold">RWU Comsc230 Web Design</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 pr-4"> {/* Added pr-4 for right padding */}
              <li>
                <a href="/" className="text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white">About</a>
              </li>
              <li>
                <a href="/services" className="text-white">Services</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Showcase Section */}
      <section id="showcase" className="py-8 bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Affordable Professional Web Design</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-4 bg-gray-800 text-white">
        <div className="flex justify-center items-center">
          <h1 className="text-xl mr-4">Subscribe To Our Newsletter</h1>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email..."
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Boxes Section */}
      <section id="boxes" className="py-8 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="box text-center bg-white rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/img/logo_html.png" alt="HTML5 Logo" width={100} height={100} />
            <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">HTML5 Markup</h3>
            <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="box text-center bg-white rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/img/logo_css.png" alt="CSS3 Logo" width={100} height={100} />
            <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">CSS3 Styling</h3>
            <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="box text-center bg-white rounded-lg p-6 flex flex-col justify-center items-center">
            <Image src="/img/logo_brush.png" alt="Graphic Design Logo" width={100} height={100} />
            <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">Graphic Design</h3>
            <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} RWU Comsc230 Web Design</p>
      </footer>
    </div>
  );
}
