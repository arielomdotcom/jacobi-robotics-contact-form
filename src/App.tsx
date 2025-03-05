import BookDemoForm from "./components/BookDemoForm";
import SiteFooter from "./components/site-footer/SiteFooter";
import SiteHeader from "./components/site-header/SiteHeader";

const App = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <BookDemoForm />
      <SiteFooter />
    </div>
  );
};

export default App;
