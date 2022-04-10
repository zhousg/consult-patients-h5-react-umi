import styles from './index.less';
import { List, Image, Button } from 'antd-mobile';
const demoSrc = 'https://yanxuan-item.nosdn.127.net/15fb1925dac71e0ce1f0e838b8593d99.jpg'
const KnowledgeList = () => {
  const knowledges = [1, 2, 3];
  return (
    <div className={styles.KnowledgeList}>
      <List>
        {knowledges.map((item) => {
          return (
            <div key={item}>
              <List.Item
                prefix={
                  <Image
                    src={demoSrc}
                    style={{ borderRadius: 19 }}
                    fit="cover"
                    width={38}
                    height={38}
                  />
                }
                extra={
                  <Button
                    shape="rounded"
                    fill="outline"
                    size="mini"
                    color="primary"
                  >
                    + 关注
                  </Button>
                }
                description="积水潭医院 皮肤科 主任医师"
              >
                王医生
              </List.Item>
              <div className="item">
                <p className="title">炎热夏季如何防晒？</p>
                <p className="tag"># 儿童健康</p>
                <p className="intro">
                  炎热的夏季，那大太阳无时不刻在考验着我们的肌肤，过强、过多的阳光中紫外线的…
                </p>
                <div className="images">
                  <Image src={demoSrc}></Image>
                  <Image src={demoSrc}></Image>
                  <Image src={demoSrc}></Image>
                </div>
                <div className="footer">
                  <span>12 收藏</span>
                  <span>120 评论</span>
                </div>
              </div>
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default KnowledgeList;
