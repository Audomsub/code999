import { Article } from "../../mock/mock.wh3";
import Item from "./item";

type ArticleListProps = {
  articles: Article[];
};

function List({ articles }: ArticleListProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((blog) => (
          <Item key={blog.id} blog={blog} />
        ))}
      </div>
    );
  }
  

export default List;
