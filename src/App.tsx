import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import IssueList from './pages/IssueList/IssueList';

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <IssueList />
        <IssueDetail />
      </main>
      <Footer />
    </>
  );
}

export default App;
