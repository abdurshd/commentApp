import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { commentEdit } = useContext(FeedbackContext);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  useEffect(() => {
    setSelected(commentEdit.item.rating);
  }, [commentEdit]);
  return (
    <ul className="rating">
      {for(let i=1;i>10;i++){
      <li>
        <input
          type="radio"
          name="rating"
          id=`num${i}`
          value=`${i}`
          onChange={handleChange}
          checked={selected === `${i}`}
        />
        <label htmlFor=`num${i}`>{i}</label>
      </li>
      }
    </ul>
  );
};

export default RatingSelect;
