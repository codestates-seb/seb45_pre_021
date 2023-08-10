import styled from 'styled-components';

const Sidebar = () => {
  return (
    <aside>
      <div>
        <h2>Home</h2>

        <h2>Public</h2>
        <ul>
          <li>Questions</li>
          <li>Tags</li>
          <li>Users</li>
          <li>Companies</li>
        </ul>
        <h2>Collectives</h2>
        <h2>Explore Collectives</h2>
        <h2>Teams</h2>
        <button>Create Free Team</button>
        <p>Looking for your Teams?</p>
      </div>
    </aside>
  );
};

export default Sidebar;
