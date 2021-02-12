import './style.scss'
import { builds, allMaterials } from '../../data';
import Input from "../../components/input";

export default function ListHolder({children, step, stepTitle, mode, calculate, materials, query, response}) {
	
	return(
		<div className="list">
			<h4 className="list-holder-title">
				{mode === 'type' && stepTitle[`${step}`]}
				{mode === 'calculate' && !response.result && 'Подождите'}
				{mode === 'calculate' && response.result === 'ok' && 'Успешно'}
				{mode === 'calculate' && response.result === 'error' && 'Ошибка'}
			</h4>
			<div className="list-holder">
				
				{mode === 'type' && <div>
					<ul>
						{step === 1 && builds.map((item, index)=>(<li className={`${index === query.building - 1 ? 'active': ''} list-item`} key={index}>
							<span onClick={()=>calculate({building: index + 1}, 1,  item.isAvailableFlat ? false : true)}>{item.name}</span>
						</li>))}
						
						{step === 3 && materials.map((item, index)=>(<li className={`${item === query.material ? 'active': ''} list-item`} key={index}>
							<span onClick={()=>calculate({material: item}, 3)}>{allMaterials[item]}</span>
						</li>))}
					
					</ul>
					
					{step === 2 && <Input type='number' value={query.height} onChange={(e)=> calculate({height: e.target.value}, false)}/>}
					
					{step === 4 &&
					(<div><Input type='number' value={query.sizex} onChange={(e)=> calculate({sizex: e.target.value}, false)}/><span style={{fontSize: '1.7rem', margin: '0 0.7rem'}}>X</span>
						<Input type='number' value={query.sizey} onChange={(e)=> calculate({sizey: e.target.value}, false)}/>
					</div>) }
					
				</div>}
				
				{mode === 'calculate' &&
					<p className={response.result === 'ok' ? 'primary' : 'error'}>{response.message ? response.message : ''}</p>
				}
			</div>
		</div>
	)
}