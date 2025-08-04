import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-300">
      <Sidebar />
      <main className="flex-1 p-8"><Dashboard /></main>
    </div>
  )
}
export default App;
