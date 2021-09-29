import "./App.css";
import { Component } from "react";
import { PostCard } from "./components/PostCards";
//import { loadPost } from './utils/load-posts';

// Class Components //

class App extends Component {
  state = {
    posts: [],
  }; 

  componentDidMount() {
    this.loadPosts();
  }

  // Fazendo uma requisição de API externa
  
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

  // Termina o ciclo de vida dos componentes///

  //handleTimeout = () => {
  //const { posts, counter } = this.state;
  //posts[0].title = "O titulo mudou";
  //this.timeoutUpdate = setTimeout(() => {
  //  this.setState({
  //    posts,
  //    counter: counter + 1,
  //  });
  //}, 1000);
  //};

  // Componente //

  render() {
    const { posts, counter } = this.state;

    return (
      <section className="container">
        <div className="posts">          
          {posts.map((post) => (
            <PostCard />
          ))}{" "}
        </div>
      </section>
    );
  }
}

export default App;
