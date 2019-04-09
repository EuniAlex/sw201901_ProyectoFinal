import React ,{Component} from 'react';
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import {
    Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment
  } from "semantic-ui-react";
  import '../../../App.css';
  
class home extends Component{
    state = {
        dropdownMenuStyle: {
          display: "none"
        }
      };
    
      handleToggleDropdownMenu = () => {
        let newState = Object.assign({}, this.state);
        if (newState.dropdownMenuStyle.display === "none") {
          newState.dropdownMenuStyle = { display: "flex" };
        } else {
          newState.dropdownMenuStyle = { display: "none" };
        }
    
        this.setState(newState);
      };
    render(){
        const slickSettings = {
            autoplay: true,
            dots: true,
            speed: 500
          };
        return(
            <div className="Home">
                <Grid className="mobile only">
                <Menu inverted borderless size="huge" fixed="top">
                    <Menu.Item header as="a">
                    MaxiRepuestos
                    </Menu.Item>
                    <Menu.Menu position="right">
                    <Menu.Item>
                        <Button
                        icon
                        basic
                        inverted
                        toggle
                        onClick={this.handleToggleDropdownMenu}
                        >
                        <Icon name="content" />
                        </Button>
                    </Menu.Item>
                    </Menu.Menu>
                    <Menu
                    vertical
                    borderless
                    inverted
                    fluid
                    style={this.state.dropdownMenuStyle}
                    >
                    <Menu.Item active as="a">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a">Encuesta</Menu.Item>
                    <Menu.Item as="a">Signin</Menu.Item>
                    <Menu.Item as="a">Login</Menu.Item>
                    <Menu.Item as="a">Catálogo</Menu.Item>
                    </Menu>
                </Menu>
                </Grid>
                <Slider {...slickSettings} className="slide">
                <Segment className="ui horizontal segments" >
                    <Container text className="active">
                    <br/>
                    <br/>
                    <Image 
                    centered
                    size="big" src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.0-9/47323007_1742960415808622_4808039377601036288_n.jpg?_nc_cat=104&_nc_ht=scontent.ftgu1-1.fna&oh=ba4929c8beff6af95d1550d4a8466198&oe=5D43AA31"/>
                    </Container>
                </Segment>
                <Segment className="ui horizontal segments" >
                    <Container text className="active">
                    <br/>
                    <br/>
                    <Image 
                    centered
                    size="big" src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.0-9/46869771_1732058806898783_1205679298027978752_n.jpg?_nc_cat=105&_nc_ht=scontent.ftgu1-1.fna&oh=3d2b06f6e62a80e88e34618ff928d26f&oe=5D39628B"/>
                    </Container>
                </Segment>
                <Segment className="ui horizontal segments" >
                    <Container text className="active">
                    <br/>
                    <br/>
                    <Image 
                    centered
                    size="big" src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.0-9/46803664_1732057226898941_3235712452523982848_n.jpg?_nc_cat=109&_nc_ht=scontent.ftgu1-1.fna&oh=adefbef4984baf24819c5f77fada5af8&oe=5D099220"/>
                    </Container>
                </Segment>
                </Slider>
                <Container>
                <Segment vertical>
                    <Grid container stackable textAlign="center" columns={3}>
                    <Grid.Column> 
                        <Image
                        centered
                        circular
                        size="small"
                        src="https://static1.squarespace.com/static/5b631ef5c3c16ae4fb3f2423/5b65da48f950b7f277cc35c5/5b65da492b6a286b6211ea72/1536697289871/todos-los-repuestos.png"
                        />
                        <Header as="h1">Variedad</Header>
                        <p textAlign="justify">
                        Representamos más de 50 marcas en las categorías de repuestos, accesorios, llantas, lubricantes y herramientas para vehículos asiáticos y americanos.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                        centered
                        circular
                        size="small"
                        src="https://pngimage.net/wp-content/uploads/2018/06/precios-bajos-png-5.png"
                        />
                        <Header as="h1">Precios más bajos</Header>
                        <p textAlign="justify">
                        Ven y comprueba que tenemos repuestos con precios accesibles para todos los presupuestos.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                        centered
                        circular
                        size="small"
                        src="http://www.viverosbarber.com/wp-content/uploads/2018/07/logo-control-de-calidad.png"
                        />
                        <Header as="h1">Calidad</Header>
                        <p textAlign="justify">
                        Contamos con repuestos 100% originales con el respaldo y garantía de fábrica, asegurándote mayor seguridad y confiabilidad.
                        </p>
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                    <Grid.Column width={10}>
                        <Header as="h1">
                        Nuestra{" "}
                        <span className="sub">Misión</span>
                        </Header>
                        <p>
                        Ofrecer en un mismo lugar, la mayor variedad de repuestos, insumos y accesorios automotrices disponibles en el mercado Hondureño para satisfacer las necesidades y superar las expectativas de los consumidores en calidad, precio y servicio proporcionando una atención personalizada, eficiente y altamente calificada, asegurando mantener una relación de largo plazo con clientes y proveedores, el desarrollo profesional de nuestros colaboradores y un crecimiento continuo y sostenido en la rentabilidad de la empresa.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.0-9/38689566_1590323271072338_2714117759943311360_n.png?_nc_cat=107&_nc_ht=scontent.ftgu1-1.fna&oh=ff9ab110c894bfa7860fb3940e4cb9f7&oe=5D027321" />
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                    <Grid.Column width={6}>
                        <Image src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.0-9/45072021_1693661184071879_2917032849892704256_n.jpg?_nc_cat=101&_nc_ht=scontent.ftgu1-1.fna&oh=7258c2c97ca3f8d7ecfce1f3cd1d20a8&oe=5D085269" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header as="h1">
                        Siempre<span className="sub"> las mejores marcas</span>
                        </Header>
                        <p>
                        ¡Porque nos gusta consentir a tu auto, contamos con las mejores marcas!
                        No olvides llamarnos al: 2233-5823
                        2233-5822
                        9443-8760
                        </p>
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                    <Grid.Column width={10}>
                        <Header as="h1">
                        Y nuestra, <span className="sub">Ubicación</span>
                        </Header>
                        <p>
                        ¡Para nosotros es un placer atenderte!😎
                        Al visitarnos en nuestra tienda encontraras parqueo para que puedas hacer tus compras cómodamente.
                        Recuerda que estamos ubicados en Col. América, Blvd. Rossvelt, Plaza Alicia, Contiguo a las tejitas.😉
                        ¡Visítanos!
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Image src="https://media.cdnandroid.com/50/82/29/c7/imagen-android-location-0big.jpg" /> 
                    </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid columns={2}>
                    <Grid.Column>
                        &copy; 2019 Seminario de Software <a href="#root">Unicah</a> ·{" "}
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                    </Grid.Column>
                    </Grid>
                </Segment>
                </Container>
            </div>
        );
    }
    
}

export default home;