import { useRecoilValue } from 'recoil'
import '../Form.css' // Import css
import { todoListAtom } from '../recoil/react/todoAtom'
import '../todo.css'
import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'

export const TodoMain = () => {
  const todoList = useRecoilValue(todoListAtom)

  return (
    <div className="wrapper">
      <br />
      <div>
        {todoList.length > 0 && (
          <div>
            {todoList.map((todoItem: any) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </div>
        )}
      </div>
      <p>
        <div>
          <TodoItemCreator />
        </div>
      </p>
    </div>
  )
}
