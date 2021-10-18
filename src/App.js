import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



function App() {
  return (
    <section className="login">
      <div className="container">
        <div className="row align-items-center justify-content-center ">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                Login
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit"><i class="bi bi-box-arrow-in-right"></i> Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
