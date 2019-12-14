export const fetchMock = (url, options, shouldFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail === true) {
        resolve({ ok: false })
      } else {
        if (options.method === "GET") {
          resolve({
            json: () => {
              return Promise.resolve([
                "Faire les courses",
                "Acheter du pain"
              ])
            }
          })
        } else {
          resolve({ ok: true })
        }
      }
    }, 1000)
  })
}