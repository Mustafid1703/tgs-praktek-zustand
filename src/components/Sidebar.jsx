import { Link } from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';

export default function Sidebar() {
  const { user } = useUserStore();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-4">
      <div>
        <div className="flex items-center gap-2 mb-8 font-bold text-lg">
          <span className="bg-black text-white px-2 py-1 rounded">My</span> Dashboard
        </div>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded font-medium">Dashboard</Link>
          <Link to="/profile" className="p-2 hover:bg-gray-100 rounded text-gray-600">Profile</Link>
          <Link to="/stats" className="p-2 hover:bg-gray-100 rounded text-gray-600">Statistik</Link>
        </nav>
      </div>
      <div className="text-xs text-teal-600 truncate">{user.email}</div>
    </aside>
  );
}