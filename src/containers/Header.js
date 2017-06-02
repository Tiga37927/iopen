import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';

import './Header.css';

const Search = Input.Search;

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <Search placeholder="input search text" style={{
            width: 200
          }} onSearch={value => console.log(value)}/>
          <ul className="site-nav clearfix">
            <li className="sn-item">
              <Link to="/">首页</Link>
            </li>
            <li className="sn-item">
              <Link to="/topics">新手入门</Link>
            </li>
            <li className="sn-item">
              <Link to="/api">API</Link>
            </li>
            <li className="sn-item">
              <Link to="/about">关于</Link>
            </li>
            <li className="sn-item">
              <Link to="/register">注册</Link>
            </li>
            <li className="sn-item">
              <Link to="/login">登录</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
