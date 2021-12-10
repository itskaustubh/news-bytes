import React from "react";
import "../../styles/SideNews.scss";
import { parseTime } from "../../scripts/parseTime";

const SideNews = ({ article, index, mobileView, showImage }) => {
  const date = () => parseTime(article.publishedAt, true);

  if (article) {
    return (
      <div className={`fp-cell fp-cell--${index}`}>
        <div className="side-news-wrap">
          <div className="news-details">
            <thin-print>{`${article.author || article.source.name} ● ${date()}`}</thin-print>
            <a href={article.url} target="_blank" rel="noreferrer" className="news-source">
              {article.source.name}
            </a>
            <news-title>{article.title}</news-title>
            {!mobileView ? <img src={article.urlToImage} alt={"Image: " + article.title} /> : null}
          </div>
        </div>
        {mobileView ? (
          <div className="news-image">
            <img src={article.urlToImage} alt={"Image: " + article.title} />
          </div>
        ) : null}
      </div>
    );
  } else {
    return <></>;
  }
};

export default SideNews;
