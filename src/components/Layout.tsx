import { Sidebar } from "./sidebar";

export const Layout: React.FC = ({ children }) => {
  return <Sidebar>{children}</Sidebar>;
};
