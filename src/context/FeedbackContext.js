import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, perferendis",
      rating: 8,
    },
    {
      id: 2,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ab alias est aliquam! Quos mollitia iure velit repellendus vero officiis!",
      rating: 6,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae modi quo deserunt reiciendis! Suscipit soluta hic minus culpa, dolore quo in recusandae saepe, ipsam asperiores maxime, eius iusto deserunt.",
      rating: 9,
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
