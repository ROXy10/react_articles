import React, {Component}from 'react'
import Article from './Article'
import openItem from './decorators/openItem'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


class ArticleList extends Component {

    state = {
        selectedArticles: null
    };

    render() {
        const { articles, openItemId, openItem, isOpen } = this.props;
        const listItems = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpenId={article.id == openItemId}
                     openArticle={openItem(article.id)}
                     isOpen={isOpen}
            />
        </li>);
        const options = articles.map((article) => ({
            label: article.title,
            vlaue: article.id
        }));
        return (
            <div>
                <h1>Article List</h1>
                <Select
                    options={options}
                    value={this.state.selectedArticles}
                    onChange={this.handleSelectChange}
                />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleSelectChange = (selectedArticles) => {
        this.setState({
            selectedArticles
        })
    }
}

export default openItem(ArticleList)