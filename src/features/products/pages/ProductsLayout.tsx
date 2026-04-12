import { Outlet } from 'react-router-dom';
import PageLayout from '../../../components/layout/PageLayout';

export default function SolutionsLayout() {
  return (
    <PageLayout>
      <Outlet />  {/* Child routes render here */}
    </PageLayout>
  );
}