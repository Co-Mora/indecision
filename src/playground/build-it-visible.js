

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {

            visible:false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });

    }
    render(){

        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details': 'Show details'}</button>
                {this.state.visible && <p>Here's the information is here</p>}
            </div>
        );
    }

}


ReactDOM.render(<VisibilityToggle />, document.getElementById('container'));




// let visibility = false;
// const buildVisible = () => {
//
//     visibility = !visibility;
//     if (visibility) {
//
//     }
//     render();
//
// }
//
// const render = () => {
//     const templateOne = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={buildVisible}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Here's some content</p>}
//         </div>
//     );
//     ReactDOM.render(templateOne, appRoot);
// }
//
//
// const appRoot = document.getElementById('container');
// render();