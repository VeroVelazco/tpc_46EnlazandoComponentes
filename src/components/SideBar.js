// import React from 'react';
// import image from '../assets/images/logo-DH.png';
// import ContentRowMovies from './ContentRowMovies';
// import GenresInDb from './GenresInDb';
// import LastMovieInDb from './LastMovieInDb';
// import ContentWrapper from './ContentWrapper';
// // import Route404 from './Route404';
// import { Link, Route, Switch } from 'react-router-dom';
// function SideBar(){
//     return(
//         <React.Fragment>
//             {/*<!-- Sidebar -->*/}
//             <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

//                 {/*<!-- Sidebar - Brand -->*/}
//                 <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
//                     <div className="sidebar-brand-icon">
//                         <img className="w-100" src={image} alt="Digital House"/>
//                     </div>
//                 </Link>

//                 {/*<!-- Divider -->*/}
//                 <hr className="sidebar-divider my-0"/>

//                 {/*<!-- Nav Item - Dashboard -->*/}
//                 <li className="nav-item active">
//                     <Link className="nav-link" to="/contentWrapper">
//                         <i className="fas fa-fw fa-tachometer-alt"></i>
//                         <span>Dashboard - DH movies</span></Link>
//                 </li>

//                 {/*<!-- Divider -->*/}
//                 <hr className="sidebar-divider"/>

//                 {/*<!-- Heading -->*/}
//                 <div className="sidebar-heading">Actions</div>

//                 {/*<!-- Nav Item - Pages -->*/}
//                 <li className="nav-item">
//                     <Link className="nav-link collapsed" to="/">
//                         <i className="fas fa-fw fa-folder"></i>
//                         <span>Datos</span>
//                     </Link>
//                 </li>

//                 {/*<!-- Nav Item - Charts -->*/}
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/genres">
//                         <i className="fas fa-fw fa-chart-area"></i>
//                         <span>Genéros</span></Link>
//                 </li>

//                 {/*<!-- Nav Item - Tables -->*/}
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/movies">
//                         <i className="fas fa-fw fa-table"></i>
//                         <span>Películas</span></Link>
//                 </li>

//                 {/*<!-- Divider -->*/}
//                 <hr className="sidebar-divider d-none d-md-block"/>
//             </ul>
//             {/*<!-- End of Sidebar -->*/}

//             <Switch>
//                <Route exact path="/" component={ContentRowMovies}/>
//                <Route exact path="/genres" component={GenresInDb}/>
//                <Route exact path="/movies" component={LastMovieInDb}/>
//                <Route exact path="/contentWrapper" component={ContentWrapper}/>
//                {/* <Route component={Route404}/> */}

               
//             </Switch>
            
//         </React.Fragment>
//     )
// }
// export default SideBar;


import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Link, Route, Switch} from 'react-router-dom'
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentWrapper from './ContentWrapper';



function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/lastMovie">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ContentWrapper">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Data</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/movies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Last Movie</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/" component={ContentRowMovies}/>
                <Route exact path="/genres" component={GenresInDb}/>
                <Route exact path="/movies" component={LastMovieInDb}/>
                <Route exact path="/contentWrapper" component={ContentWrapper}/>
                {/* <Route component={Route404}/> */}

               
             </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;