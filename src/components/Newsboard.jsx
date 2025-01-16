
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsboard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchArticles = async () => {
    const baseUrl = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    const url = `${baseUrl}&page=${page}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`;

    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      }
      const data = await res.json();

      // Filter articles for valid ones
      const validArticles = data.articles.filter(
        (article) =>
          article.title && article.description && article.url && article.urlToImage
      );

      if (validArticles.length === 0) {
        setError('No valid articles found.');
      } else {
        setArticles(validArticles);
        setTotalResults(data.totalResults || 0);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1); // Reset to the first page on category or search change
    fetchArticles();
  }, [category, searchQuery]);

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const handleNextPage = () => {
    if (page < Math.ceil(totalResults / 10)) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return <h2 className="text-center">Loading articles...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger">{error}</h2>;
  }

  return (
    <div className="scrollable">
      <h2 className="text-center text-white">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : <h2 className='text-center text-white'>Latest <span className='badge bg-danger'>News</span></h2>}
      </h2>
      {articles.length > 0 ? (
        <>
          <div className="d-flex flex-wrap justify-content-center">
            {articles.map((a, index) => (
              <NewsItem
                key={index}
                title={a.title}
                description={a.description}
                src={a.urlToImage}
                url={a.url}
              />
            ))}
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-secondary"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="text-white">Page {page}</span>
            <button
              className="btn btn-secondary"
              onClick={handleNextPage}
              disabled={page >= Math.ceil(totalResults / 10)}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <h3 className="text-center">No articles available.</h3>
      )}
    </div>
  );
};

export default Newsboard;
