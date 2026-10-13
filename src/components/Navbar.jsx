import { useUserStore } from '../stores/useUserStore';

export default function Navbar() {
  const { user } = useUserStore();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex justify-end items-center px-6 gap-3">
      <div className="text-right">
        <p className="font-bold text-teal-600 text-sm">{user.name}</p>
        <p className="text-xs text-gray-400">{user.role}</p>
      </div>
      <img src={user.avatar} alt="Avatar" className="w-9 h-9 rounded-full bg-amber-100" />
    </header>
  );
}
