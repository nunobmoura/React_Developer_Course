class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hello</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));





// let visibility = false;

// const toggleBtn = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={toggleBtn}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>These are some details</p>}
            
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// render();