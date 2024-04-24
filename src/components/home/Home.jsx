import "./Home.css";

export const Home = () => {
  return (
    <main className="main-home">
      <div className="issues-container">
        <div className="issue">
          <span className="issue-info red">Admin John Doe</span>
          <span className="issue-info">Assumpte de la reparació</span>
          <span className="issue-info">12:45</span>
        </div>
        <div className="issue">
          <span className="issue-info green">Admin John Doe</span>
          <span className="issue-info">Assumpte de la reparació</span>
          <span className="issue-info">12:45</span>
        </div>
        <div className="issue">
          <span className="issue-info yellow">Admin John Doe</span>
          <span className="issue-info">Assumpte de la reparació</span>
          <span className="issue-info">12:45</span>
        </div>
        <div className="issue">
          <span className="issue-info purple">Admin John Doe</span>
          <span className="issue-info">Assumpte de la reparació</span>
          <span className="issue-info">12:45</span>
        </div>
      </div>
    </main>
  );
};
