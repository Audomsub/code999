import { useParams } from "react-router-dom";
import { articles } from "../../mock/mock.wh3";
import { Article } from "../../mock/mock.wh3";
import Detail from "../detail";

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const article: Article | undefined = articles.find((b) => b.id === Number(id));

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg">
      {article ? (
        <Detail article={article} />
      ) : (
        <div className="text-center text-gray-700 text-xl font-semibold">
          Article not found.
        </div>
      )}
    </div>
  );
}

export default DetailPage;