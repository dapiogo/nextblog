import Navigation from 'components/Navigation';

export default function Layout({ children }) {
  return (
    <div className="p-10 font-mono max-w-screen-xl mx-auto">
      <Navigation />
      <main className="bg-gray-200 p-5">{children}</main>
      <footer className="bg-blue-400 text-gray-100 text-center">{new Date().getFullYear()}</footer>
    </div>
  );
}
