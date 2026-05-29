import { Component, useCallback } from "react";
import { useNavigate } from "react-router";

// Must be a Class Component due to the use of the getDerivedStateFromError() method
class ErrorBoundaryContent extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.props.onError(error);
    }

    render() {
        if (this.state.hasError) {
            return null;
        }
        return this.props.children;
    }
}

export function ErrorBoundary({ children }) {
    const navigate = useNavigate();

    const handleError = useCallback(
        () => navigate("/404", { replace: true }),
        [navigate]
    );

    return (
        <ErrorBoundaryContent onError={handleError}>
            {children}
        </ErrorBoundaryContent>
    );
}