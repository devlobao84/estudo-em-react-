import "./App.css";
import { Component } from "react";

// Class Components // 

class App extends Component {
  state = {    
    posts: []
  };

  // Fazendo uma requisição de API externa 
  
  componentDidMount() {
    this.loadPosts();
    }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    
    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    this.setState({ posts: postsJson });
      
  }
  
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

  // Componente //

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1> {counter} </h1>{" "}
        {posts.map((post) => (
          <div key={post.id}>
            <h1> {post.title} </h1> <p> {post.body}</p>
          </div>  
        ))}{" "}
      </div>
    );
  }
}
export default App;
