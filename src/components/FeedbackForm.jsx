import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [notice, setNotice] = useState("");
  const { addComment, commentEdit, updateComment } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (commentEdit.edit === true) {
      setBtnDisabled(false);
      setText(commentEdit.item.text);
      setRating(commentEdit.item.rating);
    }
  }, [commentEdit]);

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    if (textValue === "") {
      setBtnDisabled(true);
      setNotice(null);
    } else if (textValue !== "" && textValue.trim().length <= 10) {
      setNotice("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setNotice(null);
      setBtnDisabled(false);
    }
    setText(textValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newComment = {
        text,
        rating,
      };
      if (commentEdit.edit === true) {
        updateComment(commentEdit.item.id, newComment);
      } else {
        addComment(newComment);
      }
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your comment"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {notice && <div className="message">{notice}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
