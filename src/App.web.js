import React from "react";
import Button from '@material-ui/core/Button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    Ceci est la version WEB !
                </h1>
                <Button variant="contained" color="primary">
                    Ceci est un bouton Material-UI !
                </Button>
                <Button variant="contained" color="primary">
                    Nouveau button pour test PR
                </Button>
            </div>
        );
    }
}
