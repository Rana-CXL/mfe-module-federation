// import { Counter } from './Counter'
import { Button, ThemeProvider, createTheme } from '@mui/material'
import '../src/style.css'
import BasicCard from './component/BasicCard'
 const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3c8c8a',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#fbffff',
        paper: '#c8fbdf',
      },
      divider: 'rgba(0,0,0,0.15)',
    },
  })
  return (
    <>
    <ThemeProvider theme = {theme}>

      <h1> Style guide  {process.env.NODE_ENV}</h1>
    <Button variant='contained'>lpsodjf</Button>
    <BasicCard/>
    </ThemeProvider>
    </>
  )
}
export default App