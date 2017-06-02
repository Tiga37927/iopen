import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Pagination } from 'antd';

import Article from '../components/Article'

import './ArticleContainer.css';

export default class ArticleContainer extends Component {
    render() {
        const arr = [
            {
                "id": "582805de6c4502be6ed87b8f",
                "author_id": "58059a0d487e1e4578afb5ca",
                "tab": "ask",
                "content": "最近在学习BYVoid大神的开发指南，有两处代码不是很清楚，希望各位大神指教。\r\n第一处：\r\n```javascript\r\nPost.prototype.save = function save(callback) {\r\n    // 存入 Mongodb 的文档\r\n    var post = {\r\n        user: this.user,\r\n        post: this.post,\r\n        time: this.time\r\n    };\r\n    mongodb.open(function(err, db) {\r\n        if(err) {\r\n            return callback(err);\r\n        }\r\n        // 读取 posts 集合\r\n        db.collection('posts', function(err, collection) {\r\n            if(err) {\r\n                mongodb.close();\r\n                return callback(err);\r\n            }\r\n            // 为 user 属性添加索引\r\n            collection.ensureIndex('user');\r\n            // 写入 post 文档\r\n            collection.insert(post, {safe:true}, function(err, post) {\r\n                mongodb.close();\r\n```\r\n\t\t\t   callback(err,post);\r\n```javascript\r\n            });\r\n        });\r\n    });\r\n}\r\n```\r\n调用的callback有两个参数，可是实现Post.prototype.save的callback并没有两个参数，不知道这个callback到底是调用的什么东西？\r\n\r\n第二处：\r\n```html\r\n<% if (user) { %>\r\n    <%- partial('say') %>\r\n<% } %>\r\n<%- partial('posts') %>\r\n```\r\n书上本来说partial这个函数要传两个参数，第一个代表模板，第二个代表对象或数组，可是这里为什么只穿了一个模板名称的参数，在调用时还确实取到了希望取到的posts数据呢。。找了很久没找到partial的文档，希望大神指教\r\n\r\n最后谢谢好心的大神~",
                "title": "关于《Node.js开发指南》的两个问题",
                "last_reply_at": "2016-11-14T02:34:49.626Z",
                "good": false,
                "top": false,
                "reply_count": 7,
                "visit_count": 177,
                "create_at": "2016-11-13T06:19:10.706Z",
                "author": {
                    "loginname": "StudentWan",
                    "avatar_url": "https://avatars.githubusercontent.com/u/19220708?v=3&s=120"
                }
            }, {
                "id": "5825c2041120be9438b02af8",
                "author_id": "54b0f146ce87bace2444ceca",
                "tab": "ask",
                "content": "有一个需求就是不停从redis里面取数据。我想的就是使用async.dowhilst做循环操作。但是这个操作并不能很好的体现node的异步特性。。async.dowhilst相当于把异步变同步。不知道大神们是怎么用循环来处理异步的。\n\n来自酷炫的 [CNodeMD](https://github.com/TakWolf/CNode-Material-Design)",
                "title": "node循环处理异步操作除了通过流程控制以及递归之外还有没有其他的方式。",
                "last_reply_at": "2016-11-14T02:01:43.149Z",
                "good": false,
                "top": false,
                "reply_count": 6,
                "visit_count": 165,
                "create_at": "2016-11-11T13:05:08.529Z",
                "author": {
                    "loginname": "weierbufan",
                    "avatar_url": "https://avatars.githubusercontent.com/u/6757408?v=3&s=120"
                }
            }]
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
                    {
                        arr.map((item, i) =>                                 
                            <Article key={i} article={item}/>                  
                        )
                    }
                    <div className="pagination">
                        <Pagination defaultCurrent={6} total={500}/>
                    </div>
                </div>
            </div>
        )
    }
}