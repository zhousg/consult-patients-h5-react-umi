import styles from './HomeFollow.less';
import { RightOutline } from 'antd-mobile-icons';
import { Swiper, Button, Image } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { HomeModelState, useDispatch, useSelector } from 'umi';
// 首页关注组件
const HomeFollow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'home/getDoctors' });
  }, [dispatch]);
  const doctors = useSelector(
    (state: { home: HomeModelState }) => state.home.doctors,
  );

  const [trackOffset, setTrackOffset] = useState(0)
  useEffect(()=>{
    if (doctors.length) {
      setTrackOffset(4)
    }
  },[doctors])
  return (
    <div className={styles.HomeFollow}>
      <div className="head">
        <p>推荐关注</p>
        <a href="#">
          查看更多 <RightOutline />
        </a>
      </div>
      <div className="body">
        {doctors.length ? <Swiper trackOffset={trackOffset} slideSize={39} indicator={() => null}>
          {doctors.map((item) => {
            return <Swiper.Item key={item.id}>
              <div className='doctor-item'>
                <Image
                  src={item.avatar}
                />
                <p className='name'>{item.doctorName}</p>
                <p>{item.hospital}&nbsp;{item.department}</p>
                <p>{item.title}</p>
                <Button shape='rounded' size='mini' color='primary'>+ 关注</Button>
              </div>
            </Swiper.Item>;
          })}
        </Swiper>: null}
      </div>
    </div>
  );
};
export default HomeFollow;
