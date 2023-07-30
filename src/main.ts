import './style.scss';
import {createStore} from 'redux';
import { reducer } from './store/store';
import { Activity } from './store/activity';
import { activitiesList } from './store/activitiesList';

const store = createStore(reducer);

window.addEventListener('load', () => {
  new Activity("[data-activity]", store);
  new activitiesList("[data-activity-list]", store, (state) => (state as any).activity);
});