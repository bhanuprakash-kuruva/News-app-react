// import React, { useEffect, useState } from 'react';
// import NewsItem from './NewsItem';

// const Newsboard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error('Failed to fetch articles');
//         }
//         const data = await res.json();
//         if (data.articles.length === 0) {
//           setError('No articles found for this category.');
//         } else {
//           setArticles(data.articles);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [category]);

//   if (loading) {
//     return <h2 className='text-center'>Loading articles...</h2>;
//   }

//   if (error) {
//     return <h2 className='text-center text-danger'>{error}</h2>;
//   }

//   return (
//     <div>
//       <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
//       {
//         articles.map((a, index) => (
//           <NewsItem key={index} title={a.title} description={a.description} src={a.urlToImage} url={a.url} />
//         ))
//       }
//     </div>
//   );
// }

// export default Newsboard;
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await res.json();

        // Filter articles for valid ones
        const validArticles = data.articles.filter(article => 
          article.title && article.description && article.url && article.urlToImage
        );

        if (validArticles.length === 0) {
          setError('No valid articles found for this category.');
        } else {
          setArticles(validArticles);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  if (loading) {
    return <h2 className='text-center'>Loading articles...</h2>;
  }

  if (error) {
    return <h2 className='text-center text-danger'>{error}</h2>;
  }

  return (
    <div className='scrollable'>
      <h2 className='text-center text-white'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.length > 0 ? (
          articles.map((a, index) => (
            <NewsItem key={index} title={a.title} description={a.description} src={a.urlToImage} url={a.url} />
          ))
        ) : (
          <h3 className='text-center'>No articles available.</h3>
        )
      }
    </div>
  );
}

export default Newsboard;


