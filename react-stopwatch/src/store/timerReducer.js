export const timerTypes = {
	START_TIMER: 'start_timer',
	STOP_TIMER: 'stop_timer',
	ADD_HR: 'add_hour',
	ADD_MIN: 'add_minute',
	ADD_SEC: 'add_second',
	ADD_MS: 'add_milisecond',
	RESET_TIMER: 'reset_timer',
	RESTART_TIMER: 'restart_timer',
};

const initialState = {
	start: false,
	hr: 0,
	min: 0,
	sec: 0,
	ms: 0,
};

export function timerReducer(state = initialState, {type, payload}) {
	switch (type) {
		case timerTypes.START_TIMER:
			return {
				...state,
				start: true,
			};
		case timerTypes.STOP_TIMER:
			return {
				...state,
				start: false,
			};
		case timerTypes.ADD_HR:
			return {
				...state,
				hr: payload,
        min: 0,
			};
		case timerTypes.ADD_MIN:
			return {
				...state,
				min: payload,
        sec: 0,
			};
		case timerTypes.ADD_SEC:
			return {
				...state,
				sec: payload,
        ms: 0,
			};
		case timerTypes.ADD_MS:
			return {
				...state,
				ms: payload,
			};
		case timerTypes.RESTART_TIMER:
			return {
				...state,
				ms: 0,
				sec: 0,
				min: 0,
				hr: 0,
			};
		case timerTypes.RESET_TIMER:
			return {
				...state,
				ms: 0,
				sec: 0,
				min: 0,
				hr: 0,
				start: false,
			};
		default:
			return state;
	}
}
