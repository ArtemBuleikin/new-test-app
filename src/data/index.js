export const builds =  [
	{
		id: 1,
		name: 'Жилой дом',
		isAvailableFlat: true,
		material: ['1','2','3']
	},
	
	{
		id: 2,
		name: 'Гараж',
		isAvailableFlat: false,
		material: ['2', '4', '5']
	},
];

export const allMaterials = {
	1: 'Кирпич',
	2: 'Шлакоблок',
	3: 'Деревянный брус',
	4: 'Металл',
	5: 'Cендвич-панели'
}

export const baseUrl = 'https://data.techart.ru/lab/json/';