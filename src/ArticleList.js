import React from 'react'
import Article from './Article'


function ArticleList(props) {
    const articles = props.article;
    const listItems = articles.map((article) => <li key={article.id}><Article article = {article}/></li>)

    return (
        <div>
            <h1>Article List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ArticleList