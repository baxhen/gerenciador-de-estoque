export const generateTakeOffId = () => {
  const prefix = 'TKOFF'
  const id = prefix + Date.now()
  return id
}
