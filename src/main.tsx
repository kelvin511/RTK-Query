import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { mainStore } from "./App/Store/Store.ts"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={mainStore}>
    <App />
  </Provider>
)
