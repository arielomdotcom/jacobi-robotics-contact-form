import BookDemoForm from "./components/BookDemoForm";
import SiteHeader from "./components/site-header/SiteHeader";

const App = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <BookDemoForm />
    </div>
  );
};

export default App;
