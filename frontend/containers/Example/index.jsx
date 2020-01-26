import './style.sass'
import React from 'react'
import { connect } from "react-redux"
import { ExampleActions } from '../../store/Example/slice.js'

class Example extends React.Component 
{    
    state = {}
    onAction1Click(){
        this.props.onIncrementAction()
    }
    onAction2Click(){
        this.props.onDecrementAction()
    }
    onAction3Click(){
        this.props.onMultiplyAction(2)
    }
    onAction4Click(){
        this.props.onIncrementByAction(2)
    }
    onAction5Click(){
        this.props.onIncrementByAsyncAction(2)
    }


    // ============================ Методы жизненного цикла ==========================
    // Mount - 1, Update - 1
    static getDerivedStateFromProps(props, state){
        // вызывается непосредственно перед вызовом метода render, как при начальном монтировании, так и при последующих обновлениях.
        // Он должен вернуть объект для обновления состояния или null, чтобы ничего не обновлять.
        return null
    }
    // Update - 2
    shouldComponentUpdate(nextProps, nextState){
        // вызывается при изменении состояния, перед рендером. 
        // Управляет выполнением рендера на следующем этапе (может разрешить или запретить его, вернув "true" или "false")
        return true
    }
    // Mount - 2, Update - 3
    render(){
        return (<div id="example">
            <div ref={ (element) => this.outputFrame = element }>{JSON.stringify(this.props.exampleState)}</div>
            <button onClick={this.onAction1Click.bind(this)}>Action1</button>
            <button onClick={this.onAction2Click.bind(this)}>Action2</button>
            <button onClick={this.onAction3Click.bind(this)}>Action3</button>
            <button onClick={this.onAction4Click.bind(this)}>Action4</button>
            <button onClick={this.onAction5Click.bind(this)}>Action5</button>
        </div>)
    }
    // Mount - 3
    componentDidMount(){
        // вызывается сразу после монтирования (то есть, вставки компонента в DOM).
    }
    // Update - 4
    getSnapshotBeforeUpdate(prevProps, prevState){
        // Вызывается перед "componentDidUpdate" - на этапе "фиксации", перед измененем DOM
        // Может возвращать произвольное значение (или null), которое будет передано в "componentDidUpdate" третьим параметром
        return null
    }
    // Update - 5
    componentDidUpdate(prevProps, prevState, snapshot){
        // вызывается сразу после обновления компонента и рендера.
    }
    // Unmount - 1
    componentWillUnmount(){
        // вызывается непосредственно перед размонтированием и удалением компонента из DOM. 
    }
    // Error - 1
    static getDerivedStateFromError(error){
        // вызывается при возникновении исключения в дочернем компоненте, перед этапом рендера
        // Может вернуть новое состояние (или null ????)
        return this.state
    }
    // Error - 2
    componentDidCatch(error, info){
        // вызывается после "getDerivedStateFromError", когда рендер уже выполнен
    }
}

export default connect(
    function mapStateToProps(state){
        // Чтение внешнего стейта
        return {
            exampleState: state.example
        }
    },
    function mapDispatchToProps(dispatch){
        // Мутация внешнего стейта
        return {
            onIncrementAction: function(value){ 
                dispatch(ExampleActions.increment(value)) 
            },
            onIncrementByAction: function(value){ 
                dispatch(ExampleActions.incrementBy(value)) 
            },
            onIncrementByAsyncAction: function(value){
                dispatch(ExampleActions.incrementByAsync(value)) 
            },
            onDecrementAction: function(value){ 
                dispatch(ExampleActions.decrement(value)) 
            },
            onMultiplyAction: function(value){ 
                dispatch(ExampleActions.multiply(value)) 
            }
        }
    }
  )(Example)