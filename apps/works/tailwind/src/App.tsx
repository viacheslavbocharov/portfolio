import './App.css';

function App() {
  return (
    <>
      {/* header */}
      <header className="px-2 border-b flex items-center justify-between">
        <a
          href="#"
          className="uppercase text-3xl font-bold text-purple-500 font-bitcount"
        >
          webDev
        </a>
        <nav className="flex">
          <ul className="text-gray-500 font-semibold inline-flex items-center">
            <li>
              <a href="#" className="inline-block py-3 px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-3 px-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="inline-block py-3 px-2">
                Contact
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* breadcrumbs */}
        <div>
          <div className="mx-4 py-4 overflow-auto whitespace-nowrap flex">
            <a href="#" className="text-gray-600 hover:text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
            <span className="mx-2 text-gray-500">&gt;</span>
            <a href="#" className="text-gray-600 hover:text-gray-700">
              News
            </a>
            <span className="mx-2 text-gray-500">&gt;</span>
            <a href="#" className="text-gray-600 hover:text-gray-700">
              Teck
            </a>
          </div>
        </div>
        {/* form  */}
        <div className="my-5">
          <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
            Subscribe
          </h5>
          <p className="text-gray-600 mb-4">Subcribe to newslatter</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-700 bg-gray-100 p-2 w-full border hover:border-gray-600"
          />
        </div>
      </main>
      {/* footer */}
      <footer className="border-t mt-10 py-10 px-2">
        <div>
          <div>
            <h6 className="font-semibold text-gray-700 mb-4">Campany</h6>
            <ul className='flex space-x-4 w-1/2'>
              <li>
                <a
                  href="#"
                  className="text-gray-500 py-2 hover:text-gray-600 w-1/2"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 py-2 hover:text-gray-600 w-1/2"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
