import React from 'react';

const Post = ({post}) => {
  return (
    <div className="post">
      <div className="post__image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post__info">
        <p className="post__info__date">{post.date}</p>
        <h4 className="post__info__title">{post.title}</h4>
        <p className="post__info__desc">
          {post.desc}
        </p>
        <button className="post__info__btn">Read More</button>
      </div>
    </div>
  );
}

export default Post
