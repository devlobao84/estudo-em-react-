import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "O titulo 1",
        body: "O corpo",
      },
      {
        id: 2,
        title: "O titulo 2",
        body: "O corpo",
      },
      {
        id: 3,
        title: "O titulo 3",
        body: "O corpo",
      },
    ],
  };

  // Começando o ciclo de vida dos componentes

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");

    const [posts] = await Promise.all([postResponse]);

    const postsJson = await posts.json();

    this.setState({ posts: postsJson });
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
