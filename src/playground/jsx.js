
const user = {

    name:"Omar",
    age: 32,
    model: 2016,
    location: "New York"
}

function getLocation(loc) {
    if(loc) {
        return <p>Location {user.location}</p>
    }
}

const template = (
    <div>
        <h1>{user.name}</h1>
        {getLocation(user.location)}
        <p>{user.model ? 'Yes got it' : 'UNKNOWN'}</p>
        {user.age > 18 && <p>Age: {user.age}</p>}
    </div>
);


const app = {
    title: "Indecision App",
    subtitle: "This is app that explain all staff together",
    options: [],
    boolDis: false
};


const formSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted")
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        app.boolDis = true;
        e.target.elements.option.value = '';
        renderTemplateTwo();
    }
};

const removeAll = () => {
    app.options.splice(0, app.options.length);
    console.log(app.options.length);
    renderTemplateTwo();
}


const onRandomNumber = () => {

    const randomNum = Math.floor(Math.random() * app.options.length);
    const randomOption = app.options[randomNum];
    alert(randomOption);

}

const AppRoot = document.getElementById('container');

const renderTemplateTwo = () => {
    const templateTwo = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onRandomNumber}>What Should I do?</button>
            <button onClick={removeAll}>Remove</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"/>
                <button>Add One</button>
            </form>
        </div>
    )
    ReactDOM.render(templateTwo, AppRoot);
};

renderTemplateTwo();