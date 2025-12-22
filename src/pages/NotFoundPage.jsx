import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Not Found Page❌</h1>
      <Link to={'/'} viewTransition>
        <button className='py-2 px-2 bg-amber-400 '>Go back Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
