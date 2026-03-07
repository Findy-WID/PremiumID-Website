import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/Index';
import CompanyPage from '../features/CompanyPage';
import ContactPage from '../features/ContactPage';
//Products and Solutions page imports
import IAMProviderPage from '../features/products/pages/IAMProviderPag';
import SmartCardPage from '../features/products/pages/SmartCardPage';
// Solutions by industry imports
import FinancialServicesPage from '../features/solutions/industries/FinancialServicesPage';
import HealthcarePage from '../features/solutions/industries/HealthCare';
import ManufacturingPage from '../features/solutions/industries/ManufacturingPage';
import GovernmentPage from '../features/solutions/industries/GovernmentPage';
import OilGasPage from '../features/solutions/industries/OilGasPage';
import EducationPage from '../features/solutions/industries/Education';
// Solutions-Identity & Auth imports
import SingleSignOnPage from '../features/solutions/SingleSignonPage';
import MultiFactorPage from '../features/solutions/MultiFactorPage';
import PasswordlessPage from '../features/solutions/PasswordlessPage';
import IdentityBrokeringPage from '../features/solutions/IdentityBrokeringPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/provider" element={<IAMProviderPage />} />
      <Route path="/products/smartcard" element={<SmartCardPage />} />
      {/* --- Solutions by industry --- */}
      <Route path="/solutions/industry/financial-services" element={<FinancialServicesPage />} />
      <Route path="/solutions/industry/healthcare" element={<HealthcarePage />} />
      <Route path="/solutions/industry/manufacturing" element={<ManufacturingPage />} />
      <Route path="/solutions/industry/government" element={<GovernmentPage />} />
      <Route path="/solutions/industry/oil-gas" element={<OilGasPage />} />
      <Route path="/solutions/industry/education" element={<EducationPage />} />
      {/* --- Solutions-Identity & Auth --- */}
      <Route path="/solutions/single-sign-on" element={<SingleSignOnPage />} />
      <Route path="/solutions/multifactor" element={<MultiFactorPage />} />
      <Route path="/solutions/passwordless" element={<PasswordlessPage />} />
      <Route path="/solutions/identitybrokering" element={<IdentityBrokeringPage />} />

      {/* <Route path="/resources/:resourceType" element={<ResourcesPage />} /> */}
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}