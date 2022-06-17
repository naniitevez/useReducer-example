import React from "react";
import { setFavouriteCats } from "../../../data/cats/cat.action";
import { setInLocalStorage } from "../../../data/cats/cat.api";
import { useAppcontext } from "../../../hooks/useAppcontext";

interface CatItemProps {
  id: string;
  tags: string[];
  isFavourite: boolean;
}

const CatItem: React.FC<CatItemProps> = ({ id, tags, isFavourite }) => {
  const { state, dispatch } = useAppcontext();

  const handleOnClick = (id: string) => {
    dispatch(setFavouriteCats(id));
    // setInLocalStorage(id)
  };

  return (
    <div className="cat-component">
      <div className="image-container">
        <img src={`https://cataas.com/cat/${id}`} />
      </div>
      <div className="cat-tags_container">
        {tags &&
          tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
      </div>
      <div className="add-as-favourite">
        {!isFavourite && (
          <button onClick={() => handleOnClick(id)}>Add Favourite</button>
        )}
      </div>
    </div>
  );
};

export default CatItem;
