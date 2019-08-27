import React, { Component } from 'react';
import {Table, Segment, Loader, Image, Dimmer} from 'semantic-ui-react';
import ColumnaProfesores from './ColumnaProfesores';
import profesores from '../../api/profesores';

class TablaProfesores extends Component {
    constructor() {
        super();

        this.state={
            profesores: null
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
        this.getProfesores();
        }, 1500);
    }
    getProfesores(){
        this.setState({profesores:profesores});
    }

    render() {
    const { profesores } = this.state;
    

        if (profesores === null) {
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
    {profesores.map(profesor =>(
        <ColumnaProfesores key= {profesor.id} profesor={profesor}/>
    ))} 
   </Table.Body>
  </Table>
    );
   }
}
}

export default TablaProfesores;