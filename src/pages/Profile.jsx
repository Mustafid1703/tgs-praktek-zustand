import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';

export default function Profile() {
  const { user } = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-lg space-y-4">
     
      <div>
        <p className="text-xs text-gray-400">Email</p>
        <p className="text-sm">{user.email}</p>
      </div>
      <div>
        <p className="text-xs text-gray-400">Bio</p>
        <p className="text-sm">{user.bio}</p>
      </div>
      <button
        onClick={() => navigate('/profile/edit')}
        className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
      >
        Edit Profile
      </button>
    </div>
  );
}