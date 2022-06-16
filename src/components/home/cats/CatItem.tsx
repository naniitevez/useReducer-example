import React from "react";
import { useAppcontext } from "../../../hooks/useAppcontext";

interface CatItemProps {
  id: string;
  tags: string[];
}

const CatItem: React.FC<CatItemProps> = ({ id, tags }) => {
  const { dispatch } = useAppcontext();

  const handleOnClick = (id:string) => {
    console.log(id)
  }

  return (
    <div className="cat-component">
      <div className="image-container">
        <img src={`https://cataas.com/cat/${id}`} />
      </div>
      <div className="cat-tags_container">
        {tags && tags.map((tag, index) => <div key={index}className="tag">{tag}</div>)}
      </div>
      <div className="add-as-favourite">
        <button onClick={() => handleOnClick(id)}>Add Favourite</button>
      </div>
    </div>
  );
};

export default CatItem;
