import { css } from '@emotion/css';

export const AuditDocumentStyle = css({
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white',

	'> div:nth-child(1)': {
		width: '92%',
		height: '90%',
		display: 'grid',
		gridTemplateRows: '1fr 12fr',

		'input[type=text]': {
			backgroundColor: 'transparent',
			border: 'none',
			padding: 0,
			'&:focus': {
				outline: 'none',
				backgroundColor: 'transparent',
			},
		},
	},
});