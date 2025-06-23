import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;
  return (
    <nav className="w-64 bg-white border-r">
      <div className="p-6 font-bold text-xl">Dashboard</div>
      <ul>
        <li>
          <Link href="/tvs">
            <a className={`block px-6 py-3 ${isActive('/tvs') ? 'bg-gray-200' : ''}`}>
              Televisões
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
