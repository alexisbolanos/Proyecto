import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class ButtonGroup extends Component {
constructor (props) {
    super (props);
}

    render () {
        const { setTablaVisible} = this.props;
        let alumnosSeleccionado = setTablaVisible === 'alumnos' ? true : false;
        let profesoresSeleccionado  = setTablaVisible === 'profesores' ? true : false;
        return(
            <Button.Group>
                 <Button onClick={()=> setTablaVisible ('alumnos')} 
                 color="blue" positive > Alumnos </Button>
                 <Button.Or text="" />
                <Button onClick={()=> setTablaVisible ('profesores')} color="blue">Docentes</Button>                  
             </Button.Group>

        );
    }
}

export default ButtonGroup;