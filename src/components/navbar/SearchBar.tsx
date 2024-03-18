export const SearchBar = () => {
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <input 
        type="search" 
        placeholder="Buscar..." 
        className="px-4 py-2 bg-gray-700 bg-opacity-50 text-white rounded-md border border-transparent focus:border-white focus:bg-opacity-100 focus:outline-none"
        style={{
          boxShadow: '0 2px 4px rgba(255, 255, 255, 0.2)' // Box-shadow suave de color blanco
        }}
      />
    </div>
  );
};
