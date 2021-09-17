import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    
    posts: [],
  };

  // Começando o ciclo de vida dos componentes

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photoResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postResponse, photoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: postsAndPhotos });
  };

  // Termina o ciclo de vida dos componentes

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({
        posts,
        counter: counter + 1,
      });
    }, 1000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <section className="container">
        <div className="posts">
          <h1> {counter} </h1>{" "}
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.tile} />
              <div key={post.id} className="post-content">
                <h1> {post.title} </h1> <p> {post.body}</p>
              </div>
            </div>
          ))}{" "}
        </div>
      </section>
    );
  }
}

export default App;
