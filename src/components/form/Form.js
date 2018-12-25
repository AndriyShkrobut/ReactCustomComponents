import React from 'react';
import './Form.css';
import FormRender from './FormRender'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedin: false,
            loading: false,
            character: {},
            firstName: "",
            surName: "",
            location: "", 
            prgLng: "",
            isMarried: false,
            sex: "",
            area: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        console.log(event.target);
        const {name, value, type, checked} = event.target;
        if(type === "checkbox"){
            this.setState({[name]: checked})
        } 
        else {
            this.setState({[name]: value});
        }
    }

    handleSubmit(event) {
        this.setState(prevState => {
            return {isLoggedin: !(prevState.isLoggedin)}
        });
        event.preventDefault();
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
    }

    render()
    {
        return(
            <FormRender 
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                {...this.state}

            />
        )
    }
}

export default  Form;