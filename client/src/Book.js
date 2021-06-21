//import React from 'react'; included in index.js
// to open JS Console in MS EDGE -> Ctrl Shift J
import './Book.css';

function Book() {
    // defined in .env in Client root folder
    console.log('env',process.env.REACT_APP_SERVER_URL);
    return(
            <div id='book-message'>
                 Hello Book   AAAAB
            </div>
    )
}
export default Book;
