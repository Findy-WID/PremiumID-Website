import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/Index';
//Products and Solutions page imports
import IAMProviderPage from '../features/products/pages/IAMProviderPag';
import SmartCardPage from '../features/products/pages/SmartCardPage';
import CompanyPage from '../features/CompanyPage';
import ContactPage from '../features/ContactPage';
import FinancialServicesPage from '../features/solutions/industries/FinancialServicesPage';
import HealthcarePage from '../features/solutions/industries/HealthCare';
import ManufacturingPage from '../features/solutions/industries/ManufacturingPage';
import GovernmentPage from '../features/solutions/industries/GovernmentPage';
import OilGasPage from '../features/solutions/industries/OilGasPage';
import SingleSignOnPage from '../features/solutions/SingleSignonPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/provider" element={<IAMProviderPage />} />
      <Route path="/products/smartcard" element={<SmartCardPage />} />
      <Route path="/solutions/industry/financial-services" element={<FinancialServicesPage />} />
      <Route path="/solutions/industry/healthcare" element={<HealthcarePage />} />
      <Route path="/solutions/industry/manufacturing" element={<ManufacturingPage />} />
      <Route path="/solutions/industry/government" element={<GovernmentPage />} />
      <Route path="/solutions/industry/oil-gas" element={<OilGasPage />} />
      <Route path="/solutions/single-sign-on" element={<SingleSignOnPage />} />
      {/* <Route path="/resources/:resourceType" element={<ResourcesPage />} /> */}
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}