import { handleActions } from 'redux-actions';
import produce from 'immer';

import { addUniqueCount, createRequestActions } from 'src/utils/wrapAction';

// ------------------------- action -------------------------
const type = addUniqueCount({
  ADD_OPERATOR: 'ADD_OPERATOR',
});
const action = createRequestActions(type);

// ------------------------- reducer -------------------------
const initialState = {
  operators: [],
  currentVal: 0,
};

const reducer = handleActions(
  {
    [type.ADD_OPERATOR]: produce((draft, { payload }) => {
      draft.operators.push(payload);
      draft.currentVal = payload;
    }),
  },
  initialState,
);

// export
export default {
  type,
  action,
  reducer,
};
