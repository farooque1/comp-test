import Vector from "../logo.svg";
import dash from '../Component/image/Dashboard Icn.png';
import mypolicies from '../Component/image/My Policies.png';
import saved from '../Component/image/Saved Proposals.png';
import Break from '../Component/image/Break-In Proposals.png';
import payment from '../Component/image/Payments.png';
import make from '../Component/image/Make Endorsements.png';
import cliam from '../Component/image/Claims.png';
import notification from '../Component/image/Notification.png';
import account from '../Component/image/Account Settings.png';
import logout from '../Component/image/LogOut.png'

export const dashboard = {
    Sidebar: [
      {
        id: 1,
        icon: mypolicies,
        title: "My Policies",
        options: [
          {
            id: 1,
            title: "Sold Policies",
          },
          {
            id: 2,
            title: "Saved Policies",
          },
          {
            id: 3,
            title: "Renewal Policies",
          },
          {
            id: 4,
            title: "Endorsed Policies",
          },
          {
            id: 5,
            title: "Cancelled Policies",
          },
        ],
      },
      {
        id: 2,
        icon: saved,
        title: "Saved Prposals",
      },
      {
        id: 3,
        icon: Break,
        title: "Bread-in-Proposals",
      },
      {
        id: 4,
        icon: payment,
        title: "Payments",
        options: [
          {
            id: 1,
            title: "Cheque Deposit Slip",
          },
          {
            id: 2,
            title: "Generate Invoice",
          },
          {
            id: 3,
            title: "Download Payslips",
          },
          {
            id: 4,
            title: "GST Transaction",
          },
          {
            id: 5,
            title: "Payment NIA",
          },
        ],
      },
      {
        id: 5,
        icon: make,
        title: "Make Endorsements",
      },
      {
        id: 6,
        icon: cliam,
        title: "Claims",
      },
      {
        id: 7,
        icon:notification,
        title: "Notifications",
      },
      {
        id: 8,
        icon: account,
        title: "Account Settings",
      },
      {
        id: 9,
        icon: logout,
        title: "Log Out",
      },
    ],
  };
  