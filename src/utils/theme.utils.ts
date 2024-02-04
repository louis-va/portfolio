const getTheme = () => {
  const preferedTheme = (window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'dark' : 'light';
	const theme = localStorage.getItem("theme") || preferedTheme;
  return theme;
}

export default getTheme;