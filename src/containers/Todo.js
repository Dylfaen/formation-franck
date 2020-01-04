import Todo from '../components/Todo/Todo';
import { bindActionCreators } from 'redux';
import * as todoActions from '../reducers/todo/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  items: state.todo
})

const mapDispatchToProps = (dispatch) => ({
  onAdd: bindActionCreators(todoActions.add, dispatch),
  onEdit: bindActionCreators(todoActions.edit, dispatch),
  onRemove: bindActionCreators(todoActions.remove, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);