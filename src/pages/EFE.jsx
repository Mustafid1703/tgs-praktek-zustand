import { useEffect } from "react";
import { useForm } from "react-hook-form";

function EmployeeFormExercise() {
  const { register, handleSubmit, reset, getValues, resetField, formState: {
  errors
}} = useForm({  
  mode: 'onChange'
});

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleCekPassword = () => {
  const password = getValues("password");
  console.log(password); 
 
};
  
//   useEffect(() => {
//     setValue("nama", "Muhamad Mustafid Ilmi");
//     setValue("alamat", "Bogor");
//     setValue("nomor_telepon", "6281212343421");
//     setValue("nik", "1234567890123456");
//     setValue("pekerjaan", "swasta");
//     setValue("status", "belum_menikah");
//     setValue("umur", 24);
//     setValue("password", "Abudz@r1");
//   }, [setValue]);

  return (
    <section className="w-screen min-h-screen flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto p-6 space-y-4 bg-white rounded-lg shadow"
      >
        {/* Field 1: Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            {...register("nama", {
              required: "Nama wajib diisi",
              maxLength: {
                value: 49,
                message: "Nama harus kurang dari 50 karakter",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Masukkan nama lengkap"
          />
          {errors.nama && (
            <p className="text-red-500 text-xs mt-1">{errors.nama.message}</p>
          )}
        </div>

        {/* Field 2: Alamat (Textarea) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alamat
          </label>
          <textarea
            {...register("alamat", {
              required: "Alamat wajib diisi",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Masukkan alamat domisili"
          />
          {errors.alamat && (
            <p className="text-red-500 text-xs mt-1">
              {errors.alamat.message}
            </p>
          )}
        </div>

        {/* Field 3: Nomor Telepon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nomor Telepon
          </label>
          <input
            {...register("nomor_telepon", {
              required: "Nomor telepon wajib diisi",
              minLength: {
                value: 11,
                message: "Nomor telepon minimal 11 digit",
              },
              maxLength: {
                value: 13,
                message: "Nomor telepon maksimal 13 digit",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Nomor telepon hanya boleh angka",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            placeholder="Contoh: 08123456789"
          />
          {errors.nomor_telepon && (
            <p className="text-red-500 text-xs mt-1">
              {errors.nomor_telepon.message}
            </p>
          )}
          
        </div>

        {/* Field 4: NIK */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NIK
          </label>
          <input
            {...register("nik", {
              required: "NIK wajib diisi",
              minLength: {
                value: 16,
                message: "NIK harus 16 digit",
              },
              maxLength: {
                value: 16,
                message: "NIK harus 16 digit",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "NIK hanya boleh berisi angka",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nomor Induk Kependudukan"
          />
          {errors.nik && (
            <p className="text-red-500 text-xs mt-1">{errors.nik.message}</p>
          )}
        </div>

        {/* Field 5: Pekerjaan (Select) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pekerjaan
          </label>
          <select
            {...register("pekerjaan", {
              required: "Silakan pilih pekerjaan",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih Pekerjaan</option>
            <option value="pns">PNS</option>
            <option value="swasta">Pegawai Swasta</option>
          </select>
          {errors.pekerjaan && (
            <p className="text-red-500 text-xs mt-1">
              {errors.pekerjaan.message}
            </p>
          )}
        </div>

        {/* Field 6: Status (Radio Button) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status Pernikahan
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                {...register("status", {
                  required: "Pilih salah satu status pernikahan",
                })}
                type="radio"
                value="menikah"
              />
              <span className="text-sm text-gray-700">Menikah</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register("status", {
                  required: "Pilih salah satu status pernikahan",
                })}
                type="radio"
                value="belum_menikah"
              />
              <span className="text-sm text-gray-700">Belum Menikah</span>
            </label>
          </div>
          {errors.status && (
            <p className="text-red-500 text-xs mt-1">
              {errors.status.message}
            </p>
          )}
        </div>

        {/* Field 7: Umur */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Umur
          </label>
          <input
            type="number"
            {...register("umur", {
              required: "Umur harus diisi",
              max: {
                value: 63,
                message: "Umur tidak boleh lebih dari 63",
              },
              min: {
                value: 1,
                message: "Umur tidak boleh kurang dari 1",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contoh: 25"
          />
          {errors.umur && (
            <p className="text-red-500 text-xs mt-1">
              {errors.umur.message}
            </p>
          )}
     
        </div>

        {/* Field 8: Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password harus diisi",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                message: "Harus mengandung angka, huruf kapital, dan simbol",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <button 
          type="button "
          onClick={handleCekPassword}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Cek Password
          </button>
      
        </div>

        

        <button
          className="w-full flex justify-center py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          Simpan Data
        </button>
      </form>
    </section>
  );
}

export default EmployeeFormExercise;