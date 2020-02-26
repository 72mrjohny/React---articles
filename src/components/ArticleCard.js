import React from 'react';

function ArticleCard(props) {
    return (

        <div className="article"    >
            <a href={props.href} target="blank">
                <img src={props.url || 'https://library.cityofsydney.nsw.gov.au/Montage/images/no_image_w_large.gif'} alt={"article-img"} />

                <p>{props.title}</p>        </a>
        </div>

    )
}
export default ArticleCard;