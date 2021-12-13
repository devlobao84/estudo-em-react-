import { Component, useState } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

// Class Components //

export const Home = () => {
   const [posts, setPosts] = useState([]); 
   const [allPosts, setAllPosts] = useState([]); 
   const [page, setPages] = useState(0); 
   const [perPage, setPerPage] = useState(10); 
   const [searchValue, setSearchValue] = useState([]); 
   
   const noMorePost = page + postsPerPage >= allPosts.length;

   const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        })
      : posts;

  return (
    <section className="container">
      <h1 className="titleCard">Busque seu card agora!</h1>
      {/*{!!searchValue && (
        <>
          <h1 className="titleCard">Busque seu card!</h1>
        </>
      )} */}
      <TextInput searchValue={searchValue} handleChange={this.handleChange} />{" "}
      <br />
      <br />
      <br />
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && (
        <h3 className="notpost"> Não existem posts aqui!:(</h3>
      )}
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


export class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: "",
  };

  // Fazendo uma requisição de API externa
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        })
      : posts;

    // agora quero testar
    return (
      <section className="container">
        <h1 className="titleCard">Busque seu card agora!</h1>
        {/*{!!searchValue && (
          <>
            <h1 className="titleCard">Busque seu card!</h1>
          </>
        )} */}
        <TextInput searchValue={searchValue} handleChange={this.handleChange} />{" "}
        <br />
        <br />
        <br />
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && (
          <h3 className="notpost"> Não existem posts aqui!:(</h3>
        )}
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
