import './App.css';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import IssueList from './pages/IssueList/IssueList';

function App() {
  return (
    <main className="flex">
      <IssueList />
      <IssueDetail />
    </main>
  );
}

export default App;
