import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProviders>
        <QueryClientProvider client={queryClient}>
            <div className="bg-bkg text-txt">
                <RouterProvider router={router} />
            </div>
        </QueryClientProvider>
    </AuthProviders>
);
