export const sendAnswer = (body) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok")
    }, 1000)
  })

}

export const sendAnswerWithError = (body) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error")
    }, 1000)
  })
}