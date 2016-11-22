import React, {Component}from 'react'
import Article from './Article'
import openArticle from './decorators/openArticle'

class ArticleList extends Component {

    render() {
        const { articles, openArticleId, openArticle, isOpen } = this.props;
        const listItems = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpenId={article.id == openArticleId}
                     openArticle={openArticle(article.id)}
                     isOpen={isOpen}
            />
        </li>);
        return (
            <div>
                <h1>Article List</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default openArticle(ArticleList)