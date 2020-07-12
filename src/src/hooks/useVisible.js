import { useCallback, useState } from 'react';

export default (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const toggle = useCallback(() => setVisible((v) => !v), []);

  return [visible, toggle];
};
