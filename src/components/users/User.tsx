import { useSelector } from 'react-redux';

const User = () => {
  const count = useSelector((state) => state.counterR.count);
  return (
    <div>
      <h2>Number of users: {count}</h2>
    </div>
  );
};

export default User;
