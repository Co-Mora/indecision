class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {

            count: 0
        }
    }


    componentDidMount() {



        try {
            const num = localStorage.getItem('num');
            const count = parseInt(num, 10);
            if(!isNaN(counst)) {
                this.setState(() => ({count}));
            }

        } catch (e) {

        }


    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.count !== this.state.count) {
            localStorage.setItem('num', this.state.count);
        }

    }

    componentWillUnmount() {

    }

    handleAddOne() {
        this.setState((prevState) => {
           return {
               count: prevState.count +1
           };
        });
        console.log("handleAddOne");

    }

    handleMinusOne() {

        this.setState((prevState) => {
           return {
               count: prevState.count -1
           }
        });
        console.log("handleMinusOne");

    }

    handleReset() {

        this.setState(() =>{
            return {
                count: 0
            }
        });


        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });


        console.log("handleReset");

    }


    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>

        );
    }
}


ReactDOM.render(<Counter count={0}/>, document.getElementById('container'));
