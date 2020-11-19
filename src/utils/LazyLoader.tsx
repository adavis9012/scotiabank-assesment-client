import React, {Suspense} from 'react';

function LazyLoader(WrappedComponent: any) {
    return React.memo((props) => {
        return <Suspense fallback={<p>Loading...</p>}>
            <WrappedComponent {...props}/>
        </Suspense>;
    });
};

export default LazyLoader;
