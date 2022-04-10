import React from 'react';
import { TabBar } from 'antd-mobile';
import {
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { useHistory, useLocation } from 'umi';

const BasicLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const setRouteActive = (key: string) => {
    history.push(key);
  };

  return (
    <>
      <div className="yy-contianer">{children}</div>
      <TabBar
        safeArea
        activeKey={location.pathname}
        onChange={(value) => setRouteActive(value)}
      >
        <TabBar.Item key={'/home'} icon={<HomeOutlined />} title="首页" />
        <TabBar.Item
          key={'/healthy'}
          icon={<SnippetsOutlined />}
          title="健康百科"
        />
        <TabBar.Item
          key={'/notify'}
          icon={<MessageOutlined />}
          title="消息通知"
        />
        <TabBar.Item key={'/user'} icon={<UserOutlined />} title="我的" />
      </TabBar>
    </>
  );
};

export default BasicLayout;
