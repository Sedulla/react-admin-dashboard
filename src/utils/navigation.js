import {
  MdLineStyle as LineStyleIcon,
  MdTimeline as TimelineIcon,
  MdTrendingUp as TrendingUpIcon,
  MdPermIdentity as PermIdentityIcon,
  MdStorefront as StorefrontIcon,
  MdAttachMoney as AttachMoneyIcon,
  MdAreaChart as AreaChartIcon,
  MdMailOutline as MailOutlineIcon,
  MdDynamicFeed as DynamicFeedIcon,
  MdChatBubbleOutline as ChatIcon,
} from 'react-icons/md';

export const navigation = [
  {
    label: 'Dashboard',
    type: 'label',
    items: [
      {
        title: 'Homepage',
        icon: <LineStyleIcon />,
        path: '/',
      },
      {
        title: 'Analytics',
        icon: <TimelineIcon />,
        path: '/analytics',
      },
      {
        title: 'Sales',
        icon: <TrendingUpIcon />,
        path: '/sales',
      },
    ],
  },

  {
    label: 'Quick Menu',
    type: 'label',
    items: [
      {
        title: 'Users',
        icon: <PermIdentityIcon />,
        path: '/users',
      },
      {
        title: 'Products',
        icon: <StorefrontIcon />,
        path: '/products',
      },
      {
        title: 'Transactions',
        icon: <AttachMoneyIcon />,
        path: '/transactions',
      },
      {
        title: 'Reports',
        icon: <AreaChartIcon />,
        path: '/reports',
      },
    ],
  },

  {
    label: 'Notifications',
    type: 'label',
    items: [
      {
        title: 'Mail',
        icon: <MailOutlineIcon />,
      },
      {
        title: 'Feedback',
        icon: <DynamicFeedIcon />,
      },
      {
        title: 'Messages',
        icon: <ChatIcon />,
      },
    ],
  },
];
