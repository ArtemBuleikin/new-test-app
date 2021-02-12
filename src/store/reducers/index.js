import {CALCULATE, RESET, SET_DATA, SET_MATERIAL, SET_MODE} from '../actions';

const defaultState = {
	step: 1,
	stepTitle: {
		'1': 'Что будем строить?',
		'2': 'Количество этажей(число):',
		'3': 'Материал стен:',
		'4': 'Длина стен (в метрах):'
	},
	//currentBuildId: 1,
	materials: [],
	query: {
		building: 1,
		height: 0,
		material: 1,
		sizex: 0,
		sizey: 0
	},
	mode: 'type',
	response: {}
}

const resetState = {
	...defaultState
}

export default function stepper(state= defaultState, action) {
	switch (action.type) {
		case RESET:
			return {
				...state,
				...resetState
			}
			
		case SET_MATERIAL:
			return {
				...state,
				materials: [...action.payload]
			}
			
		case CALCULATE:
			return {
				...state,
				step: action.payload.step,
				query: {
					...state.query,
					...action.payload.queryObject
				}
			}
			
		case SET_MODE:
			return {
				...state,
				mode: action.payload
			}
			
			
		case SET_DATA:
			return {
				...state,
				response: {...action.payload}
			}
			
		default:
			return {
				...state
			}
	}
}