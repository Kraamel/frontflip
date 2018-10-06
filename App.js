import React from "react";
import HybridApp from "./src/App";

// Mobile version entry point
export default class NativeApp extends React.Component {
    render() {
        return <HybridApp />;
    }
}
