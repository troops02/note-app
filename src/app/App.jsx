import MainLayout from '../components/layout/MainLayout/MainLayout';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import Header from '../components/layout/Header/Header';
import SearchBar from '../components/search/SearchBar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainLayout>
        <Header />
        <SearchBar />
      </MainLayout>
    </div>
  );
}

export default App;
