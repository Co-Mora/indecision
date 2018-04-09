
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption= this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    handlePick() {

        const randomOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomOption]);
    }

    handleAddOption(option) {

        if(!option) {

            return "Enter VALID STRING";
        } else if(this.state.options.indexOf(option) > -1) {

            return "The option has been exists ";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)

        }));


    }
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

    handleDeleteOptions() {

        this.setState( () => ({options: []}));

    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter( (option) => optionToRemove !== option)
        }));
    }


    render() {
        const title = "Indecision App";
        const content = "Put your life in the hand on experience";
        return (
            <div>
                <Header content={content} title={title}/>
                <Action
                    hasOption={this.state.options.length}
                    handlePick={this.handlePick}
                />
                <Options
                    arr={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }

}



const Header = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            {props.content && <p>{props.content}</p>}
        </div>

    );
};


Header.defaultProps = {
    title:"Indecision",
    content: "Put your code here!"
}

const Action = (props) => {

    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOption}>
                What should I do?
            </button>
        </div>

    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.arr.length === 0 && <p>Please add thing to get started</p>}
            {props.arr.map((text) => <Option
                key={text}
                optionText={text}
                handleDeleteOption={props.handleDeleteOption}
            />)}
        </div>
    );

};


const Option = (props) => {

    return (
        <div>
            {props.optionText}
            <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
                remove
            </button>
        </div>
    );
};



class AddOption extends React.Component {


    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {

            error: undefined

        }
    }


    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.input.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));

        if(!error) {
            event.target.elements.input.value = '';

        }



    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="input" placeholder="Enter your option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }

}


// const User = (props) => {
//
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }


ReactDOM.render(<IndecisionApp />, document.getElementById('container'));