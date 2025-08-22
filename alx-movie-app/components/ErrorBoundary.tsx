// alx-movie-app/components/ErrorBoundary.tsx
import React, { ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Send error to Sentry here
    if (typeof window !== "undefined") {
      console.error("Logged to Sentry:", error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white p-4">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
          <button
            onClick={this.handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
