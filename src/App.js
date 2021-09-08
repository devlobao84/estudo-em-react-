import './App.css';
import {
  Component
} from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [{
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo'
      }
    ]
  };

  // Começando o ciclo de vida dos componentes  

  componentDidMount() {
    this.handleTimeout();    
  }
  timeoutUpdate = null;

  componentDidUpdate() {    
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  } 
  // Termina o ciclo de vida dos componentes  

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo mudou';        

    this.timeoutUpdate = setTimeout(() => {
      this.setState({
        posts,
        counter: counter + 1
      });
    }, 1000)
  }

  render() {
    const { posts, counter} = this.state;   

    return (<div className = "App">
        <h1> {counter} </h1> {
        posts.map(post => (<div key = {post.id}>
          <h1> {post.title} </h1> <p> {post.body}</p>
           </div>
        ))
      } </div>

  )
}
}

export default App;