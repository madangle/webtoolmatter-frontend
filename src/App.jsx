import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-4xl font-bold text-indigo-600">
          WebToolMatter
        </h1>
      </div>
      <AppRoutes />
    </div>
  );
}

export default App;
