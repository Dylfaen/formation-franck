
const initialState = []

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO_ITEM':
      return [
        ...state,
        action.value
      ]
    case 'REMOVE_TODO_ITEM':
      {
        let newState = [...state];
        newState.splice(action.key, 1)
        return newState
      }
    case 'EDIT_TODO_ITEM':
      {
        let newState = [...state];
        newState.splice(action.key, 1, action.value)
        return newState
      }
    case 'SET_TODO':
      {
        return [...action.todo]
      }
    default:
      return state
  }
}

export default todo
