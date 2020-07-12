import { handleActions } from 'redux-actions';
import produce from 'immer';

import { addUniqueCount, createRequestActions } from 'src/utils/wrapAction';

// ------------------------- action -------------------------
const type = addUniqueCount({
  GET_USER: 'GET_USER',
});
const action = createRequestActions(type);

// ------------------------- reducer -------------------------
const initialState = {
  isLoading: false,
  response: null,
  error: null,
};

const reducer = handleActions(
  {
    [type.GET_USER.REQUEST]: produce((draft) => {
      draft.isLoading = true;
      draft.response = null;
      draft.error = null;
    }),
    [type.GET_USER.SUCCESS]: produce((draft, { payload }) => {
      draft.isLoading = false;
      draft.response = payload;
    }),
    [type.GET_USER.FAILURE]: produce((draft, { payload }) => {
      draft.isLoading = false;
      draft.error = payload;
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
