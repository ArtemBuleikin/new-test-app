import './App.scss';
import { builds } from "./data";
import { useDispatch, useSelector } from "react-redux";
import MainHolder from "./containers/main-holder";
import MainTitle from "./components/main-title";
import StepLabel from "./components/step-label";
import ListHolder from "./containers/list-holder";
import Button from "./components/button";
import BtnHolder from "./containers/btn-holder";
import { resetState, calculateAction, setMaterial, setMode, gethData } from "./store/actions";

function App() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.stepper);
	
	const reset =()=>{
		dispatch(resetState())
	}
	
	const fetchData =(queryObject)=>{
		dispatch(gethData(queryObject))
	}
	
	const calculate = (queryObject, step, skip) =>{
		
		switch (step) {
			case 1: {
				const building = queryObject.building ? queryObject.building : state.query.building;
				const material = builds[building - 1].material;
				dispatch(calculateAction({building, material: material[0]}, skip ? 3 : 2));
				dispatch(setMaterial(material));
				return;
			}
			
			case 2: {
				if(state.query.height <= 0){
					alert('Введите количество этажей');
					return;
				}
				dispatch(calculateAction({...queryObject}, 3))
				return;
			}
			
			case 3: {
				dispatch(calculateAction(queryObject, 4))
				return;
			}
			
			case 4: {
				if(state.query.sizex <= 0 || state.query.sizey <=0){
					alert('Введите корректные размеры');
					return;
				}
				dispatch(setMode('calculate'))
				dispatch(calculateAction({...queryObject}, 4))
				fetchData(state.query);
				return;
			}
			
			case false:{
				dispatch(calculateAction(queryObject, state.step))
			}
			
			default: {
				return;
			}
		}
	}
	
	return (
		<MainHolder>
			<MainTitle>Калькулятор цены конструкций</MainTitle>
			<StepLabel>
				{state.mode === 'type' && `Шаг ${state.step}`}
				{state.mode === 'calculate' && `Результат расчета`}
			</StepLabel>
			<ListHolder {...state} calculate={calculate}></ListHolder>
			<BtnHolder>
				{state.mode === 'type'&& (<>
						<Button onClick={()=>reset()}>Отмена</Button>
						<Button onClick={()=>calculate({}, state.step)}>
							{state.step === 4 && 'Расчитать'}
							{state.step !== 4 && 'Далее'}
						</Button>
					</>)
				}
				
				{state.mode === 'calculate'&& <Button onClick={()=>reset()}>Новый расчет</Button>}
				
			</BtnHolder>
		</MainHolder>
		
	)
}

export default App;
