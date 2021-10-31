import { Component } from "react";

import "./styles.css";

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';

// Class Components //
export class Home extends Component {
  state = {
    posts: [],
  };

  // Fazendo uma requisição de API externa
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  // Termina aqui o ciclo de vida dos componentes

  // Componente refatorado //

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}


