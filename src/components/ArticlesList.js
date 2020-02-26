import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = props => {
    console.log(props.articles);

    let articles = props.articles.map(article => (

        <ArticleCard key={article.id} title={article.title} url={article.urlToImage} href={article.url} />


    ))
    return (
        <div className="list-wrapper">
            {articles}
        </div>
    );
}
export default ArticlesList;