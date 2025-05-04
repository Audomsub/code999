import { Link } from "react-router-dom";
import { Article } from "../../mock/mock.wh3";

type ArticleProps = {
  blog: Article;
};

function Item({ blog }: ArticleProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg p-6 rounded-lg mb-6 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-2">
        <Link to={`/blog/${blog.id}`} className="hover:underline">
          {blog.title}
        </Link>
      </h2>
      <p className="text-sm opacity-90">
        Click to read more about this article.
      </p>
    </div>
  );
}

export default Item;