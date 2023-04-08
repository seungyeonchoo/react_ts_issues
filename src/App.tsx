import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import IssueList from './pages/IssueList/IssueList';
import { ReducerType } from './store';

function App() {
  const { detailToggle } = useSelector((state: ReducerType) => state.toggle);

  const mainGrid = detailToggle
    ? 'grid grid-cols-2 gap-10 w-11/12 mx-auto max-lg:grid-cols-1 my-5'
    : 'grid grid-cols-1 w-11/12 mx-auto my-5';

  return (
    <>
      <Header />
      <main className={mainGrid}>
        <IssueList />
        {detailToggle && <IssueDetail />}
      </main>
      <Footer />
    </>
  );
}

export default App;
