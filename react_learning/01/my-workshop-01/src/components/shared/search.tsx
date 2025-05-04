type SearchBarProps = {
    searchTerm: string;
    onSearchChange: (term: string) => void;
  };
  
  function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
    return (
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหาบทความ..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-4 pl-12 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
            />
          </svg>
        </div>
      </div>
    );
  }
  
  export default SearchBar;