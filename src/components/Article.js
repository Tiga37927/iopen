import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './Article.css';

export default class Article extends React.Component {    
    render() {
        const article = this.props.article;
        return (
            <div className="article">
                <img className="author-photo" src={article.author.avatar_url} alt=""/>
                <span className="reply-count">
                    <em className="reply">{article.reply_count}</em>/<em className="visit">{article.visit_count}</em>
                </span>
                {
                    article.top ? <span className="target target-top">顶置</span> :
                        article.good ? <span className="target target-good">精华</span> : 
                            <span className="target target-good">问答</span>
                }                
                <Link className="title" to="/">{article.title}</Link>
                <div className="uptime">
                    <img className="small-photo" src={article.author.avatar_url} alt=""/>
                    <span className="last-active-time">4小时前</span>
                </div>
            </div>
        )
    }
}
Article.propTypes = {
    article: PropTypes.object
}