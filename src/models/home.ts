import { getHomeDoctors } from '@/service/home';
import { Effect, ImmerReducer } from 'umi';

export interface HomeModelState {
  doctors: Array<{
    id: string;
    avatar: string;
    doctorName: string;
    hospital: string;
    department: string;
    title: string;
  }>;
  knowledge: object;
}
export interface HomeModelType {
  namespace: 'home';
  state: HomeModelState;
  effects: {
    getDoctors: Effect;
  };
  reducers: {
    setDoctors: ImmerReducer<HomeModelState>;
  };
}

const HomeModel: HomeModelType = {
  namespace: 'home',
  state: {
    doctors: [],
    knowledge: {},
  },
  effects: {
    *getDoctors(action, { put, call }) {
      const res = yield call(getHomeDoctors);
      yield put({ type: 'setDoctors', payload: res.data });
    },
  },
  reducers: {
    setDoctors(state, action) {
      state.doctors = action.payload;
    },
  },
};

export default HomeModel;
