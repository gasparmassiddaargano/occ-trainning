export const columns = [
	{ 
		field: 'number',
		headerName: '#',
		width: 8 
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 64,
		truncate: true,
	},
	{
		field: 'product.name',
		headerName: 'Product Name',
		width: 84,
	},
	{
		field: 'product.quantity',
		headerName: 'Quantity',
		width: 96,
	},
];

export const rows = [
	{id: 0, number: 1, status: 'Avaiable', product: { name: 'Lorem Ipsum dolor\nsit amet', quantity: 23 }},
	{id: 1, number: 2, status: 'Avaiable', product: { name: 'Dolor Sit', quantity: 242}},
	{id: 2, number: 3, status: 'Unavailable', product: { name: 'Amet', quantity: 315 }},
	{id: 4, number: 4, status: 'Avaiable', product: { name: 'Lorem Ipsum Dolor', quantity: 2345 }},
	{id: 5, number: 5, status: 'Avaiable', product: { name: 'Dolor Sit Amet', quantity: 315 }},
	{id: 6, number: 6, status: 'Unavailable', product: { name: 'Lorem Ipsum Sit', quantity: 1354423 }},
	{id: 8, number: 7, status: 'Avaiable', product: { name: 'Lorem Ipsum Amet', quantity: 345345 }},
];