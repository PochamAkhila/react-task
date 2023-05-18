import React from 'react'

const PageNotFound = () => {
    return (

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "70vh" }}>
            <h1 style={{ fontSize: "150px", color: "#4db2ec" }}>404</h1>
            <p>Oops! Page Not Found</p>
            <p>Sorry, the page you are looking for doesn't exist!</p>
            <span class="material-icons-outlined">
                search
            </span>
        </div>

    )
}

export default PageNotFound