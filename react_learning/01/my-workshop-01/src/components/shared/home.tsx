import { useState } from "react";
import { articles as allArticles, Article } from "../../mock/mock.wh3";
import SearchBar from "../shared/search";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-6 px-4 bg-gradient-to-r from-yellow-300 to-blue-400 min-h-screen rounded-lg shadow-lg">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Article List */}
      <div className="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">{article.title}</h2>
            <p className="text-gray-600 truncate">{article.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          onClick={() => setSelectedArticle(null)} // Close on click outside
        >
          <div
            className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full relative transition-transform duration-300 ease-in-out transform scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent close on card click
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg font-bold"
            >
              ×
            </button>
            <h1 className="text-3xl font-bold text-yellow-600 mb-6">{selectedArticle.title}</h1>
            <p className="text-gray-800 leading-relaxed">{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;