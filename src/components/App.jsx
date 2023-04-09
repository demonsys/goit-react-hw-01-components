import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import PageTitle from './page-title/PageTitle';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transaction-history/TransactionHistory';

export const App = () => {
  return (
    <>
      <PageTitle>goit react homework01</PageTitle>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
