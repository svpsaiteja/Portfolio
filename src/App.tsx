import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <main className="p-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-3">Sami Venkata Phani Saiteja</h1>
          </div>
          <div className="col-2">
            <Profile />
          </div>
          <div className="col-3">
            <Skills />
          </div>
          <div className="col">
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
