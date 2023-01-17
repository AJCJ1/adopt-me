import { Component } from 'react'
import { Link } from 'react-router-dom'
// every time there is an error, call this function, make hasError true.

class ErrorBoundary extends Component {
  state = { hasError: false }
  // define a function to set an error if there is one.
  // make it static as react will call it on the class itself, not an instance
  static getDerivedStateFromError() {
    return {hasError: true }
  }
  // typically you'd log this to track.js, newRelic - an aggregation of error tracking service
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to="/">
            Click here to go back to the homepage
          </Link>
        </h2>
      )
    }
    return this.props.children
  }

}

export default ErrorBoundary
