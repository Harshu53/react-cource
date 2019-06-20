class Visiblity extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisiblityToggle = this.handleVisiblityToggle.bind(this);

        this.state = {
            visibity: false
        };
    }

    handleVisiblityToggle() {
        this.setState((prevState) => {
            return {
                visibity: !prevState.visibity
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleVisiblityToggle}>{this.state.visibity ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibity && (
                    <div>
                        <p>Hey, These are details you can see.</p>
                    </div>
                ) }
            </div>
        );
    }
}

ReactDOM.render(<Visiblity/>, document.getElementById('app'));


/* let isVisible = false;

const showContent = () => {
    isVisible = !isVisible;
    renderVisiblity();
}

const appRoot = document.getElementById('app');

const renderVisiblity = () => {
    const visiblity = (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={showContent}>{isVisible ? 'Hide Details' : 'Show Details'}</button>
            {isVisible && (
                <div>
                    <p>Hey, These are details you can see.</p>
                </div>
            ) }
        </div>
    );

    ReactDOM.render( visiblity, appRoot );
}

renderVisiblity(); */