
import {useState} from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setError({ email: "", password: "" });

    if (!email.trim()) {
      setError((prevState) => ({
        ...prevState,
        email: "Email wajib diisi",
      }));
      return;
    }

    if (!/^[^\s@]+@student\.abudzar\.sch\.id$/i.test(email)) {
      setError((prevState) => ({
        ...prevState,
        email: "Email harus menggunakan @student.abudzar.sch.id",
      }));
      return;
    }

    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: "Password wajib diisi",
      }));
      return;
    }

    if (password.length < 5) {
      setError((prevState) => ({
        ...prevState,
        password: "Password minimal 5 karakter",
      }));
      return;
    }

    setIsLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    setTimeout(() => {
      setIsSuccess(true);
      setEmail("");
      setPassword("");

      setError({
        email: "",
        password: "",
      });

      console.log(payload);

      setIsLoading(false);
    }, 3000);
  }; 

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            {isSuccess && (
              <div className="max-w-md mx-auto mt-4 text-green-700 rounded-lg">
                Login successful
              </div>
            )}
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(error.email)}
              aria-describedby={error.email ? "email-error" : undefined}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {error.email && (
              <p id="email-error" className="text-red-500" role="alert">
                {error.email}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(error.password)}
              aria-describedby={error.password ? "password-error" : undefined}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            
            {error.password && (
              <p id="password-error" className="text-red-500" role="alert">
                {error.password}
              </p>
            )}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {isLoading ? ( <div className="animate-spin w-2 h-2 bg-white"></div>
            ) : ( 
                "Login"
                 )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;