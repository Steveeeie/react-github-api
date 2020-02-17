const theme = {
  colors: {
    blue: '#2196f3',
    white: '#ffffff',
    light: '#ccc',
    dark: '#35363a',
    darker: '#202124'
  },
  focus: 'inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 4px rgba(3, 102, 214, 0.3)',
  bevel: {
    small: '2px 2px 4px #2d2e31, -2px -2px 4px #3d3e43',
    medium: '4px 4px 8px #2d2e31, -4px -4px 8px #3d3e43'
  },
  spacing: factor => [0, 4, 8, 12, 16, 24, 32, 64][factor] + 'px'
};

export default theme;
