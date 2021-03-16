import Link from 'next/link';

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/about', label: 'O mnie', id: 2 },
  { path: '/projects', label: 'Projekty', id: 3 }
];

export default function Navigation() {
  return (
    <nav className="bg-blue-400 p-5 flex justify-center">
      {navLinks.map(({ path, label, id }) => (
        <Link href={path} key={id}>
          <a className=" shadow md:w-40 p-2 hover:bg-gray-200 m-2 text-center bg-white">{label}</a>
        </Link>
      ))}
    </nav>
  );
}
