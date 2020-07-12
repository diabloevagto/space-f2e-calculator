import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { useEventCallback } from 'rxjs-hooks';

export default (defaultPosition = { x: 0, y: 0 }) => {
  return useEventCallback(
    (event$, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([e, prevPos]) => [e.clientX, e.clientY, prevPos]),
        switchMap(([startX, startY, prevPos]) => {
          return fromEvent(window, 'mousemove').pipe(
            map((moveEvent) => {
              return {
                x: moveEvent.clientX - startX + prevPos.x,
                y: moveEvent.clientY - startY + prevPos.y,
              };
            }),
            takeUntil(fromEvent(window, 'mouseup')),
          );
        }),
      ),
    defaultPosition,
  );
};
