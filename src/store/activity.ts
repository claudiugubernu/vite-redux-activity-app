import { Store } from "redux";
import { ADD_ACTIVITY } from "./store";
import { generateId } from "../utils/generateId";

export class Activity {
  store: Store;
  activity: HTMLElement;
  activityInput: HTMLInputElement;
  addActivityBtn: HTMLButtonElement;

  constructor(selector: string, store: Store) {
    this.store = store;
    this.activity = document.querySelector(selector) as HTMLElement;

    if(!this.activity) return;

    this.addActivityBtn = this.activity.querySelector<HTMLButtonElement>("[data-add-activity]") as HTMLButtonElement;
    this.activityInput = this.activity.querySelector("[data-activity-input]") as HTMLInputElement;
    this.bindEvents();
  }

  bindEvents() {
    this.addActivityBtn.addEventListener("click", this.handleAddActivity);
    this.activityInput.addEventListener("keyup", (e) => {
      if (e.key !== 'Enter') return;
      
      this.handleAddActivity();
    });
  }

  handleAddActivity = () => {
    const activityName = this.activityInput.value;
    const activityId = generateId();

    if (activityName === '') {
      alert('Add an activity!');
      return;
    }

    this.store.dispatch({
      type: ADD_ACTIVITY,
      payload: {
        id: activityId,
        name: activityName
      }
    });

    this.activityInput.value = "";
  }
}