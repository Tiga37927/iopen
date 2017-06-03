/**
* 工具类
*/
import React from 'react';
import { Spin } from 'antd';

const Util = {
  prefix: 'https://cnodejs.org/api/v1/',
  getRequest: function (options) {
    fetch(options.url, {method: options.type || 'get'})
    .then((response) => response.json())
    .then((responseData) => options.success(responseData))
    .catch((error) => options.fail(error));
  },
  // loading
  loading: <div className='loading-box'>
                <Spin size="large" tip="Loading..."/>
            </div>,
}

export default Util;
