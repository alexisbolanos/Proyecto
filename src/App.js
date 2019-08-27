import React, { Component } from 'react';
import { Header, Icon, Divider, Container, } from 'semantic-ui-react';
import ButtonGroup  from './components/ButtonGroup';
import TablaAlumnos from './components/alumnos/TablaAlumnos';
import TablaProfesores from './components/profesores/TablaProfesores';


class App extends Component {
 constructor() {
    super();
    this.state={
      tablaVisible: 'alumnos'
    };
    this.setTablaVisible = this.setTablaVisible.bind(this);
 }

 setTablaVisible (tablaSeleccionada) {
   this.setState({ tablaVisible: tablaSeleccionada });
    }

renderTabla() {
  const { tablaVisible } = this.state;

  if (tablaVisible==='alumnos') {
    return <TablaAlumnos />;
  } else if (tablaVisible=== 'profesores') {
    return <TablaProfesores />;
  }
  }


 render () {
   const { tablaVisible } = this.state;

  return (
    <div className="App">
      <Header as='h2' icon textAlign='center'>
      <Icon name='book' circular />
      <Header.Content>Colegio App</Header.Content>
    </Header>
    <Divider />
    <Container textAlign="center">
    { this.renderTabla()}
        <ButtonGroup setTablaVisible={this.setTablaVisible} />      
    </Container>

    </div>
  );
}
}

export default App;
