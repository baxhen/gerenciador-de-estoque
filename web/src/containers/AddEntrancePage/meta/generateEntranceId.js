export const generateEntranceId = () => {
  const prefix = 'ENTR'
  const id = prefix + Date.now()
  return id
}
