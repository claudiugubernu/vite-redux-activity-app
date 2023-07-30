import { Store } from 'redux';
import { Activity } from './store';

export function storeObserver(
  store: Store, 
  select: (store: Store) => Activity,
  onChange: (state: Activity) => void
  ) {
  let currentState: Activity;

  function handleChange() {
    let nextState: Activity = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}