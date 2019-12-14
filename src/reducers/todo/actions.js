import { fetchMock } from "../../api-mock/api"


export const add = (value) => {
  console.log("pwett add")
  return { type: "ADD_TODO_ITEM", value }
}


export const remove = (key) => ({ type: "REMOVE_TODO_ITEM", key })

export const edit = (key, value) => ({ type: "EDIT_TODO_ITEM", key, value })

export const set = (todo) => ({ type: "SET_TODO", todo })

export const insertAPI = (value) => {
  return (dispatch) => {
    return fetchMock('https://formation-redux-thunk.free.beeceptor.com/todo',
      {
        method: "POST",
      }).then((res) => {
        console.log("res", res)
        if (!res.ok) {
          throw new Error("Une erreur est survenue lors de l'insertion de l'item")
        }
      }).then(() => {
        console.log("ADD")
        return dispatch(add(value))
      }).catch((error) => {
        return error
      })
  }
}

export const deleteAPI = (key) => {

  return (dispatch) => {
    return fetchMock('https://formation-redux-thunk.free.beeceptor.com/todo/' + key,
      {
        method: "DELETE",
      }).then((res) => {
        console.log("res", res)
        if (!res.ok) {
          throw new Error("Une erreur est survenue lors de l'insertion de l'item")
        }
      }).then((body) => {
        return dispatch(remove(key))
      }).catch((error) => {
        return error
      })
  }
}

export const updateAPI = (key, value) => {
  return (dispatch) => {
    return fetchMock('https://formation-redux-thunk.free.beeceptor.com/todo/' + key,
      {
        method: "POST",
      }).then((res) => {
        console.log("res", res)
        if (!res.ok) {
          throw new Error("Une erreur est survenue lors de l'insertion de l'item")
        }
      }).then((body) => {
        return dispatch(edit(key))
      }).catch((error) => {
        return error
      })
  }
}

