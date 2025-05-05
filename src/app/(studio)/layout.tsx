import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";

interface HomeLayoutProps {
    children: React.ReactNode;
  }

const Layout = ({children}:HomeLayoutProps) => {
    return ( 
        <StudioLayout>
            {children}
        </StudioLayout>
    );
}
 
export default Layout;