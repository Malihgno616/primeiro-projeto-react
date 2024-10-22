import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
// import { Counter } from "./components/Counter/Counter";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/?offset=20"
      );
      const newsData = response.data;

      console.log(newsData); // Veja a estrutura aqui no console
      setNews(newsData.results); // Ajuste conforme a estrutura da resposta da API
    }

    loadNews();
  }, []);

  return (
    <>
      {/* <Counter/> */}
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height={80}
              width={80}
              radius={9}
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id} // Certifique-se de adicionar uma chave única
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                thumbnail={article.image_url}
              />
            );
          })
        )}
      </section>
    </>
  );
}
