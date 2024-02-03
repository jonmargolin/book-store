import Header from "./components/header";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/sideBar";
import Catalog from "./pages/catalog";
import { QueryClient, QueryClientProvider } from "react-query";
import { BookProvider } from "./contexts/bookContext";
import { Provider } from "react-redux";
import store from "./store/store";
import CartModal from "./components/cartModal/cartModal";
import { useState } from "react";
import { customStyles } from "./const/const";
import Modal from "react-modal";

function App() {
  const queryClient = new QueryClient();
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BookProvider>
          <div className="grid min-h-screen w-full lg:grid-cols-[280px_auto]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <Header onClick={() => setCartOpen(true)} />
                <SideBar />
              </div>
            </div>
            <div className="flex flex-col">
              <Catalog />
            </div>
          </div>
          <Modal isOpen={isCartOpen} style={customStyles} ariaHideApp={false}>
            <CartModal onclose={() => setCartOpen(false)} />
          </Modal>
        </BookProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
