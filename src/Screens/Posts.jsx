import React, { useEffect, useState } from 'react';
import PostCard from '../components/postCard';

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('recent');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://forum-gamificado-2f07b-default-rtdb.firebaseio.com/publicacao.json');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const postsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setPosts(postsArray);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };

  const filteredPosts = posts ? posts.filter(post => post.title.toLowerCase().includes(filterValue.toLowerCase())) : [];

  const sortedPosts = filteredPosts.slice().sort((a, b) => {
    if (sortValue === 'recent') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortValue === 'oldest') {
      return new Date(a.timestamp) - new Date(b.timestamp);
    } else {
      return 0;
    }
  });

  return (
    
      <div className="posts-container">
        {error && <p>{error}</p>}
        <div className="posts-header">
          <div className="posts-inputs">
            <input type="text" placeholder="Filtrar por título" value={filterValue} onChange={handleFilterChange} />
            <select value={sortValue} onChange={handleSortChange}>
              <option value="recent">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </select>
          </div>
        </div>
        <div className="posts-list">
          {sortedPosts.map(post => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    
    
  );
}

export default Posts;

