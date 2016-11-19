import { articles } from './fixtures'
import ArticleList from './ArticleList'
import React from 'react'
import { render } from 'react-dom'


render(<ArticleList article = {articles} />, document.getElementById('container'))