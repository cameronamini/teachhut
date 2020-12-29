import React from 'react'
import {FooterContainer, LinkContainer, PageBottom, LinkGroup, FooterLink, Logo, Copyright, IconList, TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon} from './FooterElements.js'




const Footer = () => {
    return (
        <FooterContainer>
            <LinkContainer>
                <LinkGroup> About Us
                    <FooterLink>How it works</FooterLink>
                    <FooterLink>Testimonials</FooterLink>
                    <FooterLink>Careers</FooterLink>
                    <FooterLink>Investors</FooterLink>
                </LinkGroup>
                <LinkGroup> Contact Us
                    <FooterLink>Contact</FooterLink>
                    <FooterLink>Support</FooterLink>
                    <FooterLink>Destinations</FooterLink>
                    <FooterLink>Sponsorships</FooterLink>
                </LinkGroup>
                <LinkGroup> Videos
                    <FooterLink>Submit Video</FooterLink>
                    <FooterLink>Ambassadors</FooterLink>
                    <FooterLink>Agency</FooterLink>
                    <FooterLink>Influencer</FooterLink>
                </LinkGroup>
                <LinkGroup> Social Media
                    <FooterLink>Instagram</FooterLink>
                    <FooterLink>Facebook</FooterLink>
                    <FooterLink>Youtube</FooterLink>
                    <FooterLink>Twitter</FooterLink>
                </LinkGroup>
            </LinkContainer>
            <PageBottom>
                <Logo>Teachhut</Logo>
                <Copyright>Teachhut © 2020 All rights reserved</Copyright>
                <IconList>
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <YoutubeIcon/>

                </IconList>

            </PageBottom>


        </FooterContainer>
    )
}

export default Footer
