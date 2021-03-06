import { useSelector } from 'react-redux'
import { Layout, LayoutProps } from 'react-admin'
// import AppBar from './AppBar';
import Menu from './Menu'
import { darkTheme, lightTheme } from './themes'
import { AppState } from './types'

const CustomLayout = (props: LayoutProps) => {
  const theme = useSelector((state: AppState) =>
    state.theme === 'dark' ? darkTheme : lightTheme,
  )
  return <Layout {...props} menu={Menu} theme={theme} />
}

export default CustomLayout