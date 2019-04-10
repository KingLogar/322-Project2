import React, { Component } from 'react';

class TodoElement extends Component{
    render() {
        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>{ this.props.title }</div>
            <div className='taskBoard-element-type'>Type: { this.props.type }</div>
            <button type="button" onClick={ () => { this.props.startOnclick(this.props.id)} } className='taskBoard-element-button btn btn-outline-primary btn-sm' >Start</button>
        </div>)
    }
}

class InProgressElement extends Component {
    render() {
        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>{ this.props.title }</div>
            <div className='taskBoard-element-type'>Type: { this.props.type }</div>
            <button  type="button" onClick={ () => {this.props.sendBackOnclick(this.props.id)} } className='taskBoard-element-button btn btn-outline-primary btn-sm' >Send Back</button>
            <button type="button" onClick={ () => {this.props.reviewOnclick(this.props.id)} } className='taskBoard-element-button btn btn-outline-secondary btn-sm' >Review</button>
        </div>)
    }
}

class ReviewElement extends Component {
    render() {
        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>{ this.props.title }</div>
            <div className='taskBoard-element-type'>Type: { this.props.type }</div>
            <button type="button" onClick={ () => {this.props.backToWorkOnclick(this.props.id)} } className='taskBoard-element-button btn btn-outline-primary btn-sm' >Back to Work</button>
            <button type="button" onClick={ () => {this.props.doneOnclick(this.props.id)} } className='taskBoard-element-button btn btn-outline-secondary btn-sm' >Done</button>
        </div>)
    }
}

class DoneElement extends Component {
    render() {
        return (<div className='taskBoard-TodoElement'>
            <div className='taskBoard-element-title'>{ this.props.title }</div>
            <div className='taskBoard-element-type'>Type: { this.props.type }</div>
            <button type="button" onClick={ () => {this.props.reviewAgainOnclick(this.props.id)} } className='taskBoard-element-button btn btn-outline-primary btn-sm' >Review again</button>
        </div>)
    }
}

export default {
    TodoElement: TodoElement,
    InProgressElement: InProgressElement,
    ReviewElement: ReviewElement,
    DoneElement: DoneElement
}