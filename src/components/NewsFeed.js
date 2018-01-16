import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
// import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
// import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

const grommetPath = 'http://grommet.github.io';

export default class NewsFeed extends Component {
  _onClickCard(path, event) {
    event.preventDefault();
    window.location.href = path;
  }

  render() {
    // const twitterIconBox = (
    //   <Box align="end">
    //     <SocialTwitterIcon />
    //   </Box>
    // );

    // const facebookIconBox = (
    //   <Box align="end">
    //     <SocialFacebookIcon />
    //   </Box>
    // );

    const linkedinIconBox = (
      <Box align="end">
        <SocialLinkedinIcon />
      </Box>
    );

    // const socialFeedCard1 = (
    //   <Card
    //     colorIndex="light-1"
    //     margin="small"
    //     contentPad="medium"
    //     direction="column"
    //     label="Social">
    //     <Heading tag="h2">
    //       Some Random Doctor
    //     </Heading>
    //     {twitterIconBox}
    //   </Card>
    // );

    // const socialFeedCard2 = (
    //   <Card
    //     colorIndex="light-1"
    //     margin="small"
    //     contentPad="medium"
    //     onClick={this._onClickCard.bind(this, 'http://www.facebook.com')}
    //     direction="column"
    //     label="Social">
    //     <Heading tag="h2">
    //       Some Random Facebook Page
    //     </Heading>
    //     {facebookIconBox}
    //   </Card>
    // );

    const socialFeedCard3 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, 'http://www.linkedin.com')}
        direction="column"
        label="Social">
        <Heading tag="h3">
          <b>Some Random Doctor</b>
        </Heading>
        {linkedinIconBox}
      </Card>
    );

    const blogPostCard = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        direction="column"
        label="Featured Post"
        link={
          <Anchor href={grommetPath} label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3">
          <b>Top 15 Hospitals In India known for medical tourism</b>
        </Heading>
      </Card>
    );

    const blogPostCard1 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        thumbnail="http://www.aquincumhotel.com/wp-content/uploads/2014/05/wellness-kezelesek.jpg"
        onClick={this._onClickCard.bind(this, grommetPath)}
        direction="column"
        label="Featured Post"
        link={
          <Anchor href={grommetPath} label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3">
          <b>Wellness Blog</b>
        </Heading>
      </Card>
    );

    const featuredPostCard = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="https://cancer.osu.edu/-/media/images/cancer/pages/cancer-specialties/cancer-care-and-treatment/cancer-patient-stories/patient-stories-susan-tallentire.jpg"
        direction="column"
        label="Patient Stories"
        description={<Heading tag="h3">
          <b>Lauren Polo - Cancer Survivor</b>
      </Heading>}
        link={
          <Anchor href={grommetPath} label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3" />
          
        
      </Card>
    );

    const featuredPostCard1 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="https://magazine.grasscity.com/wp-content/uploads/2015/07/shutterstock_216367333-720x480.jpg"
        direction="column"
        
        link={
          <Anchor href={grommetPath} label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3">
          <b>Why India is a boon for Australians seeking treatment abroad?</b>
        </Heading>
      </Card>
    );

    const featuredPostCard2 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="http://alternativemedicinesociety.com/wp-content/uploads/2016/03/herbal-medicines-1080x675.jpg"
        direction="column"
        
        link={
          <Anchor href={grommetPath} label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3">
          <b>How to fight health issues with Natural Medicine?</b>
        </Heading>
      </Card>
    );

    const featuredPostCard3 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="http://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2014/09/healthcare_tourism.jpg"
        direction="column"
        
        link={
          <Anchor href={grommetPath} label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3">
          <b>Top 5 tourism benefits every patient should know?</b>
        </Heading>
      </Card>
    );

    // const featuredPostCard1 = (
    //   <Card
    //     colorIndex="light-1"
    //     margin="small"
    //     contentPad="medium"
    //     onClick={this._onClickCard.bind(this, grommetPath)}
    //     thumbnail="/img/hospital_room.jpg"
    //     direction="column"
    //     label="Featured Post"
    //     link={
    //       <Anchor href={grommetPath} label="Learn More" 
    //         icon={<LinkNextIcon />} />
    //     }>
    //     <Heading tag="h2">
    //       5 Emerging trends in Medical Tourism
    //     </Heading>
    //   </Card>
    // );

    return (
      <Box className="columns-container" colorIndex="light-2"
        pad={{horizontal: "large"}} full="horizontal">
        <Columns size="medium" justify="center"
          maxCount={3} responsive={true}>
          {featuredPostCard}
          {blogPostCard}
          
          {/* {socialFeedCard1}
          {socialFeedCard2} */}
          {socialFeedCard3}
          {blogPostCard1}
          {featuredPostCard1}
          {featuredPostCard2}
          {featuredPostCard3}
          
          
        </Columns>
      </Box>
    );
  }
};
