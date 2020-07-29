import React from "react";

const Like = (props) => {
  let likeClass = "fa fa-heart";
  if (!props.movie.liked) likeClass += "-o";
  return (
    <i
      className={likeClass}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={() => props.onLike(props.movie)}
    ></i>
  );
};

export default Like;
