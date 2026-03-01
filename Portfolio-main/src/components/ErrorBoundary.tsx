import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-10 text-center">
                        <h1 className="text-2xl font-bold mb-4 text-neon-blue">Something went wrong.</h1>
                        <p className="text-secondary mb-6">{this.state.error?.message}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-neon-purple rounded-full hover:bg-neon-blue transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
