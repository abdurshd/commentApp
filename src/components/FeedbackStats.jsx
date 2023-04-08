import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  //Calculating average rating of comments
  let average =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Comments</h4>
      <h4>
        Average rating is: {isNaN(average.toFixed(1)) ? 0 : average.toFixed(1)}
      </h4>
    </div>
  );
};

export default FeedbackStats;
