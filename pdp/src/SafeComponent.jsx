import React from "react";

// A way to handle and catch possible errors without taking down the MFE
// You can add logging here and some message to be display on the page for a fautly component.
export default class SafeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state= {hasError: false};
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(){}

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong. </h1>
        }
        return this.props.children;
    }
}