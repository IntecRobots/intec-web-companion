const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800">
      <div className="w-full max-w-md bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-2">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nombre de usuario..."
              className="w-full rounded-lg bg-white p-3 text-lg text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña..."
              className="w-full rounded-lg bg-white p-3 text-lg text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 focus:outline-none">Iniciar sesión</button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm text-white">¿No tienes cuenta?</span>
          <a href="#" className="text-sm text-blue-200 hover:underline"> Contáctanos</a>
        </div>
      </div>
      <div className="text-center">
          <p className="text-xs text-white">&copy; 2024 Intec Robot</p>
        </div>
    </main>
  );
};

export default Home;

