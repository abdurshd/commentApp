import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "I really like this product and if something happen mine next time also want to buy it. It comes even free charger",
      rating: 10,
    },
    {
      id: 2,
      text: "I have tried different types of bookreaders. The fact that this product is way cheaper than Amazon Kindle or Crema makes it it more desirable. However, low price comes with several small irritating qualities!",
      rating: 6,
    },
    {
      id: 3,
      text: "Touch is working perfectly, online synchronizing works seamless too.",
      rating: 9,
    },
    {
      id: 4,
      text: "Before buying this i was thinking a lot whether to buy it or not. Bcoz i already had an old Kindle. But even after buying that feeling didn't disappear. Maybe i didn'tneed to buy this, or maybe it is better than old kindle with vulnerable battery life?",
      rating: 6,
    },
    {
      id: 5,
      text: "Perfecto! Gracias Muchas @#$@$",
      rating: 6,
    },
    {
      id: 6,
      text: "I would be more happy if this reader starts supporting pdf file format too. Plus, would be great if it is possible to send books through email without connecting the cable.",
      rating: 8,
    },
  ]);

  const [commentEdit, setCommentEdit] = useState({
    item: {},
    edit: false,
  });

  //delete comment
  const deleteComment = (id) => {
    if (window.confirm("Are you sure to delete this comment?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //edit comment
  const editComment = (item) => {
    setCommentEdit({
      item,
      edit: true,
    });
  };

  //update comment
  const updateComment = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  //Add comment
  const addComment = (newComment) => {
    newComment.id = uuidv4();
    setFeedback([newComment, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteComment,
        addComment,
        editComment,
        commentEdit,
        updateComment,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
