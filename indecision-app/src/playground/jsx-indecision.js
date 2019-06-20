console.log('App.js is running');

// JSX - Javascript XML
const app = {
    title : 'Indecision App!',
    subtitle : 'I love the Programming!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
   
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.info}</p>}
            <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>RemoveAll</button>
            <ol>
                {
                    app.options.map((number) => <li key={number}>{number}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();

