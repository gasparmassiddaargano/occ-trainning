export const fontSizes = [
	'0.625rem',
	'0.75rem',
	'0.875rem',
	'1rem',
	'1.125rem',
	'1.25rem',
	'1.375rem',
	'1.75rem',
	'2rem',
	'2.8125rem',
	'3.25rem',
	'4.125rem'
];


export const FontWeights= {
	thin:"100",
	normal:"400",
	regular:"400",
	semiBold: "600",
	bold: "700",
	heavy:"900"
}

export const typography = {
	fontFamily: 'Aktifo-A',
	display1: {
		fontWeight: FontWeights.semiBold,
		lineHeight: 1.25,
		fontSize: fontSizes[10], // 52px
	},
	fontWeightSemiBold: FontWeights.semiBold,
	display2: {
		fontWeight: FontWeights.semiBold,
		lineHeight: 1.24,
		fontSize: fontSizes[9],
	},
	display3: {
		fontWeight: FontWeights.semiBold,
		lineHeight: 1.25,
		fontSize: fontSizes[8], // 32px
	},
	h1: {
		fontWeight: FontWeights.semiBold,
		fontSize: fontSizes[7],
		lineHeight: 1.29,
	},
	h2: {
		fontWeight: FontWeights.semiBold,
		fontSize: fontSizes[5],
		lineHeight: 1.25
	},
	h3: {
		fontWeight: FontWeights.semiBold,
		fontSize: fontSizes[3],
		lineHeight: 1.25
	},
	h4: {
		fontWeight: FontWeights.semiBold,
		fontSize: fontSizes[2],
		lineHeight: 1.29
	},
	h5: {
		fontWeight: FontWeights.semiBold,
		fontSize: fontSizes[1],
		lineHeight: 1.33
	},
	h6: {
		fontWeight: FontWeights.semiBold,
		fontSize: fontSizes[0],
		lineHeight: 1.2
	},
	body1: {
		lineHeight: 1.5,
		fontWeight: FontWeights.normal,
		fontSize: fontSizes[2]
	},
	body2: {
		lineHeight: 1.5,
		fontWeight: FontWeights.normal,
		fontSize: fontSizes[1]
	},
	small: {
		lineHeight: 1.5,
		fontWeight: FontWeights.normal,
		fontSize: fontSizes[0]
	},
	small2: {
		lineHeight: 1.5,
		fontWeight: FontWeights.normal,
		fontSize: fontSizes[0]
	}
}
