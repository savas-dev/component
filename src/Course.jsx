import React from "react";

export const Course = (props) => {
  console.log(props);

  // const title = props.title
  // const description = props.description
  const { title, description, image } = props;

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="title">{title}</div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
};
