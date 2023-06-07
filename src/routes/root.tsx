// interface RootProps {
//   name?: string;
// }

function Root() {
  return (
    <>
      <div id="sidebar" className="max-w-md">
        <h1 className="text-white">Hackuarium</h1>
        <div className="flex flex-col">
          <form id="search-form" role="search" className="relative">
            <input
              id="search-input"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="search-input"
              className="w-full px-4"
            />
            <div id="search-spinner" arial-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit" className="bg-teal-600">
              New
            </button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/cantact/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/cantact/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default Root;
