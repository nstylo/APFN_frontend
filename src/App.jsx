import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Lightbox from "simple-react-lightbox"
import history from "./history"

// theme
import { theme } from "./theme"

// custom components
import Home from "./Pages/Home"
import About from "./Pages/About"
import HowItWorks from "./Pages/HowItWorks"
import ListingsPage from "./Pages/ListingsPage"
import BrowsingPage from "./Pages/BrowsingPage"
import NoMatch from "./Pages/404.jsx"
import ModalRoot from "./Misc/ModalRoot"
import { ToastProvider } from "./Misc/ToastContext"

// routes
import LayoutRoute from "./Misc/LayoutRoute"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Lightbox>
          <Router history={history}>
            <CssBaseline />
            <ModalRoot />
            <Switch>
              <LayoutRoute exact path="/">
                <Home />
              </LayoutRoute>
              <LayoutRoute exact path="/about">
                <About />
              </LayoutRoute>
              <LayoutRoute exact path="/how-it-works">
                <HowItWorks />
              </LayoutRoute>
              <LayoutRoute exact path="/listing/:id">
                <ListingsPage />
              </LayoutRoute>
              <LayoutRoute exact path="/browse/">
                <BrowsingPage />
              </LayoutRoute>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </Lightbox>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
