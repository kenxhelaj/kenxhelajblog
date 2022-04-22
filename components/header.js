import Link from 'next/link';
export function Header() {
  return (
    <div className="flex items-center justify-between max-w-3xl px-8 mx-auto py-4">
      <Link href="/">
        <a className="block font-bold text-lg">Ken Xhelaj</a>
      </Link>
      <a target="_blank" href="" rel="noopener">
        Follow Me
      </a>
    </div>
  );
}
