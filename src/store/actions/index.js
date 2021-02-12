import axios from "axios";
import { baseUrl } from '../../data'

export const RESET = 'RESET';
export const CALCULATE = 'CALCULATE';
export const SET_MATERIAL = 'SET_MATERIAL';
export const SET_MODE = 'SET_MODE';
export const SET_DATA = 'SET_DATA';

export const resetState = () => {
	return{
		type: RESET
	}
}

export const calculateAction = (queryObject, step) =>{
	return{
		type: CALCULATE,
		payload: { queryObject, step }
	}
}

export const setMaterial = (material) =>{
	return{
		type: SET_MATERIAL,
		payload: material
	}
}

export const setMode = (mode)=>{
	return{
		type: SET_MODE,
		payload: mode
	}
}

export const setData = (response)=>{
	return{
		type: SET_DATA,
		payload: response
	}
}

export const gethData = (queryObject)=>{
	return async ( dispatch ) => {
		try {
			const {data} = await axios.get(baseUrl, {params:{...queryObject}})
			dispatch(setData(data));
		} catch (e) {
			console.log(e)
		}
	}
}