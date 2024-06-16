'use client';
import { Grid, Column } from '@carbon/react';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import {
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel  
} from '@carbon/react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
    <BreadcrumbItem>
      <Link href="https://startupper.totalenergies.com/">TotalEnergies Business Creation Project</Link>
    </BreadcrumbItem>
  </Breadcrumb>
  <h1 className="landing-page__heading">bluechat: Cameroon's SuperApp</h1>
</Column>

<Column lg={16} md={8} sm={4} className="landing-page__r2">
  <Tabs defaultSelectedIndex={0}>
    <TabList className="tabs-group" aria-label="Tab navigation">
      <Tab>About</Tab>
      <Tab>Business</Tab>
      <Tab>Design</Tab>
      <Tab>Develop</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h3 className="landing-page__subheading">What is bluechat?</h3>
            <p className="landing-page__p">
            Bluechat is an All-In-One Platform for Cameroonians and Businesseses Seeking to Transform our Digital Landscape.
            </p>
            <Button>Learn more</Button>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
  <Image
    className="landing-page__illo"
    src="/bluechatlogo.png"
    alt="Bluechat Hero image"
    width={604}
    height={498}
  />
</Column>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h3 className="landing-page__subheading">What is bluechat?</h3>
            <p className="landing-page__p">
            Bluechat is an All-In-One Platform for Cameroonians and Businesseses Seeking to Transform our Digital Landscape.
            </p>
            <Button>Learn more</Button>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
  <Image
    className="landing-page__illo"
    src="/bluechatlogo.png"
    alt="Bluechat Hero image"
    width={604}
    height={498}
  />
</Column>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
            <p className="landing-page__p">
              Rapidly build beautiful and accessible experiences. The Carbon kit
              contains all resources you need to get started.
            </p>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
            <p className="landing-page__p">
              Carbon provides styles and components in Vanilla, React, Angular,
              and Vue for anyone building on the web.
            </p>
          </Column>
        </Grid>
      </TabPanel>
    </TabPanels>
  </Tabs>
</Column>
<Column lg={16} md={8} sm={4} className="landing-page__r3">
  <Grid>
    <Column lg={4} md={2} sm={4}>
      <h3 className="landing-page__label">Contact Us</h3>
    </Column>
    <Column
      lg={{ start: 5, span: 3 }}
      md={{ start: 3, span: 6 }}
      sm={4}
      className="landing-page__title"
    >
       Whatsapp: <Link href= "https://wa.link/jzaa2c"> +237 620241066</Link>
    </Column>
    <Column
      lg={{ start: 9, span: 3 }}
      md={{ start: 3, span: 6 }}
      sm={4}
      className="landing-page__title"
    >
      Email: <Link href="mailto:azinwiboris@hotmail.com">azinwiboris@hotmail.com</Link>
      
    </Column>
    <Column
      lg={{ start: 9, span: 3 }}
      md={{ start: 3, span: 6 }}
      sm={4}
      className="landing-page__title"
    >
      Linkedin: <Link href="https://github.com/azinwiboris">github.com/azinwiboris</Link>
    </Column>
    <Column
      lg={{ start: 13, span: 3 }}
      md={{ start: 3, span: 6 }}
      sm={4}
      className="landing-page__title"
    >
Github: <Link href="https://github.com/azinwiboris">github.com/azinwiboris</Link>
    </Column>
  </Grid>
</Column>
    </Grid>
  );
}