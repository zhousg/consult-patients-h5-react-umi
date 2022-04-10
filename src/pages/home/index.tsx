import styles from './index.less';
import { SearchOutline } from 'antd-mobile-icons';
import { Grid, Tabs } from 'antd-mobile';
import Icon from '@/icon';
import HomeFollow from './components/HomeFollow';
import KnowledgeList from '@/components/KnowledgeList';

// 首页
export default () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <h1 className="title">优医</h1>
        <div className="search">
          <SearchOutline color="var(--yy-color-text)" fontSize={16} />
          <span>搜一搜：疾病/症状/医生/健康知识</span>
        </div>
        <Grid columns={3} gap={0}>
          <Grid.Item>
            <div className="item-large">
              <Icon name="icon01" />
              <p>问医生</p>
              <p>按科室查问医生</p>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="item-large">
              <Icon name="icon02" />
              <p>图文问诊</p>
              <p>20s医生极速回复</p>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="item-large">
              <Icon name="icon03" />
              <p>开药门诊</p>
              <p>线上买药更方便</p>
            </div>
          </Grid.Item>
        </Grid>
        <Grid columns={4} gap={0}>
          <Grid.Item>
            <div className="item-middle">
              <Icon name="icon04" />
              <p>药品订单</p>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="item-middle">
              <Icon name="icon05" />
              <p>健康档案</p>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="item-middle">
              <Icon name="icon06" />
              <p>我的处方</p>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div className="item-middle">
              <Icon name="icon07" />
              <p>疾病查询</p>
            </div>
          </Grid.Item>
        </Grid>
        <div className="banner">
          <img src={require('../../images/ad.png')} alt="" />
        </div>
      </div>
      <Tabs activeLineMode="fixed" stretch={false} defaultActiveKey={'2'}>
        <Tabs.Tab title="关注" key={1}>
          <HomeFollow />
          <KnowledgeList />
        </Tabs.Tab>
        <Tabs.Tab title="推荐" key={2}>
          <KnowledgeList />
        </Tabs.Tab>
        <Tabs.Tab title="护肤" key={3}>
          <KnowledgeList />
        </Tabs.Tab>
        <Tabs.Tab title="减脂" key={4}>
          <KnowledgeList />
        </Tabs.Tab>
        <Tabs.Tab title="饮食" key={5}>
          <KnowledgeList />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};
