import React, { useState, useEffect } from 'react';
import Image from "next/image";

import eye from '../../public/images/eye.png'
import speakerIcon from '../../public/images/SpeakerIcon.png'
import bookOpen from '../../public/images/book-open.png'
import alertIcon from '../../public/images/alert-triangle.png'
import eyeOffIcon from '../../public/images/eye-off.png'
import folderIcon from '../../public/images/folder.png'
import processHorizontal from '../../public/images/processHorizontal2.png'
import processVertical from '../../public/images/processVertial2.png'
import artifactsIcon from '../../public/images/artifactsIcon.png'
import feedbackIcon from '../../public/images/feedbackIcon.png'
import thumbsDownIcon from '../../public/images/thumbsDownIcon.png'
import thumbsUpIcon from '../../public/images/thumbsUpIcon.png'
import styleTyleMain from '../../public/images/StyleTile.png'
import tempImg from '../../public/images/mainScrene.png'
import dataPic1 from '../../public/images/dataViz.png'
import speakerHighlight from '../../public/images/speakerHighlight.png'
import participantView from '../../public/images/participantView.png'
import teaserImage from '../../public/images/TeaserImage.png'
import convoPersona from '../../public/images/ResearcherPersona.png'
import wireframes from '../../public/images/wireframes2.png'
import branding from '../../public/images/brandingConvo.png'
import itterationsGreen from '../../public/images/itterationsGreen.png'
import firstPassBlue from '../../public/images/firstPassBlue.png'
import firstPassGreen from '../../public/images/firstPassGreen.png'
import beforeContrast from '../../public/images/beforeContrast.png'
import statsInWords from '../../public/images/statsInWords.png'
import transcriptBefore from '../../public/images/transcriptBefore.png'
import agentsBefore from '../../public/images/agentsBefore.png'
import agentsAFter from '../../public/images/agentsAfter.png'
import data1 from '../../public/images/data1.png'
import data2 from '../../public/images/data2.png'
import data3 from '../../public/images/data3.png'
import data4 from '../../public/images/data4.png'
import heyConvo from '../../public/images/heyConvo.png'
import landingPage from '../../public/images/landingPage.png'
import speakerView from '../../public/images/speakerView.png'
import webpage from '../../public/images/webpage.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { text, takeaways } from '../constants/cometConstants.js';
import { overviewTextFull, boarder, boarder2} from '../constants/convoscopeConstants';


export default function CometUseCase(){
    const [imageSrc, setImageSrc] = useState(processHorizontal);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 714) {
          setImageSrc(processVertical); // Use the vertical image if the viewport width is less than 700
        } else {
          setImageSrc(processHorizontal); // Otherwise, use the horizontal image
        }
      };
  
      // Set the initial image based on the current window size
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="Comet" 
                subheading="Reimagining the source code management experience."
                // image={testVid}
                image={teaserImage}
                />
            <Overview
                myRole="Product Designer – "
                responsibilities="UX Design, Visual Design, Information Architecture, User Flows, User Research"
                timeline="Q4 2024"
                status="MVP Design Complete"
                team={<div>Me, Myself, and I
                </div>}
                overviewText={text}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Using git CLI can be fraught, confusing, and downright annoying."
                topParagraphHTML={<div className={'bodyText'}>And yet, source control is a necessary tool used everyday by most software engineers and is <span className={`emphasis`}>essential to master</span> as an SE student. Many of our users were <span className={`emphasis`}>fed up with existing tooling</span> and found git onerous. They felt git CLI was clunky when performing actions such as undoing mistakes, managing stashes, and viewing committed or staged changes.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="The power you need coupled with the ease you desire."
                topParagraphHTML={<div className={'bodyText'}>With ConvoScope, users don’t waste time entering requests into a search tool. When activated, 
                    the tool listens to the users’ conversation and, with the help of AI, automatically outputs 
                    succinct information, aiding in a <span className={`emphasis`}>approachable, forgiving and straightforward.</span></div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Branch Management Dropdown -</span> In Comet it’s simple to find all the actions related to branch management in one place.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={tempImg}
                //image2={dataPic1}
                // video1="/video/cardFlowStartVid.mp4"
                bullets={null}
            >
                <div className={`bodyText ${styles.cardBody2}`}>
                    <div>In the branch dropdown users can view the current branch, checkout any existing branch, create a new branch or merge branches.</div>
                </div>
            </Card>

            {/* Speaker mode icons  */}
            <div className={`${styles.speakerModsWrapper}`}>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={speakerIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Forem ipsum</div>
                    <div className={`bodyText ${styles.modeBody}`}>Forem ipsum dolor<br/>Fsit amet consectetur</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={eye}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Forem ipsum</div>
                    <div className={`bodyText ${styles.modeBody}`}>Forem ipsum dolor<br/>Forem ipsum dolor sit
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Easy Undo–</span>  If a mistake is made, it’s quick to undo it via the undo button. This is an alternative to looking up less frequently used git commands and hoping to avoid unintentionally destructive git commands that sometimes can be stumbled over.</div> }
            >
                <div className={styles.imageWrapper2}>
                    <Image
                        src={speakerHighlight}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Undo Context Menu–</span> Upon reviewing the commit history, it’s simple revert or rename commits.</div>
                </div>

                <div className={styles.imageWrapper2}>
                    <Image
                        src={participantView}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Research"
                sectionSubtitleTxt="A detective story for the ages."
                topParagraphHTML={<div className={'bodyText'}>To truly understand my users and avoid assumptions based on personal experience, I conducted interviews, and iteratively refined the design using user feedback. I interviewed engineers at various skill levels to<span className={`emphasis`}> identify friction points</span>  for both beginners and advanced git users, exploring whether their challenges intersected.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                {/* <div className={styles.sectionSubheading}>
                    Questions Included
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • Tell me how you accomplish source code management today.<br />
                • What is the hardest thing about your current workflow?<br />
                • What do you do to solve this problem for yourself today?<br />
                </div>
                <br />
                <br /> */}


                <div className={styles.sectionSubheading}>
                Key quotes
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • I need to quickly use git so I can shift focus to more important tasks.<br />
                • There are no guard rails for the [git CLI]. I’m always wondering what are the best practices. <br />
                • I have to look up syntax all the time.<br />
                • Version control wasn't taught in school. It was just expected that we know how to do it. <br />
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Main Insight
                </div>
            </div>
            <Card
            className={`${styles.marginTop3}`}>
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                Git is a tool used to get the more important deep work done. It should be quick, <span className={`${styles.whiteTxt}`}>easy to leverage, and as frictionless process as possible.</span>
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Additional Insights
                </div>

                <div className={`bodyText ${styles.marginTop2}`}>
                Morem ipsum dolor sit amet, consectetur adipiscing elit <span class="emphasis"> CHANGE ICONS BELOW.</span>
                </div>
            </div>

            <Box className={styles.marginTop2} txt='<span className={overviewStyles.emphasis}>Git is hard to learn and master.</span> Users had difficulty remembering Git commands and sequences, especially infrequently used commands or when learning git for the first time.' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>Undoing mistakes</span> with git CLI can be arduous and cause trepidation.' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>The CLI tucks away info that users want quick access too.</span> For example, which files that are staged, or already committed. This style makes it difficult to see line by line code changes in the current WIP or in the user’s history.' icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>Want to be able to manage stashing and stashes easily and quickly.</span> Stashing is annoying but necessary for in many cases.' icon={folderIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='FIX THE STYLING<span className={overviewStyles.emphasis}> Need to see current changes at a glance Something.</span>' icon={folderIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Research Collation
                </div>
                
            </div>{/* Persona image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={convoPersona}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {boarder} 
            
            <SectionTopper
                sectionTitletxt="Ideation"
                sectionSubtitleTxt="Go slow to go fast."
                topParagraphHTML={<div className={'bodyText'}>First, I had to clarify which features should make it into the MVP. Then I moved onto quick iterations of designs.</div>}
            />

           {/* User Flows */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    User Flows
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>Leveraging detailed user insights, I identified the most common and essential use case flows. I also documented <span class="emphasis">  sequences in which actions were typically taken</span> so I could create an application that fit into the existing workflow.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Building out these flows in visual graphs helped me start to conceptualize the possible the information architecture of the application. I wanted to ensure the IA was intuitive and would <span class="emphasis"> minimize flow disruption.</span>
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Once I understood the flows, I mapped out a spectrum of feature priorities from high to low. This process also clarified which features were vital and which could be deferred.
                </div>
            </div>


            {/* Minimal Lo-fi Sketches*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                Minimal Lo-fi Sketches
                </div>
            </div>{/* Wireframes image */}
            
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                With a clear vision of the MVP featureset and typical use cases in mind, I began with rapid, hand-drawn sketches to maintain flexibility before moving on to low-fidelity wireframes in Figma. This approach allowed for quick comparisons and adjustments, optimizing the design process.
                </div>
            </div>

            {/* Wireframes Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Wireframes
                </div>
            </div>{/* Wireframes image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer`}>
                <div className={`bodyText`}>
                Next steps were wireframes to to play with the design in a more detailed manor.
                </div>
            </div>
            

            {/* Iterations and deliverables Infographic*/}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Iterations and Deliverables
                </div>
            </div>
            <div className={`${styles.speakerModsWrapper} ${styles.marginBottomNone} ${styles.marginTop5} ${styles.marginVpTopSmall}`}>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={speakerIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Design Files</div>
                    <div className={`bodyText ${styles.modeBody}`}>Utilized Figma and FigJam for<br/>all design artifacts</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={feedbackIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Iterative Feedback</div>
                    <div className={`bodyText ${styles.modeBody}`}>Gathered continuous feedback<br/>from users
                    </div> 
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                    Process
                </div>
            </div> {/*Process image infographic  */}
            <div className={`${styles.imageWrapper2} ${styles.marginSides1} ${styles.marginBottomNone} ${styles.processContainer}`}>
                    <Image
                        src={imageSrc}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {/* {boarder} */}
            {boarder2}

            <SectionTopper
                sectionTitletxt="Initial Directions"
                sectionSubtitleTxt="From general to specific."
                topParagraphHTML={<div className={'bodyText'}>I started the brainstorming by jotting down as many varied descriptors as possible, letting it be a stream of consciousness exercise. There was no wrong answer. From that larger list of general adjectives, I grabbed the ones that had potential, and gathered them into themes.  </div>}
            />

            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={branding}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText`}>
                Narrowing down the list still further, I landed on the descriptors of Powerful, Sleek, and Approachable. I then used these words to focus and guide my styling
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                Color + Theme
                </div>
            </div> 

            {/* Styles and design language */}
            <Card
                p1= {<div><span className={`emphasis`}>Sleek– </span> I opted for the light theme, over a dark one, to evoke an atmosphere of simplicity and, in turn, create an impression of ease of use.</div>}
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={firstPassGreen}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div>The light, bright theme, coupled with the design’s general spaciousness, imparts an air of sleek cleanliness and reflects organization and reliability. The lack of clutter was also an attempt to minimize distraction, given as this app is a means to an end.</div>
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={firstPassBlue}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Powerful–</span><br />
                • Straight lines and overall limited use of rounded corners <br />
                • A feeling of something serious with structure<br />
                • Comes across as dynamic and powerful </div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={itterationsGreen}   
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Approachable</span> I chose  pink and purple specifically for approachability, keeping in mind the users that were new to source control in general. 
                    <br/><br/>
                    The colors were also chosen for their contrast against the structural elements, aiding in drawing the user’s eyes to things like CTAs and other interactive elements. </div>
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Testing + Improvements"
                sectionSubtitleTxt="When you really want great design, you will find it waiting for you—after many revisions."
                topParagraphHTML={<div className={`bodyText`}>To create the optimal product, it's crucial to actively listen to, and prioritize user feedback.<span className={`emphasis`}> Throughout the design process, I made strategic updates </span>based on this input to maximize the product's impact. Below are some key improvements made during these iterations.</div>}
            />

            {/* Before and After: Primary CTA Button */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                    Primary CTA Button
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> The large saturated commit button, which was the main CTA for the changes screne, was actually drawing too much focus it reached the level of distracting. </>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={beforeContrast}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>I made the CTA smaller. This allowed for a balance to be struck. The eye was still drawn to the primary CTA without it being overly distracting.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={statsInWords}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            
            {/* Before and After: Streamling the tree design*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                Streamling the tree design
                </div>
            </div>

            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> I included a graphical representation of the tree branches of all the forks for a given repository, available in the commit history screen.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> Based on user feedback, I learned that much the info portrayed in the tree was ignored. Therefore, I represented the remaining relevent data in a more simplified sleek mannor instead.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsAFter}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>


            {/* Before and After: Clean it up */}
                        <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                color Refinement
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The colors in light mode were too saturated and distracting.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={transcriptBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> I brightened up the colors which better reflected my themes of sleekness and approachability.</>}  icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The code background was the same color as the commit panel background. But the UI felt muddled overall.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={transcriptBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> I landed on a brighter look that made the app feel sharper on the whole.</>}  icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>


            {boarder}

            <SectionTopper
                sectionTitletxt="Final Design"
                sectionSubtitleTxt="Complexity hidden under the hood."
                topParagraphHTML={<div className={`bodyText`}><span className={`emphasis`}></span>Comet is powerful enough to handle all the necessary git capabilities, but simple enough that people new to git will find it approachable, manageable and easy to learn.</div>}
            />
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Major Screens
                </div>
            </div>

            {/* 5 major screens */}
            <Card
                p1= {<div><span className={`emphasis`}>Something– </span> Something Something Something. Something Something Something. Something Something Something. Something Something Something.</div> }
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={landingPage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Something–</span>  Something Something Something. Something Something Something. Something Something Something. Something Something Something.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data2}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data3}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} `}>
                    <Image
                        src={data4}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Something–</span>  Something Something Something. Something Something Something. Something Something Something. Something Something Something.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={heyConvo}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Something–</span> Something Something Something.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={webpage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Something–</span> Something Something Something. Something Something Something.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={speakerView}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>                    


                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Something–</span> Something Something Something. Something Something. </div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    {/* <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} /> */}

                    <video controls autoplay loop muted width="100%" height="auto">
                        <source src="/video/SignUpFlow.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
                <div className={styles.sectionSubheading}>
                    Style guide
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                something<span class="emphasis"> something</span> Somthing.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={styleTyleMain}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
        
            {boarder}

            <SectionTopper
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="Mirror, Mirror, on the wall."
                topParagraphHTML={<div className={`bodyText`}>As I reflect on the journey of designing Comet, several key insights stand out that not only shaped the development of this tool but also deepened my appreciation for the intersection of user experience and functional design. Here are my main takeaways from this process, which highlight both the<span className={`emphasis`}> achievements and future opportunities for Comet.</span></div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Take-aways
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                {/* insert numbered list here */}
                        <NumberedList takeaways={takeaways}>
                        </NumberedList>
                </div>
            </div>

            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                But this is just the beginning of my story. <span className={`${styles.whiteTxt}`}>Check out some of my other chapters. :) </span>
                </div>
            </Card>

            <BackButton />

        </div>
    );
};