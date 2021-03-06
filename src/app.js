console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'This is the substitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
        app.options = [];
        render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}!</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();