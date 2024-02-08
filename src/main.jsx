import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProviders>
        <div className="bg-bkg text-txt">
            <RouterProvider router={router} />
        </div>
    </AuthProviders>
);
