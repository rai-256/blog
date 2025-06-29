export function SiteHeader() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-sky-600 to-blue-600 text-white p-4 h-16 shadow-xl border-b-2 border-sky-400">
      <h1 className="text-2xl font-semibold tracking-wide drop-shadow-lg">
        rai-blog
      </h1>
      <nav className="flex-grow h-full">
        <ul className="flex justify-center h-full w-full space-x-1">
          <SiteHeaderBtn href="/" text="Home" />
          <SiteHeaderBtn href="/post" text="記事" />
          <SiteHeaderBtn href="/game" text="ゲーム" />
          <SiteHeaderBtn href="/data" text="データ" />
          <SiteHeaderBtn href="/tool" text="ツール" />
        </ul>
      </nav>
      <LoginBtn />
    </header>
  );
}

const SiteHeaderBtn = ({ href, text }) => {
  return (
    <li className="flex-grow text-center w-full h-full">
      <a
        className="h-full w-full flex items-center justify-center px-4 py-2 rounded-md hover:bg-sky-500 hover:shadow-inner transition-all duration-200 ease-in-out font-medium drop-shadow-sm"
        href={href}
      >
        {text}
      </a>
    </li>
  );
};

const LoginBtn = () => {
  return (
    <div className="text-center">
      <a
        href="/login"
        className="px-4 py-2 bg-sky-500 hover:bg-sky-400 rounded-md shadow-md hover:shadow-lg transition-all duration-200 ease-in-out font-medium transform hover:-translate-y-0.5"
      >
        ログイン
      </a>
    </div>
  );
};
