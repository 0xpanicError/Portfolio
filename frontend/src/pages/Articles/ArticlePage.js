import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default ArticlePage;
