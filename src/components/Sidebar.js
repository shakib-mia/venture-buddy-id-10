import {React,useState} from 'react'

import ellipse from './utils/ellipse.svg'
import venture from './utils/venture1.svg'
import vector from './utils/Vector.svg'
import livedeal from './utils/livedeal.svg'
import myinvestment from './utils/myinvestment.svg'
import tools from './utils/tools.svg'
import wallet from './utils/wallet.svg'
import refer from './utils/refer.svg'
import support from './utils/support.svg'
import faq from './utils/faq.svg'
import logout from './utils/logout.svg'
import venturefull from './utils/venturefull.svg'
import arrowgrp from './utils/arrowgrp.svg'
import icon from './utils/icon.svg'

const Sidebar = () => {
  const [expand, setexpand] = useState(false)
  
  function changeexpand(e){
    e.preventDefault();
    setexpand(!expand)
    console.log(expand)

  }
  return (
    <div className='w-fit' id='nav-container'>
        <ul id='navbar'  className='nav flex-column text-center gap-2  px-2 py-4 border'>
          
          <li className='nav-item'>
            <a onClick={changeexpand} href="" className='nav-link'>
            {
              expand? 
              <img src={venturefull} alt="venturefull"/>: 
              <img src={venture} alt=""/>
            }
            {
              expand? 
              <img src={arrowgrp} className="ms-5" alt="venturefull"/>: 
              <img src={vector} className="ms-2" alt=""/>
            }
            </a>
          </li>
          
          <li className='nav-item'>
            <a href="" className='nav-link mt-2'>
              {expand?
              
              <div className="row flex">
              <div className="col-3 items-center">
              <img height="50px" width="50px" src={ellipse} alt="" /> 
              </div>
            <div className="col text-start"> 
              <h5 className='text-black-500 side-title'>chandan singh</h5>
              <p className='text-gray-500 side-list'>investor <img src={icon} alt="" /> </p>
            </div>
            </div>:
            <img src={ellipse} alt="ellipse" /> 
              }
             


            </a>
          </li>

          <li className='nav-item'>
            <a href="" id='menu' className={expand?'nav-link text-start':'nav-link'}>
              MENU
            </a>
          </li>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={livedeal} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>Live Deal</h4>:
              <></>
              }
            </a>
          </li>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={myinvestment} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>My invetment</h4>:
              <></>
              }
            </a>
          </li>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={tools} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>tools</h4>:
              <></>
              }
            </a>
          </li>

          <hr className='w-75 mx-auto'/>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={wallet} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>wallet</h4>:
              <></>
              }
            </a>
          </li>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={refer} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>refer and earn</h4>:
              <></>
              }
            </a>
          </li>

          <hr className='w-75 mx-auto'/>
          

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={support} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>support</h4>:
              <></>
              }
            </a>
          </li>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={faq} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>FAQ</h4>:
              <></>
              }
            </a>
          </li>

          <li className={expand?'nav-item text-start':'nav-item'}>
            <a href="" className='nav-link'>
              <img src={logout} alt="" /> 
              {
              expand?
              <h4 className='d-inline ms-3 align-text-top side-list'>logout</h4>:
              <></>
              }
            </a>
          </li>

        </ul>
    </div>
  )
}

export default Sidebar
