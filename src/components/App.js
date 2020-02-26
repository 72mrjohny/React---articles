import React, { Component } from 'react';
import './App.css';

import ArticlesList from './ArticlesList';
// import Test from './Test';


const API = 'http://newsapi.org/v2/top-headlines?country=pl&apiKey=839d8c1928bd403cad816ed242527e48';


class App extends Component {

  state = {
    articles: []
  }

  getArticles = () => {
    // console.log("click");
    fetch(API)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          articles: data.articles
        })

      })
      .catch(error => console.log(error + " coś nie tak"))

  }



  render() {
    let articles = this.state.articles;
    return (
      <div>
        <h1>Lista artykułów</h1>
        {/* <Test /> */}

        <button onClick={this.getArticles}> Pobierz</button>
        <ArticlesList articles={articles} />
      </div>
    )
  }

}

export default App;
