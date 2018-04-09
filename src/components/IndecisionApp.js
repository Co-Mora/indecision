import React from "react";
import AddOption from '../components/AddOption';
import Options from '../components/Options';
import Action from '../components/Action';
import Header from '../components/Header';
import OptionModal from '../components/OptionModal';

export default class IndecisionApp extends React.Component {
    state ={
        options: [],
        selectedOption: undefined
    };

    handlePick = () => {

        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomOption];

        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {

        if(!option) {

            return "Enter VALID STRING";
        } else if(this.state.options.indexOf(option) > -1) {

            return "The option has been exists ";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)

        }));


    };

    handleDeleteOptions = () => {

        this.setState( () => ({options: []}));

    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter( (option) => optionToRemove !== option)
        }));
    };
    handleSelectedOption = () => {

        this.setState((prevState) => ({
            selectedOption: !prevState.selectedOption
        }));

    };
    componentDidMount() {

        try{

            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }

        } catch (e) {

            //Do Nothing

        }


    }

    componentDidUpdate(prevPropps, prevState) {

        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log("Changing Component Class")
    }



    render() {
        const title = "Indecision App";
        const content = "Put your life in the hand on experience";
        return (
            <div>
                <Header content={content} title={title}/>
                <div className="container">
                    <Action
                        hasOption={this.state.options.length}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            arr={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleSelectedOption={this.handleSelectedOption}/>
            </div>
        )
    }

}
