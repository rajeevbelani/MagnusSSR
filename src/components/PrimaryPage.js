import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
// import Button from 'grommet/components/Button';
import Tabs from 'grommet/components/Tabs';
import Tiles from 'grommet/components/Tiles';
import Tab from 'grommet/components/Tab';
import Select from 'grommet/components/Select';
import Paragraph from 'grommet/components/Paragraph';
import Label from 'grommet/components/Label';
import Quote from 'grommet/components/Quote';
import Hero from 'grommet/components/Hero';
// import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import Header from './Header';
import NewsFeed from './NewsFeed';

export default class PrimaryPage extends Component {
  // 'http://www.wahroongagp.com.au/wp-content/uploads/2017/07/slider1-1.jpg'
  render() {
    return (
      <Box>
        <Header />
        <Box>
          <Hero size="small" backgroundImage='http://www.myinfoangel.com/_images/slideshow/Medical2.jpg' colorIndex="light-1">
            <Card
              heading={
                <Heading strong={true}>
                  Get Most Affordable Medical Care In India
                </Heading>
              }
              description={<Box colorIndex='light-1'>
              <Select colorIndex='nuetral-4' placeHolder='None'
              options={['Cancer', 'Infertility', 'Bariatic', 'Knee Replacement']}
              value={undefined}
              /></Box>}
              label="" 
              size="large"
              link={
                <Box>
                  <Anchor href="#" primary={true} label="Get Started" />
                </Box>
              } >
              <h2>   </h2>
              </Card>
          </Hero>
        </Box>

        {/* <Box align="center"> */}
          <Box pad="large" align="center" textAlign="center">
            <Tabs>

            <Tab title='Popular Treatments'>
                <Tiles>
                  <Card thumbnail='https://cdn.iconscout.com/public/images/icon/premium/png-128/cancer-aids-ribbon-awareness-breast-health-medical-38a22383265617b9-128x128.png'
                  heading='Cancer'
                  />
                  <Card thumbnail='https://cdn4.iconfinder.com/data/icons/medical-specialties-set-1/256/Cardiology-128.png'
                  
                  heading='Cardiology'
                  />
                  <Card thumbnail='https://cdn4.iconfinder.com/data/icons/orthopedics/92/icon88-17-128.png'
                  
                  heading='Orthopedic'
                  />
                  <Card thumbnail={<Box direction='row'
                    justify='start'
                    align='center'
                    wrap={true}
                    pad='large'
                    margin='large'
                    colorIndex='light-2'
                    >
                    <Anchor href="#" primary={true} label="View All" />
                  </Box>}
                  />
                  {/* <Card thumbnail='/img/fortis.jpg'
                  label='Super Speciality Hospital'
                  heading='Fortis Hospital'
                  description='Sample description providing more details.' /> */}
                  {/* <Card thumbnail='/img/apollo.jpg'
                  label='Super Speciality Hospital'
                  heading='Apollo Hospital'
                  description='Sample description providing more details.' /> */}
                </Tiles>
              </Tab>
              <Tab title='Hospitals'>
                <Tiles>
                  <Card thumbnail='/img/kokilaben.jpg'
                  label='Super Speciality Hospital'
                  heading='Kokilaben Hospital'
                  description='Sample description providing more details.' />
                  <Card thumbnail='/img/apollo.jpg'
                  label='Super Speciality Hospital'
                  heading='Apollo Hospital'
                  description='Sample description providing more details.' />
                  <Card thumbnail='/img/fortis.jpg'
                  label='Super Speciality Hospital'
                  heading='Fortis Hospital'
                  description='Sample description providing more details.' />
                  <Card thumbnail={<Box direction='row'
                    justify='start'
                    align='center'
                    wrap={true}
                    pad='large'
                    margin='large'
                    colorIndex='light-2'
                    >
                    <Anchor href="#" primary={true} label="View All (200+)" />
                  </Box>}
                  />
                  {/* <Card thumbnail='/img/apollo.jpg'
                  label='Super Speciality Hospital'
                  heading='Apollo Hospital'
                  description='Sample description providing more details.' /> */}
                </Tiles>
              </Tab>
              <Tab title='Doctors'>
                <Tiles>
                  <Card thumbnail='/img/drashokseth.jpg'
                  label='Cardiologist'
                  heading='Dr Ashok Seth'
                  description='Sample description providing more details.' />
                  <Card thumbnail='/img/drharit.jpg'
                  label='Oncologist'
                  heading='Dr Harit'
                  description='Sample description providing more details.' />
                  <Card thumbnail='http://www.vaidam.com/sites/default/files/dr._nandita_p._palshetkar.jpg'
                  label='IVF Specialist'
                  heading='Dr. Nandita P. Palshetkar'
                  description='Sample description providing more details.' />
                  <Card thumbnail={<Box direction='row'
                    justify='start'
                    align='center'
                    wrap={true}
                    pad='large'
                    margin='large'
                    colorIndex='light-2'
                    >
                    <Anchor href="#" primary={true} label="View All (300+)" />
                  </Box>}
                  />
                  {/* <Box direction='row'
                    justify='start'
                    align='center'
                    wrap={true}
                    pad='medium'
                    margin='small'
                    colorIndex='light-2'
                    >
                  <Anchor href="#" primary={true} label="Read More" />
                  </Box> */}
                  {/* <Card thumbnail='/img/drharit.jpg'
                  label='Oncologist'
                  heading='Dr Harit'
                  description='Sample description providing more details.' /> */}
                </Tiles>
                {/* <input type='text'
                  value=''
                  /> */}
              </Tab>
            </Tabs>
            {/* <Paragraph size="xlarge" width="large">
              Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo 
              copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit 
              consequuntur me.
            </Paragraph> */}
          </Box>
        {/* </Box> */}
        
        
        <Box colorIndex="light-2" pad={{vertical: "large"}} align="center">
          <Box align="center"
            size={{"width": "xxlarge"}} pad={{horizontal: "large"}}>
            {/* <Heading tag="h2" strong={true}>
              Recent News
            </Heading> */}
          </Box>
          <NewsFeed />
        </Box>

        
        <Hero size="large" backgroundImage="http://antithesisadvertising.com/wp-content/uploads/2015/01/urmcstories-hidden-1-cover.jpg" 
          justify="start"
          backgroundColorIndex='dark'>
          <Quote>
            <Card
              heading={
                <Heading strong={true}>
                  Over 600 stories of satisfied patients
                </Heading>
              }
              
              
              size="large"
              link={
                <Anchor href="#" primary={true} label="Read More" />
              } />
            </Quote>
        </Hero>
        <Tiles fill={true}>
          <Box pad="large" pad="small" align="center" textAlign="center">
          {/* <Quote> */}
              <Paragraph size="large" width="small" strong="true">
                <b><i>We are lucky to have reached out to the right doctor and hospital. The infrastructure and medical facility of Kokilaben Dhirubhai Ambani Hospital is praiseworthy. </i></b>
              </Paragraph>
              <Label size="large" width="small" strong="true">
                <b>- Patient Name</b>
              </Label>
              {/* </Quote> */}
            </Box>
            <Box pad="large" pad="small"  align="center" textAlign="center">
          {/* <Quote> */}
              <Paragraph size="large" width="small">
                <b><i>Many people in Africa do not have easy access to a doctor or medical information. Magnus's innovative approach is helping to close this important gap.</i></b>
              </Paragraph>
              <Label size="large" width="small" strong="true">
                <b>- Hospital Name</b>
              </Label>
              {/* </Quote> */}
            </Box>
            <Box pad="large" pad="small"  align="center" textAlign="center">
          {/* <Quote> */}
              <Paragraph size="large" width="small">
                <b><i>It’s streets ahead of anything else that’s out there. It’s almost too good..</i></b>
              </Paragraph>
              <Label size="large" width="small" strong="true">
                <b>- Doctor Name</b>
              </Label>
              {/* </Quote> */}
            </Box>
            
        </Tiles>
        <Footer full="horizontal">
          <Box colorIndex="neutral-1" pad="large" align="center" full="horizontal">
            <Box className="footer-cards-container" pad={{vertical: "medium"}}
              size={{width: 'xxlarge'}} direction="row" flex="grow">
              <Card
                pad={{horizontal: "large"}}
                contentPad="medium"
                heading="Something else which is not that important"
                label="Label"
                basis="1/2"
                link={
                  <Anchor href="http://www.grommet.io/docs/" primary={true}>
                    Learn More
                  </Anchor>
                }
                separator="right" />
              <Card
                pad={{horizontal: "large"}}
                contentPad="medium"
                heading="Something else which is not that important"
                label="Label"
                basis="1/2"
                link={
                  <Anchor href="http://www.grommet.io/docs/" primary={true}>
                    Learn More
                  </Anchor>
                } />
            </Box>
          </Box>
        </Footer>
      </Box>
    );
  }
};
