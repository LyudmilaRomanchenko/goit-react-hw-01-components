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

import Profile from './components/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList';
import friends from './components/FriendList/friends.json';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
