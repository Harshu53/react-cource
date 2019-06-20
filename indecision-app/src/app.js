class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        }

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleRemoveAll() {
        this.setState( () => {
            return {
                options: []
            }
        } );
    }

    handlePick() {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid option';
        } else if( this.state.options.indexOf(option) > -1 ) {
            return 'THis option is already exists';
        }

        this.setState( (prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        } );
    }

    render() {
        const subtitle = 'Put your life in the hands of a Computer.';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options options={this.state.options} 
                        handleRemoveAll={this.handleRemoveAll}
                        />
                <AddOptions
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should i do?
            </button>
        </div>
    );
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                 What should i do?
//                 </button>
//             </div>
//         );
//     }
// }

class Options extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleRemoveAll}>Remove All</button>
                <p>Options:</p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} /> )
                }
                <Option suboption={this.props.option}/>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
           <p>{props.optionText}</p>
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState( () => {
            return {
                error//here if we are defining only the variable that means the index name of the state is also same and this is the shorthend syntax of setting the state
            }
        } );

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

// Basic Example of the functional components.
/* const User = (props) => {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<User name="Kavish Mahajan" age ="1"/>, document.getElementById("app")); */
ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));