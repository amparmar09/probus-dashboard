export const MENU = [
  {
    id: 1,
    label: 'Menu',
    isTitle: true
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/',
  },
  {
    id: 3,
    label: 'Help Menu',
    isTitle: true
  },
  {
    id: 4,
    label: 'Help Desk',
    icon: 'ri-apps-2-line',
    isCollapsed: true,
    subItems: [
      { id: 5, label: 'Payout Query', link: '/help/payout', parentId: 4 },
      { id: 6, label: 'Tech Query', link: '/help/techquery', parentId: 4 },
      { id: 7, label: 'My Ticket', link: '/help/myticket', parentId: 4 }
    ]
  },
  {
    id: 8,
    label: 'All Report',
    isTitle: true
  },
  {
    id: 9,
    label: 'Reports',
    icon: 'ri-file-user-line',
    isCollapsed: true,
    subItems: [
      { id: 10, label: 'Online Policy Purchase', link: '/', parentId: 9 },
      { id: 11, label: 'Payment Pending', link: '/', parentId: 9 },
      { id: 12, label: 'Online Product Report', link: '/', parentId: 9 },
      { id: 13, label: 'Motor Break-In Policy', link: '/', parentId: 9 },
      { id: 14, label: 'Forward Quotation Report', link: '/', parentId: 9 },
      { id: 15, label: 'Health NSTP Report', link: '/', parentId: 9 },
      { id: 16, label: 'InActive User Report', link: '/', parentId: 9 },
      { id: 17, label: 'AM Non-Active POS Contest', link: '/', parentId: 9 },
      { id: 18, label: 'Khatre Ki Ghanti', link: '/', parentId: 9 },
      { id: 19, label: 'User Report', link: '/', parentId: 9 }
    ]
  },
  {
    id: 20,
    label: 'Inception Report',
    icon: 'ri-shield-user-line',
    isCollapsed: true,
    subItems: [
      { id: 21, label: 'FTD-MTD Policy Premium', link: '/', parentId: 20 }
    ]
  },
  {
    id: 22,
    label: 'Offline MIS Report',
    icon: 'ri-pages-line',
    isCollapsed: true,
    subItems: [
      { id: 23, label: 'Offline MIS Report', link: '/', parentId: 22 },
      { id: 24, label: 'Early Payout Request', link: '/', parentId: 22 }
    ]
  },
  {
    id: 25,
    label: 'Renewal Report',
    icon: 'ri-taxi-wifi-line',
    isCollapsed: true,
    subItems: [
      { id: 26, label: 'Renewal Notice', link: '/', parentId: 25 },
      { id: 27, label: 'Upcoming Renewal', link: '/', parentId: 25 },
      { id: 28, label: 'Motor Renewed', link: '/', parentId: 25 }
    ]
  },
  {
    id: 29,
    label: 'POS Report',
    icon: 'ri-shield-user-line',
    isCollapsed: true,
    subItems: [
      { id: 30, label: 'POS New Report', link: '/', parentId: 29 },
      { id: 31, label: 'Download POS Certificate', link: '/', parentId: 29 }
    ]
  },
  {
    id: 32,
    label: 'All Request',
    isTitle: true
  },
  {
    id: 33,
    label: 'Advance Payout',
    icon: 'ri-pages-line',
    link: '/',
    isCollapsed: true,
  },
  {
    id: 34,
    label: 'Payout Redemption',
    icon: 'ri-secure-payment-line',
    isCollapsed: true,
    subItems: [
      { id: 35, label: 'Enable-Disable Automatic Redemption', link: '/', parentId: 34 }
    ]
  },
  {
    id: 36,
    label: 'Excess Rate',
    icon: 'ri-secure-payment-line',
    isCollapsed: true,
    subItems: [
      { id: 37, label: 'New Request', link: '/', parentId: 36 },
      { id: 38, label: 'Request List', link: '/', parentId: 36 }
    ]
  },
  {
    id: 39,
    label: 'Statement',
    isTitle: true
  },
  {
    id: 40,
    label: 'Commission Statement',
    icon: 'ri-pages-line',
    link: '/',
    isCollapsed: true,
  },
  {
    id: 41,
    label: 'Offline Premium Collection',
    icon: 'ri-pages-line',
    link: '/',
    isCollapsed: true,
  },
  {
    id: 42,
    label: 'Agent Details',
    isTitle: true
  },
  {
    id: 43,
    label: 'Live Agent',
    icon: 'ri-secure-payment-line',
    isCollapsed: true,
    subItems: [
      { id: 44, label: 'Connect With IT-Support', link: '/', parentId: 43 },
      { id: 45, label: 'Report Endorsement Issues', link: '/', parentId: 43 },
      { id: 46, label: 'Get Policy PDF', link: '/', parentId: 43 },
      { id: 47, label: 'Check Inspection Status', link: '/', parentId: 43 },
      { id: 48, label: 'Renew Existing Policy', link: '/', parentId: 43 },
      { id: 49, label: 'File For Claim', link: '/', parentId: 43 },
      { id: 50, label: 'Get RM Details', link: '/', parentId: 43 },
      { id: 51, label: 'Buy New Policy', link: '/', parentId: 43 }
    ]
  },
  {
    id: 52,
    label: 'Endrosment Details',
    isTitle: true
  },
  {
    id: 53,
    label: 'Endrosment',
    icon: 'ri-secure-payment-line',
    isCollapsed: true,
    subItems: [
      { id: 54, label: 'Endrosment', link: '/', parentId: 53 },
      { id: 55, label: 'Endrosment Ticket', link: '/', parentId: 53 }
    ]
  },
  {
    id: 56,
    label: 'Payment Reference',
    icon: 'ri-pages-line',
    link: '/',
    isCollapsed: true,
  },
  {
    id: 57,
    label: 'User Details',
    isTitle: true
  },
  {
    id: 58,
    label: 'User Profile',
    icon: 'ri-secure-payment-line',
    isCollapsed: true,
    subItems: [
      { id: 59, label: 'My Profile', link: '/pages/profile', parentId: 58 },
      { id: 60, label: 'Change Password', link: '/pages/profile', parentId: 58 }
    ]
  },
  {
    id: 61,
    label: 'RM Details',
    icon: 'ri-pages-line',
    link: '/',
    isCollapsed: true,
  }
];
