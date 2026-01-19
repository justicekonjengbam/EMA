import React from 'react'
import { news } from '../data/news'
import '../styles/pages.css'

function News() {
  const pinnedNews = news.filter(item => item.pinned)
  const regularNews = news.filter(item => !item.pinned)

  return (
    <div className="page news-page">
      <h1>News & Updates</h1>
      <p className="page-intro">
        Stay updated with the latest announcements, achievements, and events from EMA Lab.
      </p>

      {pinnedNews.length > 0 && (
        <section className="pinned-news">
          <h2>📌 Pinned</h2>
          {pinnedNews.map(item => (
            <article key={item.id} className="news-item pinned">
              <div className="news-header">
                <h3>{item.title}</h3>
                <span className="news-date">{item.date}</span>
              </div>
              <p className="news-content">{item.content}</p>
            </article>
          ))}
        </section>
      )}

      <section className="regular-news">
        {regularNews.map(item => (
          <article key={item.id} className="news-item">
            <div className="news-header">
              <h3>{item.title}</h3>
              <span className="news-date">{item.date}</span>
            </div>
            <p className="news-content">{item.content}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default News
