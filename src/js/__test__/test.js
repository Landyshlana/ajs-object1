import orderByProps from '../app';

test('sort1', () => {
	const obj = {
		name: 'мечник',
		health: 10,
		level: 2,
		attack: 80,
		defence: 40,
	};
	const result = [{
			key: 'name',
			value: 'мечник'
		},
		{
			key: 'level',
			value: 2
		},
		{
			key: 'attack',
			value: 80
		},
		{
			key: 'defence',
			value: 40
		},
		{
			key: 'health',
			value: 10
		},
	];
	expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});

test('sort2', () => {
	const obj = {
		name: 'мечник',
		health: 10,
		level: 2,
		attack: 80,
		defence: 40,
	};
	const result = [{
			key: 'attack',
			value: 80
		},
		{
			key: 'defence',
			value: 40
		},
		{
			key: 'name',
			value: 'мечник'
		},
		{	
			key: 'health',
			value: 10
		},
		{
			key: 'level',
			value: 2
		},
	];
	expect(orderByProps(obj, ['attack', 'defence', 'name', 'health'])).toEqual(result);
});

test('sort3', () => {
	const obj = {
		name: 'мечник',
		health: 10,
		level: 2,
		attack: 80,
		defence: 40,
	};
	const result = [{
			key: 'attack',
			value: 80
		},
		{
			key: 'defence',
			value: 40
		},
		{
			key: 'health',
			value: 10
		},
		{
			key: 'level',
			value: 2
		},
		{
			key: 'name',
			value: 'мечник'
		},
	];
	expect(orderByProps(obj)).toEqual(result);
});