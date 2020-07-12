import { handleActions } from 'redux-actions';
import calc from 'fp-calculator';
import produce, { current } from 'immer';

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
  expression: '',
};

const reducer = handleActions(
  {
    [type.ADD_OPERATOR]: produce((draft, { payload }) => {
      if (payload === '+/-') {
        // todo
      } else if (payload === '%') {
        // todo
      } else {
        draft.operators.push(payload);

        const c = current(draft).operators.reduce((c, action) => {
          return calc(action, c.prevAction, c.display, c.expression);
        }, calc());

        draft.currentVal = c.display;
        draft.expression = c.expression;

        if (c.prevAction === 'ac') {
          draft.operators = [];
        }
      }
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
