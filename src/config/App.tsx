import { QueryClientProvider } from "@tanstack/react-query";
import { MianLayout } from "../components/layouts";
import { Header } from "../components/UI";
import { queryClient } from "./queryClient/queryConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MianLayout />
              </>
            }
          />
          <Route path="/:name" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
