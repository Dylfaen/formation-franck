import React, { useEffect } from 'react';
import Todo from '../components/Todo/Todo';
import { bindActionCreators } from 'redux';
import * as todoActions from '../reducers/todo/actions'
import { connect } from 'react-redux';
import { fetchMock } from '../api-mock/api';

const TodoContainer = (props) => {
  useEffect(() => {
    fetchMock('https://formation-redux-thunk.free.beeceptor.com/todo',
      {
        method: "GET"
      }).then((res) => {
        console.log("res", res)
        return res.json()
      }).then((body) => {
        console.log("body", body)
        props.set(body)
      })
  }, [])

  return (

    <Todo
      items={props.items}
      onAdd={props.add}
      onRemove={props.deleteAPI}
      onEdit={props.edit}
    />

  );
}

const mapStateToProps = (state) => ({
  items: state.todo
})

const mapDispatchToProps = (dispatch) => ({
  add: bindActionCreators(todoActions.add, dispatch),
  insertAPI: bindActionCreators(todoActions.insertAPI, dispatch),
  edit: bindActionCreators(todoActions.edit, dispatch),
  remove: bindActionCreators(todoActions.remove, dispatch),
  deleteAPI: bindActionCreators(todoActions.deleteAPI, dispatch),
  set: bindActionCreators(todoActions.set, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);