export const language = () => {
  if (typeof navigator !== 'undefined') {
    let cached = null
    if (typeof localStorage !== 'undefined') {
      cached = localStorage.getItem('apical_language')
    }
    return (
      cached
      || navigator.language.substring(0, 2)
      || navigator.userLanguage.substring(0, 2)
    )
  }
  return 'it'
}

export const switchLanguage = (lang) => {
  localStorage.setItem('apical_language', lang)
}
