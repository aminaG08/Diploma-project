import React, { useState, useEffect } from "react";

const RedditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://www.reddit.com/r/socialanxiety/search.json?q=success&restrict_sr=1";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        const filteredPosts = data.data.children.map((child) => ({
          title: child.data.title,
          subtitle: child.data.selftext,
          url: child.data.url,
        }));

        setPosts(filteredPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="stories">
      <div className="stories__container">
        <h1 className="statistics__title">Wish this posts from reddit will motivates you</h1>
        <div className="stories__wrapper">
          {posts.slice(0, visibleCount).map((post, index) => (
            <div key={index} className="stories__block">
              <h2 className="stories__block-title">{post.title}</h2>
              <p className="stories__block-subtitle">
                {truncateText(post.subtitle || "No description available", 100)}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stories__block-more"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
        {visibleCount < posts.length && (
          <a className="stories__load" onClick={handleLoadMore}>
            Load more
          </a>
        )}
      </div>
    </div>
  );
};

export default RedditPosts;
