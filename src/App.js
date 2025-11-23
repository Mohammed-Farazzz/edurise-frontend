import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { StudentProvider } from "./StudentContext";
import ProtectedRoute from "./ProtectedRoute";

import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ContactPage from "./ContactPage";
import PricingPage from "./PricingPage";
import DonatePage from "./DonatePage";
import CodeOfPracticePage from "./CodeOfPracticePage";
import StudentDashboard from "./StudentDashboard";
import FillDetailsPage from "./FillDetailsPage";
import SuccessPage from "./SuccessPage";
import TrackRequestPage from "./TrackRequestPage";
import AdminDashboard from "./AdminDashboard";
import ReviewApplicationsPage from "./ReviewApplicationsPage";
import ManageStudentsPage from "./ManageStudentsPage";
import MakeTransactionPage from "./MakeTransactionPage";


function App() {
  return (
    <AuthProvider>
      <StudentProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/code-of-practice" element={<CodeOfPracticePage />} />

          {/* Student Pages */}
          <Route
            path="/student"
            element={
              <ProtectedRoute
                allowedRoles={["STUDENT"]}
                element={<StudentDashboard />}
              />
            }
          />
          <Route
            path="/fill-form"
            element={
              <ProtectedRoute
                allowedRoles={["STUDENT"]}
                element={<FillDetailsPage />}
              />
            }
          />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/track-request" element={<TrackRequestPage />} />

  

          {/* Admin Pages */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN"]}
                element={<AdminDashboard />}
              />
            }
          />
          <Route
            path="/admin/review"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN"]}
                element={<ReviewApplicationsPage />}
              />
            }
          />
          <Route
            path="/admin/manage-students"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN"]}
                element={<ManageStudentsPage />}
              />
            }
          />
          <Route
            path="/admin/transactions/:id"
            element={
              <ProtectedRoute
                allowedRoles={["ADMIN"]}
                element={<MakeTransactionPage />}
              />
            }
          />
        </Routes>
      </StudentProvider>
    </AuthProvider>
  );
}

export default App;

