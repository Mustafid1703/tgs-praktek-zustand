import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';

export default function EditProfile() {
  const { user, updateProfile } = useUserStore();
  const [formData, setFormData] = useState({ ...user });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 max-w-md space-y-4">
      <h2 className="text-xl font-bold">Edit Profile</h2>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Nama</label>
        <input
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-teal-600"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Role</label>
        <input
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-teal-600"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Email</label>
        <input
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-teal-600"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Bio</label>
        <textarea
          rows={3}
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-teal-600"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-teal-600 text-white text-sm px-4 py-2 rounded hover:bg-teal-700 cursor-pointer">
        Simpan
      </button>
    </form>
  );
}