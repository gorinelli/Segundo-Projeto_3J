const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel);
}
  
const tickfont = {
    color: getCSS ('--cor-de-primaria'),
    size: 16,
    family: getCSS('--fonte')
}

export { getCSS, tickfont }