export const generateProductId = () => {
  const prefix = 'P'
  const id = prefix + Date.now()
  return id
}
