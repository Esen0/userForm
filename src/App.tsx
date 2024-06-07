import ToolBar from "./components/ToolBar/ToolBar"
import UserForm from "./components/UserForm/UserForm"
import User from "./components/Users/User"


const App = () => {

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <UserForm/>
          </div>
          <div className="col-6">
            <User />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
