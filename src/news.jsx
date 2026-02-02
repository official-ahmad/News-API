import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./news.css";
import { IoSearchOutline } from "react-icons/io5";

// AB YE LINK AAPKE BACKEND KA HAI
// Localhost par check karne ke liye: http://localhost:5000/api/articles/live
// Jab live deploy karenge to localhost ki jagah live URL aa jayega
const backendUrl = "http://localhost:5000/api/articles/live-news";

function News() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);

  async function fetchNews() {
    try {
      // Direct NewsAPI ki jagah apne backend ko call kar rahay hain
      const res = await fetch(backendUrl);
      const data = await res.json();

      if (data.success && data.articles) {
        // Sirf wo articles filter kar rahay hain jin ki image mojood ho
        const filteredArticles = data.articles.filter(
          (article) => article.urlToImage && article.urlToImage.trim() !== "",
        );
        setNews(filteredArticles);
      }
    } catch (error) {
      console.error("Error fetching news from backend:", error);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  function changeHandler(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <div className="news-header">
        <h1 className="api">News API</h1>
        <div className="search-container">
          <IoSearchOutline className="search-icon" />
          <input
            type="search"
            placeholder="Search News"
            value={query}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="news">
        {news
          .filter((meriNews) => {
            return meriNews.title.toLowerCase().includes(query.toLowerCase());
          })
          .map((meriNews, index) => (
            <Card key={index} {...meriNews} />
          ))}
      </div>
    </div>
  );
}

export default News;
