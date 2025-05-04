import { Article } from "../mock/mock.wh3";

type BlogDetailProps = {
  article?: Article;
};

function Detail({ article }: BlogDetailProps) {
  if (!article) {
    return <p className="text-red-500 text-center">ไม่พบบทความ</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">{article.title}</h1>
      <p className="text-gray-800 leading-relaxed">{article.content}</p>
    </div>
  );
}


export default Detail;
