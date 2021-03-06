let visibility = false;

const toggleBtn = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>

            <button onClick={toggleBtn}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && <p>These are some details</p>}
            
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();