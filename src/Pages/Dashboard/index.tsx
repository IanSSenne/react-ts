import { Link } from "react-router-dom";
export default function Dashboard() {
  const username = 'Jonas Jonaitis';
  return (
    <div>
      <h2>Dashboard Page</h2>
      <Link className='underline' to={`/dashboard/${username}`}>User details</Link>
    </div>
  );
}