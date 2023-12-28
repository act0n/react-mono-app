import { createBrowserRouter } from 'react-router-dom'

import { Layout, Month, Year, New } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // path: 'month',
        index: true,
        element: <Month />
      },
      {
        path: 'year',
        element: <Year />
      }
    ]
  },
  {
    path: '/new',
    element: <New />
  }
])

export default router
