import React, { useState} from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div className='jumbotron jumbotron-fluid'>
                <div className='display-4'>
                    Schreiber
                    <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
                {renderPage()}
            </div>
        </>
    );
}

export default Container;