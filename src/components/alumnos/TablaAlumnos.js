import React, { Component } from 'react';
import {Table, Segment, Loader, Image, Dimmer} from 'semantic-ui-react';
import ColumnaAlumnos from './ColumnaAlumnos';
import alumnos from '../../api/alumnos';

class TablaAlumnos extends Component {
    constructor() {
        super();

        this.state={
            alumnos: null
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
        this.getAlumnos();
        }, 1500);
    }
    getAlumnos(){
        this.setState({alumnos:alumnos});
    }

    render() {
    const { alumnos } = this.state;
    

        if (alumnos === null) {
            return(
                <Segment>
      <Dimmer active inverted>
        <Loader inverted>Cargando</Loader>
      </Dimmer>
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
            ); 
   } else {
       return(
    <Table fixed>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Edad</Table.HeaderCell>
        <Table.HeaderCell>Nivel Actual</Table.HeaderCell>
        <Table.HeaderCell>Acciones</Table.HeaderCell>
      </Table.Row>
    </Table.Header> 

    
    
    <Table.Body> 
    {alumnos.map(alumno =>(
        <ColumnaAlumnos key= {alumno.id} alumno={alumno}/>
    ))} 
   </Table.Body>
  </Table>
    );
   }
}
}

export default TablaAlumnos;