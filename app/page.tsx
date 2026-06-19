import HomeGrommet from '@/components/home/HomeGrommet';
import JsonLd from '@/components/JsonLd';
import { organizationLd, localBusinessLd, websiteLd, homeFaqLd } from '@/lib/jsonld';
import './grommet-home.css';

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteLd, organizationLd, localBusinessLd, homeFaqLd]} />
      <HomeGrommet />
    </>
  );
}
