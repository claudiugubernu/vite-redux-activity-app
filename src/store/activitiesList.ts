import { Store } from 'redux';
import { storeObserver } from './storeObserver';
import { Activity } from './store';

export class activitiesList {
  element: HTMLElement;
  store: Store;
  stateSelector: (store: Store) => Activity;
  
  constructor(selector: string, store: Store, stateSelector: (store: Store)=> Activity) {
    this.element = document.querySelector(selector) as HTMLElement;

    if(!this.element) return;

    this.store = store;
    this.stateSelector = stateSelector;
    this.bindEvents();
  }

  bindEvents() {
    storeObserver(this.store, this.stateSelector, this.handleStoreChange);
  }

  handleStoreChange = (state: Activity) => {
    if(!state) {
      let emptyList = document.createElement('li');
      emptyList.textContent = 'No activity added. Start by adding one!';
      this.element?.appendChild(emptyList);
    } else {  
      let listItem = document.createElement('li');
      listItem.setAttribute("id", state.id.toString());
      listItem.textContent = state.name;
      this.element.appendChild(listItem);
    }
  }
}