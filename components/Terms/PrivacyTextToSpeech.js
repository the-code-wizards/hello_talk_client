import React from "react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import { useSpeechSynthesis } from "react-speech-kit";
const TermTextToSpeech = () => {
  const text =
    "Privacy Policy\n" +
    "1. General\n" +
    "At Duolingo, we care about your personal data, so we have prepared this Privacy Policy to explain how we collect, use and share it.\n" +
    "This Privacy Policy (“Privacy Policy”) details the personal data Duolingo, Inc. (“Duolingo”, “we”, “us” or “our”) receives about you, how we process it and your rights and obligations in relation to your personal data. Duolingo, Inc., a company registered at 5900 Penn Ave, Second Floor, Pittsburgh, PA 15206, United States of America is the data controller for the purposes of the General Data Protection Regulation (“GDPR”) and any relevant local legislation (“Data Protection Laws”).\n" +
    "\n" +
    "By using or accessing the Service, you agree to the terms of this Privacy Policy. Capitalized terms not defined here have the meanings set forth in the terms and conditions (the “Terms and Conditions”), located at www.duolingo.com/terms. We may update our Privacy Policy to reflect changes to our information practices. If we do this and the changes are material, we will post a notice that we have made changes to this Privacy Policy on the Website for at least 7 days before the changes are made, and we will indicate the date these terms were last revised at the bottom of the Privacy Policy. Any revisions to this Privacy Policy will become effective at the end of that 7 day period.\n" +
    "\n" +
    "If you are an employee, worker or contractor of Duolingo, the information about how we handle your personal information is available in the Duolingo internal knowledge base. With respect to employees based in Europe, we are committed to cooperating with European data protection authorities (DPAs) and comply with the advice given by such authorities with regard to human resources data transferred from Europe in the context of the employment relationship.\n" +
    "\n" +
    "2. Registration; Submission of Content\n" +
    "This Privacy Policy explains how we collect, use and share your personal data.\n" +
    "\n" +
    "Information you provide\n" +
    "Through the registration process, you will provide us with your name, e-mail address (or parent’s e-mail address), and age or date of birth. You will also provide us with your payment transaction information if you choose to pay for Duolingo services.\n" +
    "\n" +
    "Activity Data\n" +
    "When you use the Service, you will submit information and content to your profile. We will also generate data about your use of our Services including your engagement in educational activities on the Service, or your sending of messages and otherwise transmitting information to other users (“Activity Data”). We also collect technical data about how you interact with our Services; for more information, see Cookies.\n" +
    "\n" +
    "When you use Duolingo in our app or on our website, we use a service named FullStory to log your activity. This provides us with a set of data and a session replay of your activity on Duolingo in the form of a video. FullSory captures and analyzes your usage data to help us make your Duolingo experience better.\n" +
    "\n" +
    "We only collect the data we need which means we don’t record:\n" +
    "Usernames\n" +
    "Names\n" +
    "Profile Images\n" +
    "Email addresses\n" +
    "Locations or bios on the Profile page\n" +
    "Passwords\n" +
    "We do record the following data:\n" +
    "Usage Patterns\n" +
    "Clicks\n" +
    "Mouse movements\n" +
    "Scrolling\n" +
    "Typing\n" +
    "Tech Specs\n" +
    "Browser\n" +
    "Device type\n" +
    "Operating system\n" +
    "Viewfinder size\n" +
    "Script errors\n" +
    "IP address\n" +
    "Navigation\n" +
    "Pages visited\n" +
    "Referrers\n" +
    "URL parameters\n" +
    "Session duration\n" +
    "Learning Activity\n" +
    "Session progress\n" +
    "Answers\n" +
    "You can disable FullStory activity recording by using the opt-out function on FullStory’s website here.\n" +
    "\n" +
    "Messaging a Tutor\n" +
    "You may have the option of messaging a tutor directly through Duolingo with a feature called Duolingo Tutors. In this case, you may opt into sending text, audio, image, or video files to this tutor and sharing personal data about yourself. Duolingo stores these messages and files for you until you close your Duolingo account. Duolingo uses this data to help improve the quality of your interactions with Duolingo Tutors and for internal research purposes.\n" +
    "\n" +
    "By default Duolingo will only share your username, profile image, and recent Duolingo activity with your tutor. This includes learning details such as what lessons you completed and any recent mistakes. Your tutor will not be able to see other Duolingo profile information, such as your name, email address or phone number, but during your interactions you can freely choose to tell them any personal details you wish to share\n" +
    "\n" +
    "Speaking Challenges\n" +
    "Some lessons involve you speaking into the app. To recognize speech your audio may be sent to a third party provider such as Google, Apple, or Amazon Web Services. We may ask you to allow Duolingo to collect and analyze your speech data to help us understand the effectiveness of our lessons, and to improve the product. If you choose not to share your audio with us, or if we haven’t asked you yet, then your audio will not be used in this way. Any audio you agree to send to Duolingo is anonymized when it reaches our servers to ensure that no trace of your personal data remains attached to the audio.\n" +
    "\n" +
    "Test Data\n" +
    "If you register for the Duolingo English Test, you will also provide us with your gender, native language, secondary school, and self-reported test scores for other exams. Each time you take a test you must also provide a photo of a current, valid driver’s license, passport, or other government issued ID and take a photo of your face to verify your identity (“Testing ID”).\n" +
    "\n" +
    "When you use the Service to take an examination in the Duolingo English Test you must provide access to your computer’s webcam and microphone. We will use them to record you and your screen during the entire examination period (“Testing Video”). From the collected data, Duolingo and/or its trusted third-parties may extract biometric signals for the use of identity verification. While using the Duolingo English Test, you will submit answers to questions and other information as part of the testing and evaluation process.\n" +
    "\n" +
    "The testing software will be installed onto your computer. During the test, the testing software will monitor if additional applications or processes are running on your computer, but will not open any applications or individual files. Please close any other applications by exiting from them completely prior to starting the test.\n" +
    "\n" +
    "Additionally, Duolingo will be able to note if any peripherals are used during the test (i.e. external devices attached to your computer), but will not have any control or access to these peripherals. Please remove these before testing if you do not wish to have their presence known.\n" +
    "\n" +
    "Duolingo will not open network packets, but will have access to network usage statistics and the volume of network traffic.\n" +
    "\n" +
    "Third Party Data\n" +
    "We also collect information about you from third parties. For more information, see Information obtained by Third Parties.\n" +
    "\n" +
    "Product Research and Development\n" +
    "We may contact you to participate in product research activities. These may include surveys, interviews, and other types of feedback sessions. When you participate in these research activities, the information you provide will be used to test, improve, and develop our products. We will record the video, audio and text transcriptions of this feedback together with any additional contact information you provide and will retain this data for two years.\n" +
    "\n" +
    "Please contact us at research@duolingo.com to:\n" +
    "\n" +
    "Request more information about the research activities you have volunteered for.\n" +
    "Opt out of being contacted for research activities.\n" +
    "Request a copy of any research related data you have provided to us.\n" +
    "Contact Sync Feature\n" +
    "If you choose to use the Contacts Sync feature of Duolingo you must first give your device permission to allow the Duolingo app access to the contacts stored on your device. The app then requires you to provide your phone number. This is so that Duolingo can verify that this number does belong to you. Once you provide your number, a text message is sent to you containing a one time password (OTP) six digit code. You can choose to let the app read your verification text message or you can input it manually to verify your number. This phone number is stored in your Duolingo user profile.\n" +
    "\n" +
    "With your permission, we upload your list of contact phone numbers and using encryption we store a “hashed” version of the contact phone numbers. This hash is an alternative code to the actual phone number and can be used only by Duolingo to uniquely identify the number. It’s a bit like a fingerprint. This hashing process securely strips away the real phone number which means that we don’t store any of your contacts’ phone numbers and so we cannot use them to contact individuals or share them with anyone else.\n" +
    "\n" +
    "We then try to match your contacts’ hashes with the hashed phone numbers that other Duolingo learners have chosen to upload to use using the Contacts Sync feature. If we find a match we will recommend that learner as someone you may wish to follow.\n" +
    "\n" +
    "If you turn off the Contacts Sync feature, the hashed contacts you have chosen to upload, along with your hashed phone number are automatically deleted from your account after 30 days.\n" +
    "\n" +
    "3.Cookies\n" +
    "When you enter the Website, we collect your browser type and your IP address (a unique address that identifies your computer on the Internet). When you use our mobile Application, we collect your device type, your device ID, and your IP address.\n" +
    "\n" +
    "In addition, we store certain information from your browser using cookies A cookie is a piece of data stored on the users computer tied to information about the user. We use session ID cookies to confirm that users are logged in. If you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to deny or accept the cookie feature; however, you should note that cookies may be necessary to provide you certain features available on the Website (e.g., customized delivery of information).\n" +
    "\n" +
    "You can find more information about cookies and how to manage them at http://www.allaboutcookies.org.\n" +
    "\n" +
    "You can see a list of all cookies used at Duolingo on our Cookie List page or manage your cookies in the Privacy Preference Center.\n" +
    "\n" +
    "4.Information Obtained by Third Parties\n" +
    "To support and enhance the Service, we work with a variety of third party advertising networks, marketing analytics service providers and website analysis firms, such as Google, Facebook, Oath, and Unity (collectively, “Third Party Advertising Service Providers”). These Third Party Advertising Service Providers collect and use personal data about your visits to and use of the Website and mobile Application, as well as other websites in order to serve you with advertisements and content tailored to meet your preferences and likely interests or better understand ad effectiveness. Aggregate demographic and interest data will also be used for market research purposes.\n" +
    "\n" +
    "We use Google Analytics which is a web analytics tool that helps us understand how users engage with the Website. Like many services, Google Analytics uses first-party cookies to track user interactions as in our case, where they are used to collect information about how users use our site. This information is used to compile reports and to help us improve our Website. The reports disclose website trends without identifying individual visitors. You can opt out of Google Analytics without affecting how you visit our site – for more information on opting out of being tracked by Google Analytics across all websites you use, visit this Google page: https://tools.google.com/dlpage/gaoptout.\n" +
    "\n" +
    "You can opt-out of receiving personalized ads from advertisers and ad networks that are members of the Network Advertising Initiative (“NAI”) or who follow the DAA Self-Regulatory Principles for Online Behavioral Advertising using their respective opt-out tools. The NAIs opt-out tool can be found here http://www.networkadvertising.org/choices/ and the DAAs opt out tool can be found here http://www.aboutads.info/choices/.\n" +
    "\n" +
    "In addition, your mobile devices may offer settings that enable you to make choices about the collection, use, or transfer of mobile app information for online behavioral advertising (for example, Apple iOS’ Advertising ID and Google Android’s Advertising ID). Please note that opting out does not prevent the display of all advertisements to you.\n" +
    "\n" +
    "5. Use of information obtained by Duolingo\n" +
    "Duolingo may occasionally send you service related and product change announcements through the general operation of the Service. We will send you reminder notifications to support the Duolingo teaching methodology by reinforcing the learning cadence and help maintain your learning streak. We process your data to help provide you with the Service and offer personalized features, to understand and improve our Service and to keep our Service safe and secure.\n" +
    "\n" +
    "Duolingo may use or share anonymous data collected through the Service, including Activity Data without limitation. As a business, it is critical that we perform our contract with you with the best service possible, and it is in our legitimate interests to perform these processing functions and to enable service e-mails by default to keep your data secure and provide our Service. You may opt out of any non-essential service e-mails at any time.\n" +
    "\n" +
    "We may also use your contact information to send you notifications regarding new services, offers and promotions offered by Duolingo if you affirmatively consent to receive such communications.\n" +
    "\n" +
    "When you register with Duolingo, some of your information is made public and available at various locations including duolingo.com/profile/your-username and duolingo.com/users/your-username. This will include the data from your Duolingo Profile and Account (Name, Location, Bio, Username, User ID, Profile picture and Duolingo Plus membership status); your followers and the people you follow; and your learning progress (XP, Streak, Lingots, Daily Progress, Languages being learned, progress level, Crowns, Skills, Lessons undertaken, Lexemes and Strength). Tinycards decks you create are also public by default, but can be made visible to only you or to people you have shared a link with. Your Duolingo account email address is not shown publicly. Third party websites may be able to read, collect and use your public information for their own purposes.\n" +
    "\n" +
    "Profile information is used by Duolingo to be presented back to and edited by you when you access the Service and to be presented to other users. In some cases, other users may be able to supplement your profile, including by submitting comments (which can be deleted by you). Duolingo uses this information to provide you with support, to send you essential notifications, to enforce our terms, conditions and policies, to communicate with you, to administer the Services, and for internal operations, including troubleshooting, data analysis, testing, research, statistical, and survey purposes. Duolingo’s Terms and Conditions provide the contractual lawful basis for these processing activities.\n" +
    "\n" +
    "Duolingo English Test\n" +
    "When you take a test in the Duolingo English Test, we will use your computers camera and microphone throughout the test to collect a Testing Video.\n" +
    "\n" +
    "We will process information in connection with the Duolingo English Test comprising given name(s), surname(s), date of birth, gender, native language, country, secondary school, self-reported test scores for other exams, application IDs, a picture or scan of a current, valid driver’s license, passport or other government issued ID, your Testing ID, Testing Video, biometric signals extracted from collected data, data about active software processes, information on connected external peripherals, and volume of network traffic, and answers to questions as part of the testing and evaluation process in order:\n" +
    "\n" +
    "To provide accurate testing results to Score Recipient(s) (as defined below)\n" +
    "To compare your Testing ID to your Testing Video to ensure that the person who registered for the examination (and whose identity Duolingo has validated) is the same person who took the examination. In addition, this comparison may be carried out on biometric signals that have been extracted from collected data.\n" +
    "To store and review the Testing Video recording, the active software processes and the volume of network traffic to validate that you took the examination without improper assistance\n" +
    "To evaluate your performance on the Duolingo English Test, to report results and to evaluate the usefulness, accuracy and other aspects of the Duolingo English Test\n" +
    "For our research team to validate and improve the examination, in an anonymized format\n" +
    "To analyze audio recordings of verbal responses to improve our ability to understand the spoken language\n" +
    "To share your Testing ID with your consent upon initiation of a dispute by a Score Recipient\n" +
    "Duolingo’s Terms and Conditions provide the contractual lawful basis for these English Test processing activities.\n" +
    "\n" +
    "Duolingo ABC\n" +
    "Duolingo ABC is separate from the Duolingo Language app and does not share any account information between the two. The Duolingo ABC app is designed to be set up by parents and will ask you to provide your child’s age. This information is kept anonymously for research purposes and not tied to your personal data in any way. You can then choose to enable speaking exercises. Speech data is stored on your phone and uses Apple’s speech recognition service to convert your voice into text. No speech data is shared with Duolingo. As a parent you also have the option of providing your email address so that Duolingo may send you information about product updates and to ask you about participating in product research. If you do provide your email address you can unsubscribe any time by emailing literacy-feedback@duolingo.com or by clicking the unsubscribe link in any Duolingo ABC emails. Your Duolingo ABC data is backed up into Apple’s iCloud which allows you to synchronize and restore the data onto another Apple device.\n" +
    "\n" +
    "Duolingo Math\n" +
    "Duolingo Math is a separate app to the Duolingo Language app, and is intended for use by both children and adults. When you first open the app, you will have the option to (1) log in with an existing Duolingo account, or (2) start using the app immediately without an account. Logging in with your Duolingo account means you will share a single account across both apps.\n" +
    "\n" +
    "Next, you will need to provide your age -- this helps us recommend the appropriate level of math content. You can then choose to continue with our recommended course, or switch to another course. You are able to switch courses using the Profile button in the app after your account is set up. Next, you can choose to enable practice reminder notifications. You are able to change your notification preferences in your device’s native Settings page.\n" +
    "\n" +
    "If you did not log in with an existing Duolingo account, you will be prompted to create an account after you complete a few lessons in the app. If you’re under 13, we will ask you to provide a parent’s email address, plus a username and password. If you’re 13 or older, we will ask you to provide your own email address, name, username, and password.\n" +
    "\n" +
    "Your Duolingo Math progress data is stored on your phone. Deleting the Duolingo Math app will delete your progress. Duolingo Math uses Google ML Kit for handwriting recognition in writing exercises in the app. Handwriting recognition happens entirely on your device, and none of this information is sent to external servers. Writing exercises can be disabled in the Profile section of the app.\n" +
    "\n" +
    "6. Sharing your personal data with third parties\n" +
    "Duolingo shares your personal data only when it is necessary to offer the Service, legally required, or permitted by you.\n" +
    "\n" +
    "We will provide personal data to hosting providers such as Amazon Web Services, search engine providers such as Google, analytics providers such as Crashlytics, and support providers such as ZenDesk.\n" +
    "\n" +
    "These data processors help us bring you the Service. For example, we may share your information in order to detect where or how you encountered a bug when using our mobile application. In connection with these operations, our service providers will have access to personal data for a limited time. When we utilize service providers for processing any personal data, we implement contractual protections limiting the use of that personal data to the provision of services to Duolingo.\n" +
    "\n" +
    "We will be required to access and disclose personal data in response to lawful requests, such as subpoenas or court orders, or in compliance with applicable laws. Additionally, we will access and share account or other personal data when we believe it is necessary to comply with law, to protect our interests or property, to prevent fraud or other illegal activity perpetrated through the Service or using the Duolingo name, or to prevent imminent harm. This will include accessing and sharing personal data with other companies, lawyers, agents or government agencies.\n" +
    "\n" +
    "Duolingo will share the complete and accurate results of Duolingo English Tests with such institutions, including universities, potential employers, or other third parties, (collectively, “Score Recipients”) as specified when you send your results after finishing a test or when you apply a coupon sponsored by the Score Recipient before starting a test. These results will include your test score, a video of the interview section of your test, and your written responses to certain parts of the test. We will also share your full name, date of birth, e-mail address, and the photo you take of yourself. We will never share examination results with any party without your approval, except that anonymized examination results will be used by Duolingo and its partners to improve the examination and for research and analysis. We will not share your Testing ID with any Score Recipients, except with your consent upon initiation of a dispute by a Score Recipient.\n" +
    "\n" +
    "If the ownership of all or substantially all of the Duolingo business, or individual business units or assets owned by Duolingo that are related to the Service, were to change, your personal data will be transferred to the new owner. In any such transfer of information, your personal data would remain subject to this section.\n" +
    "\n" +
    "Duolingo will share aggregate or anonymous data collected through the Service, including Activity Data, for purposes such as understanding or improving the service.\n" +
    "\n" +
    "7. Data subject rights and data retention\n" +
    "You can manage your account settings at https://www.duolingo.com/settings/account to update, amend, and correct your information.\n" +
    "\n" +
    "You also have the following rights in relation to the personal data we hold about you, unless provided otherwise by local law:\n" +
    "\n" +
    "To request access to, or erasure of, the personal data we hold about you.\n" +
    "To request us to restrict the processing of the personal data we hold about you.\n" +
    "To object to us processing personal data relating to you.\n" +
    "Where you have given us consent to process your personal data, you have the right to withdraw that consent at any time.\n" +
    "To export the personal data you have provided to Duolingo in a format that can be transferred electronically to a third party.\n" +
    "To delete your account with Duolingo by following the instructions available through the Service.\n" +
    "Duolingo will retain your data until your account is deleted, after which point we will retain anonymous data collected through the Service, including Activity Data, which may be used by Duolingo and shared with third parties in any manner. Information associated with the Duolingo English Test, including examination results and your Testing Video, will be collectively deleted from your Duolingo account after five years have passed from the date you upload your test, but anonymized examination data, including your examination results and Testing Video, will be kept indefinitely by Duolingo to improve the examination and for research and analysis.\n" +
    "\n" +
    "Please note that some of these rights are not absolute. In some cases, we may refuse a request to exercise particular rights if complying with it meant that we are no longer able to meet our contractual obligation to provide you with particular products and services. We will keep you informed as to the actions that we can take when you make your request.\n" +
    "\n" +
    "You may also have the right to make a GDPR complaint to the relevant Supervisory Authority. A list of EEA Supervisory Authorities is available here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm and the UK here: https://ico.org.uk/global/contact-us/ . If you need further assistance regarding your rights, please contact us using the contact information provided below and we will consider your request in accordance with applicable law. In some cases our ability to uphold these rights for you may depend upon our obligations to process personal information for security, safety, fraud prevention reasons, compliance with regulatory or legal requirements, or because processing is necessary to deliver the services you have requested. Where this is the case, we will inform you of specific details in response to your request.\n" +
    "\n" +
    "8. Third party websites and links\n" +
    "Please note that you may have cookies placed on your computer by third party websites that refer you to our Service. Although we do not share your personal data with these third party websites unless it is reasonably necessary to offer the Service, they may be able to link certain non-personally identifiable information we transfer to them with personal data they previously collected from you. Please review the privacy policies of each website you visit to better understand their privacy practices. In addition, Duolingo would like to inform you that anytime you click on links (including advertising banners), which take you to third party websites, you will be subject to the third parties’ privacy policies.\n" +
    "\n" +
    "Our Services contain links to other sites operated by third parties. Duolingo does not control such other sites and is not responsible for their content, their privacy policies, or their use of personal data, including any personal or financial information collected by our third party payment processor to process payments for in-app purchases. Duolingo’s inclusion of such links does not imply any endorsement of the content on such sites or of their owners or operators except as disclosed on the Services. Any information submitted by you directly to these third parties is subject to that third party’s privacy policy.\n" +
    "\n" +
    "9. California privacy rights\n" +
    "Residents of California have the right to:\n" +
    "\n" +
    "Know what personal information we collect about you and from where we collect it.\n" +
    "Access a copy of the personal information we hold about you.\n" +
    "Understand how we process your personal information and how it may be shared.\n" +
    "Opt out of having your personal information shared with certain third parties.\n" +
    "Request we delete your Duolingo account and personal information.\n" +
    "To make such a request, please send an email to privacy@duolingo.com\n" +
    "\n" +
    "10. Children under age of digital consent\n" +
    "We know that children deserve extra privacy protection. That’s why we treat child users differently to ensure their parents are in control and we only collect the bare minimum information we need to make Duolingo work.\n" +
    "\n" +
    "When a user creates a Duolingo account we collect their age and compare it to the local standard of child online consent depending on the country they registered in. We refer to users under this age as “child users”. Child users are permitted to create a user account but we ask them to provide their parent’s email address instead of their own. We also prevent child users from supplying their own name because we don’t need that information.\n" +
    "\n" +
    "After registration we will send an email notifying the parent about Duolingo’s privacy and information practices regarding child users, including what personal data we collect and how we use, share, and protect that personal data. The email also explains how parents can request that Duolingo access, change or delete the personal data about their child.\n" +
    "\n" +
    "Child users receive the following special treatment:\n" +
    "Lessons are made age appropriate by removing mature words like “beer” or “wine”.\n" +
    "Advertisements are set to family safe content.\n" +
    "The Profile page is hidden, preventing the child from stating their name, location or bio.\n" +
    "Uploading an avatar photo is disabled.\n" +
    "Promotional emails are disabled.\n" +
    "Leaderboards are disabled.\n" +
    "Discussion forums are disabled.\n" +
    "The child’s profile is made private and hidden from other users’ searches.\n" +
    "Other users are unable to follow the child.\n" +
    "The ability to follow other users or search for other users is disabled.\n" +
    "The ability to send an invitation email is disabled.\n" +
    "Finding friends on Facebook is disabled.\n" +
    "Social logins with Facebook, Google or Apple are disabled.\n" +
    "Social follow buttons for Twitter, Facebook and Instagram are disabled.\n" +
    "In addition, all users under the age of 16 receive the following special treatment:\n" +
    "Advertisements are set to non-personalised.\n" +
    "Third party behavioral tracking is disabled.\n" +
    "Third party analytics is disabled.\n" +
    "To prevent restricted users from amending these features, the settings will be hidden or grayed out. In the future, once we’re sure the user is old enough we will automatically remove the restrictions, reset the settings to their defaults and make the settings visible for them to configure how they choose.\n" +
    "\n" +
    "With regards to the Childrens Online Privacy Protection Rule (COPPA), Duolingo only collects personal information from children under the age of 13 for the sole purpose of performing internal operations of the Service. If we discover that we have unknowingly collected additional personal information from these children we will delete it. If you believe this to be the case, please contact us at privacy@duolingo.com.\n" +
    "\n" +
    "11. Links\n" +
    "The Service may contain links to other websites. We are not responsible for the privacy practices of other websites. We encourage users to be aware when they leave the Service to read the privacy statements of other websites that collect personally identifiable information. This Privacy Policy applies only to information collected by Duolingo via the Service.\n" +
    "\n" +
    "12. Information security\n" +
    "Duolingo has implemented administrative and technical safeguards it believes are appropriate to protect the confidentiality, integrity and availability of your personal data, Testing ID, User Photo, access credentials, and Duolingo English Test results. However, given sufficient resources, a determined attacker could defeat those safeguards and may, as a result, gain access to the data we seek to protect.\n" +
    "\n" +
    "13. Do Not Track\n" +
    "The Service is not designed to respond to “do not track” signals sent by some browsers.\n" +
    "\n" +
    "14. Contact Us\n" +
    "Duolingo’s headquarters are located within the USA at:\n" +
    "Duolingo, Inc.\n" +
    "5900 Penn Ave, Second Floor\n" +
    "Pittsburgh, PA 15206\n" +
    "United States of America\n" +
    "Phone: +1-412-567-6602\n" +
    "Duolingo, Inc. is a registered Data Controller with the UK Information Commissioners Office (ICO), number ZA294891, at the address:\n" +
    "Duolingo, Inc.\n" +
    "85 Great Portland Street\n" +
    "London\n" +
    "W1W 7LT\n" +
    "United Kingdom\n" +
    "For all data privacy inquiries and any questions or concerns you have about this Privacy Policy, please contact our Data Protection Officer at privacy@duolingo.com\n" +
    "\n" +
    "For all support inquiries, please go to https://support.duolingo.com.\n" +
    "\n" +
    "Last revised on October 24th, 2022";
  const { speaking, speak, stop } = useSpeechSynthesis();
  return (
    <div>
      {speaking ? (
        <FaStopCircle onClick={stop} />
      ) : (
        <FaPlayCircle onClick={() => speak({ text })} />
      )}
    </div>
  );
};

export default PrivacyTextToSpeech;
