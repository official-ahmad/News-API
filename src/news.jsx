import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./news.css";
import { IoSearchOutline } from "react-icons/io5";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1d9e1fa7b825410faa1975e4bd96bd3c";

function News() {
  const [query, setQuery] = useState("");

  const [news, setNews] = useState([]);

  async function fetchNews() {
    try {
      const res = await fetch(url);
      const data = await res.json();

      const filteredArticles = data.articles.filter(
        (article) => article.urlToImage && article.urlToImage.trim() !== ""
      );

      setNews(filteredArticles);
    } catch (error) {
      console.error("Error fetching news:", error);
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
            // return meriNews.title.toLowerCase().startsWith(query);
            return meriNews.title.toLowerCase().includes(query);
          })
          .map((meriNews, index) => (
            <Card key={index} {...meriNews} />
          ))}
      </div>
    </div>
  );
}

export default News;
