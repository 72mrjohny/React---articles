import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = props => {
    console.log(props.articles);

    let articles = props.articles.map(article => (

        <ArticleCard title={article.title} url={article.urlToImage} />


    ))
    return (
        <ul>
            {articles}
        </ul>
    );
}
export default ArticlesList;