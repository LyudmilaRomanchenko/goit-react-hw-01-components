// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Profile from './Profile';
import user from './Profile/user.json';
import Statistics from './Statistics';
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './FriendList';
// import friends from './FriendList/friends.json';
// import FriendListContainer from './FriendList/FriendLisContainert';
import TransactionHistory from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      {/* <FriendList friends={friends} /> */}
      <FriendList />
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
