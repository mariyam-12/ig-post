import React, { useState } from 'react';
import img1 from '../src/images/OIP.jpeg';
import img2 from  '../src/images/taylor-swift1.jpg'
import './App.css'; 

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [comment, setComment] = useState(''); 
  const [comments, setComments] = useState([]);
  const [show,setShow]= useState(false);
  

  const handleAdd = () => {
    setCounter(counter + 7);
  };

  const handleSubtract = () => {
    setCounter(counter - 7);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value); 
  };

  const handleComment = () => {
    if (comment.trim() !== '') { 
      setComments([...comments, comment]); 
      setComment('');
      setShow(false); 
    }
  };

  const togglevisibility = () => {
    setShow(!show); 
  };

  return (
  

    <div className="container">
      <div className="instagram-header">
        <ion-icon name="logo-instagram"></ion-icon> 
        <p>Instagram</p>
      </div>

      <h1>posts</h1>

      <div className="post-header">
        <img src={img1} alt="User" />
        <h1>nancy.drew</h1>
      </div>

      <img src={img1} alt="Post Image" className="post-image" />
      

      <div className="post-actions">
        <button onClick={handleAdd}><ion-icon id='icon' name="heart-outline"></ion-icon></button>
        <button onClick={handleSubtract}><ion-icon id='icon' name="heart-dislike-outline"></ion-icon></button>
        <button onClick={togglevisibility}><ion-icon id='icon' name="chatbubble-outline"></ion-icon></button>
        <div className="comment-header">
        <img src={img2} alt="User" />
        <h2 id="display">Liked by taylor_swift and {counter} others</h2>
      </div>

      {show && (
        <div className="comments">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
          /> 
          <button onClick={handleComment}><ion-icon id='icon' name="add-circle-outline"></ion-icon></button>
        </div>
      )}

      <div className="comment-list">
        {comments.map((cmt, index) => (
          <p key={index}>{cmt}</p>
        ))}
      </div>
     
    </div>
    </div>
  );
};

export default Counter;
