const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
	content: [
		'../spirit-blank/*.js',
		'../spirit-blank/*.php',
		'../spirit-blank/framework/**/*.php',
		'../spirit-blank/template-parts/**/*.php',
		'../spirit-blank/assets/images/**/*.svg',
		'../spirit-blank/assets/js/**/*.js',
		'./*.js',
		'./*.php',
		'./framework/**/*.php',
		'./template-parts/**/*.php',
		'./assets/images/**/*.svg',
		'./assets/js/**/*.js',
	],
	corePlugins: {
		preflight: true,
		fontFamily: true,
		float: false,
		clear: false,
		appearance: false,
		gridColumnEnd: false,
		gridColumnStart: false,
		gridRowStart: false,
		gridRowEnd: false,
	},
	theme: {
		filter: {
			'none': 'none',
			'grayscale': 'grayscale(1)',
			'grayscale-0': 'grayscale(0)',
			'grayscale-50': 'grayscale(0.5)',
			'saturate': 'saturate(0)',
			'saturate-0': 'saturate(1)',
			'saturate-50': 'saturate(0.5)',
		},
		extend: {
			colors: {
				spirit:{
					DEFAULT: '#5C3F75'
				},
				primary: {
					DEFAULT: '#99d4c3'
				},
				secondary: {
					DEFAULT: '#F2B2AC'
				},
				red: {
					DEFAULT: '#F20E0E'
				},
				black: {
					DEFAULT: '#0D0D0D'
				},
				accent: {
					DEFAULT: '#F20E0E',
					primary: '#F2B2AC',
					secondary: '#F2B2AC'
				},
			},
			fontFamily: {
				...fontFamily,
				'sans': ['Open Sans', 'sans-serif', 'system-ui'],
				'condensed': '"Open Sans Condensed", sans-serif'
			},
			spacing: {
				xs: '.25rem',
				sm: '.75rem',
				md: '1rem',
				lg: '1.5rem',
				xl: '3rem'
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: '#333',
						blockquote: {
							padding: theme('p-20'),
							backgroundColor: theme('bg-gray-100')
						},
						a: {
							color: '#3182ce',
							'&:hover': {
								color: '#2c5282',
							},
						},
						h2: {
							marginTop: theme('padding.md'),
							marginBottom: theme('padding.md')
						},
						h3: {
							marginTop: theme('padding.md'),
							marginBottom: theme('padding.md')
						},
						h4: {
							marginTop: theme('padding.md'),
							marginBottom: theme('padding.md')
						},
					},
				},
			}),
			padding: {
				'square': '100%',
				'16/9': '56.25%',
				'4/3': '75%',
				'21/9': '42.6%'
			},
			height: {
				'40vh': '40vh',
				'50vh': '50vh',
				'80vh': '80vh',
				'83vh': '83vh',
			},
			minHeight: {
				'20': '5rem',
				'40vh': '40vh',
				'50vh': '50vh',
			},
			maxHeight: {
				'40vh': '40vh',
				'50vh': '50vh',
			},
			minWidth: {
				'1/3': '33.33%',
				'1/2': '50%',
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
			},
			transitionProperty: {
				'background-position': 'background-position',
			},
			gradientColorStops: {
				'half-white': 'white 50%',
				'half-transparent': 'rgba(0,0,0,0) 50%'
			},
			backgroundSize: {
				200: '200% 200%'
			},
			backgroundPosition: {
				'bottom-left': 'bottom left',
				'top-right': 'top right'
			},
		}
	},
	variants: {
		opacity: ['responsive', 'events', 'group-events'],
		scale: ['events', 'group-events'],
		filter: ['events', 'group-events'],
		extend: {
			padding: ['last','first'],
			textColor: ['events', 'group-events'],
			display: ['group-hover', 'group-focus'],
			backgroundColor: ['events'],
			backgroundSize: ['events'],
			backgroundPosition: ['events'],
			borderColor: ['events'],
			translate: ['events'],
			scale: ['events','group-events'],
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		plugin(function({ addVariant, e }) {
			addVariant('events', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const selector = e(`events${separator}${className}`);
					return `.${selector}:hover, .${selector}:focus`;
				});
			});

			addVariant('group-events', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const selector = e(`group-events${separator}${className}`);
					return `.group:hover .${selector}, .group:focus .${selector}`;
				});
			});
		}),
		require('tailwindcss-filters'),
	]
};
