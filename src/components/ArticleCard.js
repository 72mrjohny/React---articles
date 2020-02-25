import React from 'react';

function ArticleCard(props) {
    return (
        <li>
            <img src={props.url} alt={"article-img"} />
            <p>{props.title}</p>
        </li>
    )
}
export default ArticleCard;