import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
  } from '@carbon/react';

  import Link from 'next/link';

  const TutorialHeader = () => (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <Link href="/" passHref legacyBehavior>
  <HeaderName prefix="CMR">
    <h3>bluechat</h3>
  </HeaderName>
</Link>

        </Header>
      )}
    />
  );
  
  export default TutorialHeader;