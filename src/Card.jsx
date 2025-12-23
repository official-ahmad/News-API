import React from "react";

function Card({
  title,
  author,
  description,
  publishedAt,
  content,
  url,
  urlToImage,
}) {
  return (
    <div className="card">
      <img
        src={urlToImage}
        alt="News"
        onError={(e) => {
          e.target.src =
            "https://i.insider.com/692e03407ecd1d1da662b675?width=1024&format=jpeg";
        }}
      />
      <div className="card-content">
        <h2> {author}</h2> {/* Author */}
        <h4>Title: {title}</h4> {/* Title */}
        <p>
          <strong>Description:</strong> {description}
        </p>{" "}
        {/* Description */}
        <h4>
          {" "}
          <span style={{ fontWeight: "normal" }}>Published:</span>
          {publishedAt}
        </h4>{" "}
        {/* Published At */}
        <p>
          <strong>Content:</strong> {content}
        </p>{" "}
        {/* Content */}
      </div>
      <button>
        <a href={url} target="_blank" rel="noreferrer">
          Read More
        </a>
      </button>
    </div>
  );
}

export default Card;
