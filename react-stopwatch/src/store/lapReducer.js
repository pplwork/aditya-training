export const lapTypes = {
	ADD_LAP: 'clear_lap',
	CLEAR_LAPS: 'clear_laps',
};

const initialState = [];

export function lapReducer(state = initialState, {type, payload}) {
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
