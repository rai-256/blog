export function SiteHeader() {
  return (
    <header className="flex items-center justify-between bg-sky-200 text-black p-0 h-13">
      <h1 className="text-2xl">rai-blog</h1>
      <nav className="flex-grow h-full">
        <ul className="flex justify-center h-full w-full">
          <SiteHeaderBtn href="/" text="Home1" />
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
        className="h-full w-full flex items-center justify-center hover:opacity-75 hover:bg-sky-300 transition-colors duration-500 ease-linear"
        href={href}
      >
        {text}
      </a>
    </li>
  );
};

const LoginBtn = () => {
  return (
    <div className="text-center pr-7">
      <a href="/login" className="m-4">
        login
      </a>
    </div>
  );
};
