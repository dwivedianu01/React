import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { todoListAtom } from '../recoil/react/todoAtom'

export const TodoItemCreator = () => {
  const [inputName, setInputName] = useState('')
  const [inputSalary, setInputSalary] = useState('')
  const [inputDepartment, setInputDepartment] = useState('')
  const [_, setTodoList] = useRecoilState(todoListAtom)

  const onNameChange = (event) => {
    setInputName(event.target.value)
  }

  const onSalaryChange = (event) => {
    setInputSalary(event.target.value)
  }

  const onDepartmentChange = (event) => {
    setInputDepartment(event.target.value)
  }

  const addTodoItem = () => {
    if (inputName && inputSalary && inputDepartment) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: uuidv4(),
          name: inputName,
          salary: inputSalary,
          department: inputDepartment,
          isComplete: false,
        },
      ])
      setInputName('')
      setInputSalary('')
      setInputDepartment('')
    }
  }

  return (
    <>
      <div>
        <div className="form-container">
          <input type="text" placeholder="Employee Name" value={inputName} onChange={onNameChange} className="input-text" />
          <input type="text" placeholder="Salary" value={inputSalary} onChange={onSalaryChange} className="input-text" />
          <input type="text" placeholder="Department" value={inputDepartment} onChange={onDepartmentChange} className="input-text" />
          <button className="input-submit" onClick={addTodoItem}>
            ADD
          </button>
        </div>
      </div>
    </>
  )
}
