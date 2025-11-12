export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-8 rounded-xl text-center">
          <p className="text-3xl font-bold text-white">1,234</p>
          <p className="text-gray-400">Users of dashboard</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl text-center">
          <p className="text-3xl font-bold text-white">$56k</p>
          <p className="text-gray-400">Revenue</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl text-center">
          <p className="text-3xl font-bold text-white">+23%</p>
          <p className="text-gray-400">Growth</p>
        </div>
      </div>
    </div>
  );
}