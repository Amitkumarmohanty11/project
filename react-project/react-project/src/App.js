import { Route , Routes  } from 'react-router-dom';
import Account from './Account';
import './App.css';
import { Container, Row , Col } from 'react-bootstrap';
import FreeComponent from './FreeComponent';
import AuthComponent from './AuthComponent';
import DashboardComponent from './DashboardComponent';
import ProtectedRoutes from './ProtectedRoutes';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';




function App() {
  return (
    <Container>
        <Row>
          <Col className='text-center'>
            <h1>Laundry Managment System</h1>

            <section id='navigation' style={{display:"flex", gap:"30px", justifyContent:"center", alignItems:"center" , fontSize:"2rem", backgroundColor:"black"}}>
            
              <a href='/' style={{textDecoration:"none"}}>Home</a>
              <a href='/about' style={{textDecoration:"none"}}>About Us</a>
              <a href='/account' style={{textDecoration:"none"}}>Account</a>
              <a href='/request'style={{textDecoration:"none"}}>Laundry-Request</a>
              <a href='/dashboard'style={{textDecoration:"none"}}>Dashboard</a>
              <a href='/profile'style={{textDecoration:"none"}}>Profile</a>
              {/* <a href='/login'>Login</a> */}

            </section>
          </Col>
        </Row>
        {/* create routes here */}

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/about' element={<FreeComponent/>}/>
          <Route exact path='/account' element={<Account/>}/>
          {/* <Route exact path='/auth' element={<AuthComponent/>}/> */}
          <Route exact path='/request' element={
          <ProtectedRoutes>
            <AuthComponent/>
          </ProtectedRoutes>
          
          }/>
          <Route exact path='/dashboard' element={
          <ProtectedRoutes>
            <DashboardComponent/>
          </ProtectedRoutes>
          
          }/>
          <Route exact path='/profile' element={
          <ProtectedRoutes>
            <Profile/>
          </ProtectedRoutes>
          
          }/>
          {/* <Route exact path='/profile' element={<Profile/>}/> */}

          
        </Routes>
        
        {/* <Account/> */}
    </Container>
  );
}

export default App;
