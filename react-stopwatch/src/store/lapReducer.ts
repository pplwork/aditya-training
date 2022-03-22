import {Action, Reducer} from 'redux';

export enum lapTypes {
	ADD_LAP = 'clear_lap',
	CLEAR_LAPS = 'clear_laps',
};

export interface ILap {
	state: Array<String>;
	action: {
		type: lapTypes;
		payload: String;
	};
}

const initialState:ILap["state"] = [];

export const lapReducer = (state:ILap['state'] = initialState, {type, payload}:ILap["action"]):ILap["state"] => {
	switch (type) {
		case lapTypes.ADD_LAP:
			return [
        payload,
				...state,
      ];
		case lapTypes.CLEAR_LAPS:
			return [];
		default:
			return state;
	}
}
