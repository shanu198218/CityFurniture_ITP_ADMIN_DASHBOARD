import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarDataStock = [

  {
    title: 'Dashboard',
    path: '/admindashboard',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'Stock Home',
    path: '/stockHome',
    icon: <AiIcons.AiFillHome />
  },
  
  {
    title: 'Stock Products',
    path: '/homeStockP',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Products',
        path: '/addP',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage Products',
        path: '/homeP',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Stock Categories',
    path: '/homeStockC',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Categories',
        path: '/addC',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Manage Categories',
        path: '/homeC',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },

  {
    title: 'Stock Suppliers',
    path: '/homeStockS',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Supplier',
        path: '/addS',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Manage Supplier',
        path: '/homeS',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Stock -Request Products',
    path: '/req',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Stock-Reports',
    path: '#',
    icon: <FaIcons.FaCartPlus />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Products Report',
        path: '/stockProdRep',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Categories Report',
        path: '/stockCatRep',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Suppliers Report',
        path: '/stockSupRep',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },      
    ]
  },



 {
    title: 'Order',
    path: '/order',
    icon: <AiIcons.AiFillHome />
  },


  {
    title: 'Category',
    path: '/category',
    icon: <AiIcons.AiFillHome />
  },

  {
    title: 'Orders',
    path: '#',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Order',
        path: '/order/home',
        icon: <IoIcons.IoIosPaper />
      },

    ]
  },
  {
    title: 'Categories',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Categories',
        path: '/category/add',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'All Categories',
        path: '/category/home',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },


  {
    title: 'Email Conformation',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Pay Home',
    path: '/pay-home',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'PayPal Home',
    path: '/payDisplay',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Products',
    path: '/home-products',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Category',
    path: '/HomeCategory',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Offers',
    path: '/HomeOffer',
    icon: <FaIcons.FaEnvelopeOpenText />
  },

  {
    title: 'Customercare Home',
    path: '/CustomercareHome',
    icon: <FaIcons.FaEnvelopeOpenText />
  },


  {
    title: 'Contact',
    path: '#',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Contact List',
        path: '/contact/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Edit Contact',
        path: '/edit/:id',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'FAQs',
    path: '/FAQs',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'View FAQs',
        path: '/FAQs',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },


  {
    title: 'Suggestions',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'View suggestions',
        path: '/suggestion/',
        icon: <IoIcons.IoIosPaper />
      },

      {
        title: 'View Ratings',
        path: '#',
        icon: <FaIcons.FaEnvelopeOpenText />
      },
    ]
  },


  {
    title: 'Delivery Management',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Delivery Home',
        path: '/delivery-mgt',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Driver',
        path: '/driver',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Vehicle',
        path: '/vehicle',
        icon: <IoIcons.IoMdHelpCircle />
      }, {
        title: 'Delivery',
        path: '/delivery',
        icon: <IoIcons.IoMdHelpCircle />
      }, {
        title: 'Order',
        path: '/order-for-delivery',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ]
  },



  {
    title: 'Staff Management',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Staff dashboard',
        path: '/staff-dashboard',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Add New Employee',
        path: '/addemp',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Mark Attendance',
        path: '/attendence',
        icon: <IoIcons.IoMdHelpCircle />
      }, {
        title: 'Calculate Salary',
        path: '/add-salary',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ],
  },




  {
    title: 'Staff Management View',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'View',
        path: '/view/ViewAEmp',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'All Employee',
        path: '/view/empdetails',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'All Salary Details',
        path: '/view/salary-detail',
        icon: <IoIcons.IoMdHelpCircle />
      },
    ],
  },







  {
    title: 'Staff-History',
    path: '/history',
    icon: <IoIcons.IoMdHelpCircle


    />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Attendence',
        path: '/attendence-history',
        icon: <IoIcons.IoMdHelpCircle />
      },
      {
        title: 'Leaved Employees',
        path: '/LeavedEmp',
        icon: <IoIcons.IoMdHelpCircle />
      },

    ],
  },



  {
    title: 'Staff Reports',
    path: '#',
    icon: <IoIcons.IoIosPaper />,


    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Employee Details Report',
        path: '/empReport',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sallary Report',
        path: '/salaryReport',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'LeavedEmp Details Report',
        path: '/leavedempReport',
        icon: <IoIcons.IoIosPaper />
      },
      

    ],
  },



];

