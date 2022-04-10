import Mock from 'mockjs';
export default {
  'GET /home/doctors': {
    message: '获取推荐关注医生成功',
    data: [1, 2, 3, 4, 5].map(() => {
      return {
        id: Mock.mock('@guid'),
        avatar:
          'https://img0.baidu.com/it/u=4178083373,2422103132&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
        doctorName: Mock.mock('@cname').substr(0, 1) + '医生',
        hospital: '北京协和医院',
        department: '心内科',
        title: '主任医师',
      };
    }),
  },  
};
