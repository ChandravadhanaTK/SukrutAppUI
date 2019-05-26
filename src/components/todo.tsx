import React from 'react';
import { IonItem, IonLabel, IonCheckbox } from '@ionic/react'
import { ITodo } from '../reducers/todoReducer';

interface IProps {
  todo: ITodo
}
const Todo: React.FC<IProps> = ({ todo }) => {
  return (
    <React.Fragment>
      <IonItem>
        <IonLabel>
          <IonCheckbox checked={todo.completed} /> { todo.title }
        </IonLabel>
      </IonItem>
    </React.Fragment>
  )
}

export default Todo;