import { useRecoilState } from 'recoil'
import { todoListAtom } from '../recoil/react/todoAtom'

import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editName = (event) => {
    const newList = replatItemAtIndex(todoList, index, {
      ...item,
      name: event.target.value,
    })
    setTodoList(newList)
  }
  const editSalary = (event) => {
    const newList = replatItemAtIndex(todoList, index, {
      ...item,
      salary: event.target.value,
    })

    setTodoList(newList)
  }
  const editDepartment = (event) => {
    const newList = replatItemAtIndex(todoList, index, {
      ...item,
      department: event.target.value,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }
  const submit = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteItem(),
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
        },
      ],
    })
  }
  return (
    <div className="display-form">
      <input type="text" value={item.name} onChange={editName} className="display-text" />
      <input type="text" value={item.salary} onChange={editSalary} className="display-text" />
      <input type="text" value={item.department} onChange={editDepartment} className="display-text" />

      <button className="input-delete" onClick={submit}>
        X
      </button>
    </div>
  )
}

const replatItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
