import React from 'react';

const styles = {
  postCard: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  postTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    borderBottom: '1px solid #aaa', 
    paddingBottom: '5px', 
  },
  postBody: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
  },
};

const PostCard = ({ title, body }) => {
  return (
    <div style={styles.postCard}>
      <h2 style={styles.postTitle}>Título: {title}</h2>
      <p style={styles.postBody}>{body}</p>
    </div>
  );
}

export default PostCard;

