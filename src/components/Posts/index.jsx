import { PostCard } from "../PostCard"
import './styles.css'

export const Posts = ({ posts = [] }) => { 
    return (
      <div className="posts">
        {/*<h1> {counter} </h1>{" "}*/}
        {posts.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            id={post.id}
            cover={post.cover}
          />
        ))}
      </div>
    );        
}