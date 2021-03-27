import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


/* loader component for Suspense*/
import PageLoader from './_framework/_helpers/PageLoader';
import Base from './_layout/Base';
import BasePage from './_layout/BasePage';
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Logout = lazy(() => import('./pages/Logout'));

const HomePrincipal = lazy(() => import('./pages/HomePrincipal'));
const Perro = lazy(() => import('./modulos/perro/index'));
const AddPerro = lazy(() => import('./modulos/perro/addPerro'));
const EditPerro = lazy(() => import('./modulos/perro/editPerro'));
const Raza = lazy(() => import('./modulos/raza/index'));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname

const listofPages = [
    '/login',
    '/not-found',
    '/logout'
];

const Routes = (props) => {

    let user = localStorage.getItem("user");
    user = (user === "undefined" || user === undefined)?null:JSON.parse(user);

    const currentKey = props.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    if (props.location.pathname === "/") {
        props.location.pathname = "/login"
    }       
    if (listofPages.indexOf(props.location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Suspense fallback={<PageLoader />}>
                    <Switch location={props.location}>
                        <Route path="/login" component={waitFor(Login)} />  
                        <Route exact path="/not-found" component={waitFor(NotFound)} />
                        <Route exact path="/logout" component={waitFor(Logout)} />                     
                    </Switch>
                </Suspense>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
                <TransitionGroup>
                    <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                        <div>
                            <Suspense fallback={<PageLoader />}>
                                <Switch location={props.location}>
                                    <Route path="/login" component={waitFor(Login)} />
                                    <Route path="/home-principal" component={waitFor(HomePrincipal)} />

                                    {/* MANTENEDORES */}

                                    <Route path="/mantenedores/perro" component={waitFor(Perro)} />
                                    <Route path="/mantenedores/raza" component={waitFor(Raza)} />    
                                    <Route path="/mantenedores/perros/agregar-perro" component={waitFor(AddPerro)} />    
                                    <Route exact path="/mantenedores/perros/editar-perro/:id" component={waitFor(EditPerro)} />    

                                    {/* ADMINISTRACION */}

                                                
                                   
                                    
                                    <Redirect to="/404" />
                                </Switch>
                            </Suspense>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);