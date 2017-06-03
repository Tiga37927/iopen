import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

import Article from '../components/Article';
import {initArticles} from '../reducers/iopenReducer';
import Util from '../util/util';

import './ArticleContainer.css';

class ArticleContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    }
  }
  componentWillMount() {
    this.loadArticles(this.state.page);
  }
  handleChangePage(page) {
    if (page === this.state.page) {
      return;
    }
    this.setState({page: page});
    this.loadArticles(page);
  }
  loadArticles(page) {
    let _this = this;
    let opt = {
      url: Util.prefix + 'topics?page=' + page + '&tab=&limit=10&mdrender=false',
      type: 'get',
      success: function(response) {
        if (!response.data || response.data.length === 0) {
          return alert("未查询到相关数据")
        }
        // 如果成功，设置下载状态和数据源
        _this.props.initArticles(response.data)
      },
      fail: function(error) {
        alert(error)
      }
    };
    Util.getRequest(opt)
  }
  render() {
    const articles = this.props.articles || [];
    return (
      <div className="acticle-box">
        <ul className="pannel-header clearfix">
          <li className="ph-item active">
            <Link to="/">全部</Link>
          </li>
          <li className="ph-item">
            <Link to="/">精华</Link>
          </li>
          <li className="ph-item">
            <Link to="/">分享</Link>
          </li>
        </ul>
        <div className="pannel-inner">
          {articles.length > 0
            ? articles.map((item, i) => <Article key={i} article={item}/>)
            : Util.loading
          }
          <div className="pagination">
            <Pagination onChange={this.handleChangePage.bind(this)} current={this.state.page} total={500}/>
          </div>
        </div>
      </div>
    )
  }
}

ArticleContainer.propTypes = {
  articles: PropTypes.array,
  initArticles: PropTypes.func
}
const mapStateToProps = (state) => {
  return {articles: state.iopenReducer.articles}
}
const mapDispatchToProps = (dispatch) => {
  return {
    initArticles: (articles) => {
      dispatch(initArticles(articles))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
