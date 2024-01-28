import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '7f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '479'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '476'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e1c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '4a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9dd'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3db'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b86'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '33b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '638'),
            routes: [
              {
                path: '/docs/Customer script tutorial/download',
                component: ComponentCreator('/docs/Customer script tutorial/download', '42a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Customer script tutorial/Extracting',
                component: ComponentCreator('/docs/Customer script tutorial/Extracting', '0b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Customer script tutorial/intro',
                component: ComponentCreator('/docs/Customer script tutorial/intro', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Customer script tutorial/run py file',
                component: ComponentCreator('/docs/Customer script tutorial/run py file', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Customer script tutorial/Running',
                component: ComponentCreator('/docs/Customer script tutorial/Running', 'e93'),
                exact: true
              },
              {
                path: '/docs/Customer script tutorial/winrar',
                component: ComponentCreator('/docs/Customer script tutorial/winrar', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gamesettings',
                component: ComponentCreator('/docs/gamesettings', 'fce'),
                exact: true
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              },
              {
                path: '/docs/issues/antivirus',
                component: ComponentCreator('/docs/issues/antivirus', 'cb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/otherissues',
                component: ComponentCreator('/docs/issues/otherissues', 'c1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/issues/pythonfail',
                component: ComponentCreator('/docs/issues/pythonfail', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python tutorial/frommsstore',
                component: ComponentCreator('/docs/python tutorial/frommsstore', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python tutorial/intro',
                component: ComponentCreator('/docs/python tutorial/intro', 'b71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Script tutorial/download',
                component: ComponentCreator('/docs/Script tutorial/download', '6b9'),
                exact: true
              },
              {
                path: '/docs/Script tutorial/Extracting',
                component: ComponentCreator('/docs/Script tutorial/Extracting', '44a'),
                exact: true
              },
              {
                path: '/docs/Script tutorial/Running',
                component: ComponentCreator('/docs/Script tutorial/Running', '31a'),
                exact: true
              },
              {
                path: '/docs/Script tutorial/winrar',
                component: ComponentCreator('/docs/Script tutorial/winrar', '1be'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '47f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
