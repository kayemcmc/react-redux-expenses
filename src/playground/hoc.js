//higher order component (HOC ) A component that renders another component]
//HOC reuses code  -reason to use it advantages
// Render hijacking
//Prop Mnaipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the infor is: {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//           { props.isAdmin &&  <p>This is private info please don't share</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in</p>
            )}
           
        </div>
    );
};
// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'));
