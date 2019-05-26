import React from 'react';
import { connect } from 'react-redux'
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonText } from '@ionic/react'
import Todo from '../components/todo'
import { ITodo } from '../reducers/todoReducer';
import { IAppState } from '../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getAllTodos, ITodoGetAllAction } from '../actions/todoActions';

interface IProps {
  todos: ITodo[],
  getTodos: () => Promise<ITodoGetAllAction>
}
class Todos extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  componentWillMount() {
    this.props.getTodos();
  }
	render() {
    const { todos } = this.props;
		return (
			<React.Fragment>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Todos</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonText color="warning">
						<p>This page is setup for temporary learning purpose, will be deleted after!</p>
					</IonText>
          {todos && todos.map(todo => {
            return (
              <Todo todo={todo}></Todo>
            )
          })}
				</IonContent>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (store: IAppState) => {
  return {
    todos: store.todoState.todos
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getTodos: () => dispatch(getAllTodos())
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);