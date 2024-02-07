import React from 'react';
import Image from "next/image";

import convoImage from '../../public/images/macPlaceHolder.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';

import overviewStyles from "../useCaseGenerics/overvievw.module.css";
import styles from "./convoscopeUseCase.module.css";

const overviewTextP1= "Students in the MIT Media Lab wanted more information at their fingertips when having conversations with peers, and when listening to research presentations.";

const overviewTextP2= <>I paired with researchers at MIT media lab to create a tool to aid in
    <span className={overviewStyles.emphasis}> seamlessly surfacing additional information during lab meetings.</span>
</>;
                
const overviewTextP3= <> I worked on the end-to-end design of the desktop application. Our app was presented and used at MIT, 
    <span className={overviewStyles.emphasis}> meaningfully improved the quality of research conversations, </span>
    and is currently being adapted for use with AR by Team Open Smart Glasses.
</>

const overviewTextFull= <>{overviewTextP1} <br/> {overviewTextP2} <br/> {overviewTextP3}</>;

import borderLinePng from '/public/images/line-8.png';

const boarder = <div className={`${styles.borderSize} ${styles.imageContainer}`}>
<Image src={borderLinePng} fill sizes="100vw"
style={{ objectFit: "cover", objectPosition: "top" }} />
</div>

import configPic from '/public/images/configJuliana.jpg';


export default function ConvoscopeUseCase(){
    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="ConvoScope" 
                subheading="Designing an experimental AI interface for MIT Media Lab researchers"
                image={convoImage}
                />
            <Overview
                myRole="Lead Product Designer – "
                responsibilities="Interaction Design, UX Design, Visual Design, User Flows, Prototyping"
                timeline="Q3, Q4 2023 Design Stage"
                status="Currently in development"
                team="Ayon Bhattacharya, UX
                Cayden Pierce, PM + SE Lead
                Alex Israelov, Head of Apps
                Kenji Phang, SE"
                overviewText={overviewTextFull}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Researchers had trouble surfacing relevant information on-the-fly when discussing unfamiliar or new topics."
                // topParagraphHTML={null}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Information must be easy to access, legible and useful."
                topParagraphHTML={null}
            />

            {boarder}
            

        </div>
    );
};