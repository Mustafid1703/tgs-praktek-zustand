
import { useState } from 'react';
import { useUserStore } from '../stores/useUserStore';

export default function Stats() {
  const { metrics, updateMetrics } = useUserStore();
  const [formData, setFormData] = useState({ ...metrics });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMetrics(formData);
    alert('Statistik berhasil diperbarui!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 max-w-md space-y-4">
      <h2 className="text-xl font-bold">Edit Statistik</h2>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Total Proyek</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-teal-600"
          value={formData.projects}
          onChange={(e) => setFormData({ ...formData, projects: Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Tugas Selesai</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-teal-600"
          value={formData.tasksDone}
          onChange={(e) => setFormData({ ...formData, tasksDone: Number(e.target.value) })}
        />
      </div>
      <div>
        <label className="text-xs text-gray-500 block mb-1">Status Akun</label>
        <div className="flex gap-4 mt-1 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="status"
              checked={formData.isActive === true}
              onChange={() => setFormData({ ...formData, isActive: true })}
            />
            Aktif
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="status"
              checked={formData.isActive === false}
              onChange={() => setFormData({ ...formData, isActive: false })}
            />
            Nonaktif
          </label>
        </div>
      </div>
      <button type="submit" className="bg-teal-600 text-white text-sm px-4 py-2 rounded hover:bg-teal-700 cursor-pointer">
        Update Stats
      </button>
    </form>
  );
}