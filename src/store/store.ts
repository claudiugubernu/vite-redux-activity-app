export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const EDIT_ACTIVITY = "EDIT_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";

export interface addActivity {
  type: typeof ADD_ACTIVITY,
  payload: {
    id: number;
    name: string;
  }
}

export interface editActivity {
  type: typeof EDIT_ACTIVITY,
  payload: {
    id: number;
    name: string;
  }
}

export interface removeActivity {
  type: typeof REMOVE_ACTIVITY,
  payload: {
    id: number;
  }
}

export type Action = addActivity | editActivity | removeActivity;

export interface Activity {
  id: number;
  name: string;
}


export const reducer = ( state: Activity[] = [], action: Action) => {
  if(action.type === "ADD_ACTIVITY") {
    // console.log(action.payload);
    return {
      ...state, 
      activity: action.payload
    };
  }

  if(action.type === "EDIT_ACTIVITY") {
    return {
      ...state, 
      activity: action.payload
    };
  }

  if(action.type === "REMOVE_ACTIVITY") {
    return {
      ...state, 
      activities: state.filter((activity: Activity) => action.payload.id !== activity.id)
    };
  }

  return state;
}