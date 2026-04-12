import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/Index';
import CompanyPage from '../features/CompanyPage';
import ContactPage from '../features/ContactPage';

// Layout components
import ProductsLayout from '../features/products/pages/ProductsLayout';
import SolutionsLayout from '../features/solutions/SolutionsLayout';

// Products
import IAMProviderPage from '../features/products/pages/IAMProviderPag';
import SmartCardPage from '../features/products/pages/SmartCardPage';

// Solutions - Industry
import FinancialServicesPage from '../features/solutions/industries/FinancialServicesPage';
import HealthcarePage from '../features/solutions/industries/HealthCare';
import ManufacturingPage from '../features/solutions/industries/ManufacturingPage';
import GovernmentPage from '../features/solutions/industries/GovernmentPage';
import OilGasPage from '../features/solutions/industries/OilGasPage';
import EducationPage from '../features/solutions/industries/Education';

// Solutions - Use Cases
import SingleSignOnPage from '../features/solutions/SingleSignonPage';
import MultiFactorPage from '../features/solutions/MultiFactorPage';
import PasswordlessPage from '../features/solutions/PasswordlessPage';
import IdentityBrokeringPage from '../features/solutions/IdentityBrokeringPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Nested Products Routes */}
      <Route path="/products" element={<ProductsLayout />}>
        <Route path="provider" element={<IAMProviderPage />} />
        <Route path="smartcard" element={<SmartCardPage />} />
      </Route>
      
      {/* Nested Solutions Routes */}
      <Route path="/solutions" element={<SolutionsLayout />}>
        {/* Industry Solutions */}
        <Route path="industry/financial-services" element={<FinancialServicesPage />} />
        <Route path="industry/healthcare" element={<HealthcarePage />} />
        <Route path="industry/manufacturing" element={<ManufacturingPage />} />
        <Route path="industry/government" element={<GovernmentPage />} />
        <Route path="industry/oil-gas" element={<OilGasPage />} />
        <Route path="industry/education" element={<EducationPage />} />
        
        {/* Use Case Solutions */}
        <Route path="single-sign-on" element={<SingleSignOnPage />} />
        <Route path="multifactor" element={<MultiFactorPage />} />
        <Route path="passwordless" element={<PasswordlessPage />} />
        <Route path="identitybrokering" element={<IdentityBrokeringPage />} />
      </Route>

      <Route path="/company" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}