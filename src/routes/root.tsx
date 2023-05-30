interface RootProps {
  name?: string;
}

function Root(prop: RootProps) {
  return (
    <>
      <div id="sidebar" className="flex items-center gap-2 py-4 border-solid">
        <h1 className="text-black">Sidebar</h1>
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
            <button type="submit">New</button>
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
