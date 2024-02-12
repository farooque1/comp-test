import React from 'react'
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Main from '../Component/Main';
import Footer from '../Component/Footer';
import Discount from './Discount';
import Tabel from './Tabel';
import Accordion from '../Component/CustomAccordion/Accordion';

function Index() {
  return (
    <>
    <Header />
    <div className='d-flex'>
    <Sidebar />
    <div className="main p-3">
        <div className="text-center">
          <Accordion />
          <div className='py-3'>
          <Tabel />
          <Discount />
          </div>
        </div>
      </div>
    </div>
    {/* <Main /> */}
    <Footer />
    </>
  )
}

export default Index