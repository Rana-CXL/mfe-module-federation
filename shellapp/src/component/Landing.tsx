import { useNavigate } from "react-router-dom"

type Props = {}

export default function Landing({}: Props) {

  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }

  return (
    <>
    <div>Landing</div>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}