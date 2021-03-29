import React,{Component} from 'react'
import Form from './Form'
import './Todo.css'

class Todo extends Component{
	render(){
		return(
			<div className="main-todo">
				<Form />
			</div>
		)
	}
}
export default Todo