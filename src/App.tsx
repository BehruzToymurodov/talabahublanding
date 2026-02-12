import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { I18nProvider } from './app/providers/I18nProvider'

const App = () => (
  <ThemeProvider>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </ThemeProvider>
)

export default App
