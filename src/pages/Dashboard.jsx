import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';

export default function Dashboard() {
  const { user, metrics } = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Banner Sapaan */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 rounded-xl text-white shadow-md">
        <h1 className="text-2xl font-bold">
          Selamat datang kembali, <span className="text-indigo-400">{user.name}</span>
        </h1>
        <p className="text-slate-300 text-sm mt-1 font-light">{user.bio}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs border-t-4 border-t-indigo-500">
          <p className="text-xs font-bold text-slate-400 uppercase">TOTAL PROYEK</p>
          <p className="text-3xl font-extrabold text-slate-900 my-2">{metrics.projects}</p>
          <p className="text-xs text-slate-500">Proyek sedang berjalan</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs border-t-4 border-t-indigo-500">
          <p className="text-xs font-bold text-slate-400 uppercase">TUGAS SELESAI</p>
          <p className="text-3xl font-extrabold text-slate-900 my-2">{metrics.tasksDone}</p>
          <p className="text-xs text-slate-500">Terselesaikan bulan ini</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs border-t-4 border-t-indigo-500">
          <p className="text-xs font-bold text-slate-400 uppercase">POIN AKTIVITAS</p>
          <p className="text-3xl font-extrabold text-indigo-600 my-2">{metrics.points}</p>
          <p className="text-xs text-slate-500">Total poin akumulasi</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs border-t-4 border-t-indigo-500">
          <p className="text-xs font-bold text-slate-400 uppercase">STATUS AKUN</p>
          <div className="my-2">
            <span
              className={`inline-block text-sm font-bold px-3 py-1 rounded-full ${
                metrics.isActive
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-rose-100 text-rose-700'
              }`}
            >
              {metrics.isActive ? 'Aktif' : 'Nonaktif'}
            </span>
          </div>
          <p className="text-xs text-slate-500">Status ketersediaan Anda</p>
        </div>
      </div>

      {/* Action Banner */}
      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-bold text-indigo-950">Manajemen Profil Real-time</h3>
          <p className="text-xs text-indigo-700/80 mt-0.5">
            Perubahan profil pada halaman Edit Profil akan langsung terupdate di seluruh layout secara otomatis.
          </p>
        </div>
        <button
          onClick={() => navigate('/profile/edit')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition"
        >
          Edit Profil Sekarang
        </button>
      </div>
    </div>
  );
}