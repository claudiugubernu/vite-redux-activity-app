import './style.scss';
import {createStore} from 'redux';
import { reducer } from './store/store';
import { Activity } from './store/activity';
import { ActivitiesList } from './store/activitiesList';

const store = createStore(reducer);

window.addEventListener('load', () => {
  new Activity("[data-activity]", store);
  new ActivitiesList("[data-activity-list]", store, (state) => (state as any).activity);
});