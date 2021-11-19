import { Component } from "react";

import "./styles.css";

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from "../../components/Button";

// Class Components //
export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: 'teste'
  };

  // Fazendo uma requisição de API externa
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page:nextPage});
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState ({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;

    // agora quero testar 
    return (
      <section className="container">
        {!!searchValue && (
          <> 
          <h1 className="titleCard">Busque seu card!{searchValue}</h1>
          </>
        )}
        <input
        onChange={this.handleChange}
        value={searchValue}
        type="search" /> <br /><br /><br />
        <Posts posts={posts} />

        <div className="button-container">
          {!searchValue && (
            <Button
            text="Algo a mais"
            onClick={this.loadMorePosts}
            disabled={noMorePost}
          />
          )}
          
        </div>
      </section>
    );
  }
}


