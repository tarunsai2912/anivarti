import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { AUTH_ENDPOINTS } from '../../utils/url'
import { FiLogOut } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader"
import toast from 'react-hot-toast';
import './index.css'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const token = sessionStorage.getItem('authToken')

  const fetchUsers = async () => {
    try{
      setLoading(true)
      const response = await axios.get(AUTH_ENDPOINTS.ALLUSERS, {
        headers: {
          'token': `${token}`
        }
      })
      if(response){
        setUsers(response.data.users)
        setLoading(false)
      }
    }
    catch(error){
      setLoading(false)
      console.error(error);
      toast.error('cannot fetch')
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      {loading && <div><ClipLoader color="#000" /></div>}
      {!loading && <div className='analy-container'>
      <h1 className='head-analy'>Members Dashboard</h1>  
      <h3
        onClick={() => {
          sessionStorage.clear()
          navigate('/')
        }}
        className="logout-btn"
      >
        <FiLogOut />
        Logout
      </h3>
      <table className='tab-analy'>
        <thead>
        <tr className='tabh-div-analy'>
          <th className='tabh1-analy'>S.No</th>
          <th className='tabh2-analy'>Names</th>
          <th className='tabh3-analy'>Emails</th>
        </tr>
        </thead>
        {users.map((each, index) => {
          return (
          <tbody key={each._id}>
          <tr className='tabd-div-analy' style={{backgroundColor: Number(index)%2 == 0 ? '#EDEDED' : '#B3C4FF'}}>
            <td className='tabd1-analy'>{index+1}</td>
            <td className='tabd2-analy'>{each.name}</td>
            <td className='tabd3-analy'>{each.email}</td>
          </tr>
          </tbody>
          )
        })}
      </table>
      </div>}
    </>
  )
}

export default HomePage
