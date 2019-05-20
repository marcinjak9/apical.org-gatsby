export const language = () => {
  if (typeof navigator !== 'undefined') {
    return (
      navigator.language.substring(0, 2)
      || navigator.userLanguage.substring(0, 2)
    )
  }
  return 'it'
}
