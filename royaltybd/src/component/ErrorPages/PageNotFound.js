import React from 'react';
import Container from 'react-bootstrap/Container';

const PageNotFound = () => {
    return ( 
        <section className="page_404">
        <Container>
            <div className="page_404_wrapper">
            <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
            
            
            </div>
            
            <div className="contant_box_404">
            <h3 className="h2">
            Look like you're lost
            </h3>
            
            <p>the page you are looking for not avaible!</p>
            
            <a href="/" className="link_404">Go to Home</a>
        </div>
        </div>
            
        </Container>
    </section>
     );
}
 
export default PageNotFound;