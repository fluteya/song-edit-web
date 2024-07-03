import React from "react";
import Header from "./Header";
import Footer from "./footer"

/**
 * 
 * @Childred:the input for template 
 * @returns the template for every page
 */
function Template({ children }) {
    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
}
export default Template;