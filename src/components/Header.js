import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Actions from 'grommet/components/icons/base/Actions';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
// import UserIcon from 'grommet/components/icons/base/User';

export default function AppHeader (props) {
  return (
    <Header colorIndex="neutral-4" splash={false}
  fixed={true}
  float={true}>
  <Box flex={true}
    justify='end'
    direction='row'
    responsive={false}>
    <GrommetIcon colorIndex="brand" size="large" />
    <Title>
      Sample Title
    </Title>
    <Search inline={true}
      fill={true}
      size='medium'
      placeHolder='Search'
      dropAlign={{"right": "right"}} />
    <Menu icon={<Actions />}
      dropAlign={{"right": "right"}}>
      <Anchor href='#'
        className='active'>
        First
      </Anchor>
      <Anchor href='#'>
        Second
      </Anchor>
      <Anchor href='#'>
        Third
      </Anchor>
    </Menu>
  </Box>
</Header>
    // <Header justify="center" colorIndex="neutral-4">
    //   <Box size={{width: {max: 'xxlarge'}}} direction="row"
    //     responsive={false} justify="start" align="center"
    //     pad={{horizontal: 'medium'}} flex="grow">
    //     <GrommetIcon colorIndex="brand" size="large" />
    //     <Search inline={true}
    //       fill={true}
    //       size='medium'
    //       placeHolder='Search'
    //       dropAlign={{"right": "right"}} />
    //     <Box pad="small" />
    //     <Menu label="Label" inline={true} direction="row" flex="grow">
          
    //       <Anchor href="#">About Us</Anchor>
    //       <Anchor href="#">Support</Anchor>
    //     </Menu>

    //     <Box flex="grow" align="end">
    //       <UserIcon />
    //     </Box>
    //   </Box>
    // </Header>
  );
};
