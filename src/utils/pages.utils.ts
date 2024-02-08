function getPageFromUrl() {
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  const pageName = pathParts[1];
  return (pageName==='')?'home':pageName;
}

function getLogo() {
  if (getPageFromUrl()=='projects') {
    return 'cross';
  } else {
    return 'default';
  }
}

export { getLogo, getPageFromUrl };