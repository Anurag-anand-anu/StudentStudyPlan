import React, { useState, useEffect } from 'react'; // Importing React and hooks
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array

  useEffect(() => {
    fetch('https://anurag-anand-anu.github.io/blog/blog.json') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Check if posts is an array before rendering
  if (!Array.isArray(posts)) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>Student Study Plan</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        
        <div className="card-container">
          {posts.map(post => (
            <Card key={post.id} className="mb-3">
              <Card.Body>
                <Card.Title>{post.heading}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <footer>
      @ copyright 2024
      </footer>
    </div>
  );
}

export default App;
