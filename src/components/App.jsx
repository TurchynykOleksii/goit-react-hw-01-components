import { Profile } from './Profile';
import { Statistics } from './Statistics';

import user from './user.json';
import statistics from './data.json';

export const App = () => {
  return (
    <div className="app">
      <Profile user={user} />
      <Statistics statistics={statistics} title="Upload stats" />
    </div>
  );
};
