import { gapi } from "gapi-script"
import { useEffect } from "react"
import { clientId } from "./config/googleClientId"
import { GlobalStyle } from "./globalStyles"
import { Router } from "./routes"

function App() {

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: clientId, 
        scope: ""
      })
    })
  }, [])

  return (
    <div className="App">
      <Router />

      <GlobalStyle />
    </div>
  )
}

export default App
