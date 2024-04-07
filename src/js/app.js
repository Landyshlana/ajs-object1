export default function orderByProps(obj, array = []) {
    const arr = [];
    const arrsort = [];
	const objSortArray = {...obj};
	if (array.length > 0) {
		array.forEach(elem => {
			arrsort.push({
				key: elem,
				value: objSortArray[elem]
			});
			delete objSortArray[elem];
		});
	};

	for (let key in objSortArray) {
		arr.push({
			key: key,
			value: objSortArray[key]
		});
		arr.sort((a, b) => a.key.localeCompare(b.key));
	}
	const result = arrsort.concat(arr);

	return result;

};

