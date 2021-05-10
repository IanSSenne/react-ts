import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Details(props:any) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(props.match.params.username)
  },[]);
  return (
    <div>
      <h2>{`Hello, ${username}!`}</h2>
      <Link  className='underline' to={`/dashboard/`}>Back</Link>
    </div>
  );
}