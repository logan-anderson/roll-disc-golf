import { DiscRoller } from "../components/DiscRoller";
import { Layout } from "../components/Layout";
import { useOptions } from "../components/state/DiscOptionsTypeProvider";

export default function Home() {
  const { options } = useOptions();
  return (
    <Layout>
      <DiscRoller options={options} />
    </Layout>
  );
}
