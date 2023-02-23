import React from "react";
import Link from "next/link";
import Navbar from "../../components/Shared/Navbar/Navbar";
const index = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar></Navbar>
      <section className="mx-12">
        <h2 className="text-center text-4xl font-bold my-24">Privacy Policy</h2>
        <section className="text-justify">
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              1. <strong className="font-semibold">General</strong>
            </h3>
            <h3 className="text-2xl text-gray-500 my-5 pl-5">
              At HelloTalk, we care about your personal data, so we have
              prepared this Privacy Policy to explain how we collect, use and
              share it.
            </h3>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              This Privacy Policy (“<b>Privacy Policy</b>”) details the personal
              data HelloTalk, Inc. (“<b>HelloTalk”, “we”, “us” or “our</b>”)
              receives about you, how we process it and your rights and
              obligations in relation to your personal data. HelloTalk, Inc., a
              company registered at 5900 Penn Ave, Second Floor, Pittsburgh, PA
              15206, United States of America is the data controller for the
              purposes of the General Data Protection Regulation (“<b>GDPR</b>”)
              and any relevant local legislation (“<b>Data Protection Laws</b>
              ”).
            </p>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              By using or accessing the Service, you agree to the terms of this
              Privacy Policy. Capitalized terms not defined here have the
              meanings set forth in the terms and conditions (the{" "}
              <b>“Terms and Conditions”</b>), located at{" "}
              <Link href="#">
                {" "}
                <u>www.HelloTalk.com/terms</u>
              </Link>
              . We may update our Privacy Policy to reflect changes to our
              information practices. If we do this and the changes are material,
              we will post a notice that we have made changes to this Privacy
              Policy on the Website for at least 7 days before the changes are
              made, and we will indicate the date these terms were last revised
              at the bottom of the Privacy Policy. Any revisions to this Privacy
              Policy will become effective at the end of that 7 day period.
            </p>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              If you are an employee, worker or contractor of HelloTalk, the
              information about how we handle your personal information is
              available in the HelloTalk internal knowledge base. With respect
              to employees based in Europe, we are committed to cooperating with
              European data protection authorities (DPAs) and comply with the
              advice given by such authorities with regard to human resources
              data transferred from Europe in the context of the employment
              relationship.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              2.{" "}
              <strong className="font-semibold">
                Registration; Submission of Content
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 pl-5">
              <p className="py-5">
                This Privacy Policy explains how we collect, use and share your
                personal data.
              </p>
              <small>
                <i>
                  <u>Information you provide</u>
                </i>
              </small>
              <p className="py-5">
                Through the registration process, you will provide us with your
                name, e-mail address (or parent’s e-mail address), and age or
                date of birth. You will also provide us with your payment
                transaction information if you choose to pay for HelloTalk
                services.
              </p>
              <small>
                <i>
                  <u>Activity Data</u>
                </i>
              </small>
              <p className="py-5">
                When you use the Service, you will submit information and
                content to your profile. We will also generate data about your
                use of our Services including your engagement in educational
                activities on the Service, or your sending of messages and
                otherwise transmitting information to other users (“
                <b>Activity Data</b>”). We also collect technical data about how
                you interact with our Services; for more information, see{" "}
                <Link href="#">
                  {" "}
                  <u>Cookies</u>
                </Link>
                .
              </p>
              <p className="py-5">
                When you use HelloTalk in our app or on our website, we use a
                service named FullStory to log your activity. This provides us
                with a set of data and a session replay of your activity on
                HelloTalk in the form of a video. FullSory captures and analyzes
                your usage data to help us make your HelloTalk experience
                better.
              </p>
              <h3 className="py-5">
                We only collect the data we need which means we don’t record:
              </h3>
              <div className="pl-5">
                <li>Usernames</li>
                <li>Names</li>
                <li>Profile Images</li>
                <li>Email addresses</li>
                <li>Locations or bios on the Profile page</li>
                <li>Passwords</li>
              </div>
              <h3 className="py-5">We do record the following data:</h3>
              <h3>
                <b>Usage Patterns</b>
              </h3>
              <div className="pl-5">
                <li>Clicks</li>
                <li>Mouse movements</li>
                <li>Scrolling</li>
                <li>Typing</li>
              </div>
              <h3 className="py-5">
                <b>Tech Specs</b>
              </h3>
              <div className="pl-5">
                <li>Browser</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Viewfinder size</li>
                <li>Script errors</li>
                <li>IP address</li>
              </div>
              <h3 className="py-5">
                <b>Navigation</b>
              </h3>
              <div className="pl-5">
                <li>Pages visited</li>
                <li>Referrers</li>
                <li>URL parameters</li>
                <li>Session duration</li>
              </div>
              <h3 className="py-5">
                <b>Learning Activity</b>
              </h3>
              <div className="pl-5">
                <li>Session progress</li>
                <li>Answers</li>
              </div>
              <p className="py-5">
                You can disable FullStory activity recording by using the
                opt-out function on FullStory’s website here.
              </p>
              <small>
                <i>
                  <u>Messaging a Tutor</u>
                </i>
              </small>
              <p className="py-5">
                You may have the option of messaging a tutor directly through
                HelloTalk with a feature called HelloTalk Tutors. In this case,
                you may opt into sending text, audio, image, or video files to
                this tutor and sharing personal data about yourself. HelloTalk
                stores these messages and files for you until you close your
                HelloTalk account. HelloTalk uses this data to help improve the
                quality of your interactions with HelloTalk Tutors and for
                internal research purposes.
              </p>
              <p className="py-5">
                By default HelloTalk will only share your username, profile
                image, and recent HelloTalk activity with your tutor. This
                includes learning details such as what lessons you completed and
                any recent mistakes. Your tutor will not be able to see other
                HelloTalk profile information, such as your name, email address
                or phone number, but during your interactions you can freely
                choose to tell them any personal details you wish to share
              </p>
              <small>
                <i>
                  <u>Speaking Challenges</u>
                </i>
              </small>
              <p className="py-5">
                Some lessons involve you speaking into the app. To recognize
                speech your audio may be sent to a third party provider such as
                Google, Apple, or Amazon Web Services. We may ask you to allow
                HelloTalk to collect and analyze your speech data to help us
                understand the effectiveness of our lessons, and to improve the
                product. If you choose not to share your audio with us, or if we
                haven’t asked you yet, then your audio will not be used in this
                way. Any audio you agree to send to HelloTalk is anonymized when
                it reaches our servers to ensure that no trace of your personal
                data remains attached to the audio.
              </p>
              <small>
                <i>
                  <u>Test Data</u>
                </i>
              </small>
              <p className="py-5">
                If you register for the HelloTalk English Test, you will also
                provide us with your gender, native language, secondary school,
                and self-reported test scores for other exams. Each time you
                take a test you must also provide a photo of a current, valid
                driver’s license, passport, or other government issued ID and
                take a photo of your face to verify your identity (“
                <b>Testing ID</b>”).
              </p>
              <p className="py-5">
                When you use the Service to take an examination in the HelloTalk
                English Test you must provide access to your computer’s webcam
                and microphone. We will use them to record you and your screen
                during the entire examination period (“<b>Testing Video</b>”).
                From the collected data, HelloTalk and/or its trusted
                third-parties may extract biometric signals for the use of
                identity verification. While using the HelloTalk English Test,
                you will submit answers to questions and other information as
                part of the testing and evaluation process.
              </p>
              <p className="py-5">
                The testing software will be installed onto your computer.
                During the test, the testing software will monitor if additional
                applications or processes are running on your computer, but will
                not open any applications or individual files. Please close any
                other applications by exiting from them completely prior to
                starting the test.
              </p>
              <p className="py-5">
                Additionally, HelloTalk will be able to note if any peripherals
                are used during the test (i.e. external devices attached to your
                computer), but will not have any control or access to these
                peripherals. Please remove these before testing if you do not
                wish to have their presence known.
              </p>
              <p className="py-5">
                HelloTalk will not open network packets, but will have access to
                network usage statistics and the volume of network traffic.
              </p>
              <small>
                <i>
                  <u>Third Party Data</u>
                </i>
              </small>
              <p className="py-5">
                We also collect information about you from third parties. For
                more information, see{" "}
                <Link href="#">
                  {" "}
                  <u>Information obtained by Third Parties</u>
                </Link>
                .
              </p>
              <small>
                <i>
                  <u>Product Research and Development</u>
                </i>
              </small>
              <p className="py-5">
                We may contact you to participate in product research
                activities. These may include surveys, interviews, and other
                types of feedback sessions. When you participate in these
                research activities, the information you provide will be used to
                test, improve, and develop our products. We will record the
                video, audio and text transcriptions of this feedback together
                with any additional contact information you provide and will
                retain this data for two years.
              </p>
              <p className="py-5">
                Please contact us at
                <Link href="#">
                  {" "}
                  <u>research@HelloTalk.com</u>
                </Link>{" "}
                to:{" "}
              </p>
              <div className="pl-5">
                <li>
                  Request more information about the research activities you
                  have volunteered for.
                </li>
                <li>Opt out of being contacted for research activities.</li>
                <li>
                  Request a copy of any research related data you have provided
                  to us.
                </li>
              </div>
              <small>
                <i>
                  <u>Contact Sync Feature</u>
                </i>
              </small>
              <p className="py-5">
                If you choose to use the Contacts Sync feature of HelloTalk you
                must first give your device permission to allow the HelloTalk
                app access to the contacts stored on your device. The app then
                requires you to provide your phone number. This is so that
                HelloTalk can verify that this number does belong to you. Once
                you provide your number, a text message is sent to you
                containing a one time password (OTP) six digit code. You can
                choose to let the app read your verification text message or you
                can input it manually to verify your number. This phone number
                is stored in your HelloTalk user profile.
              </p>
              <p className="py-5">
                With your permission, we upload your list of contact phone
                numbers and using encryption we store a “hashed” version of the
                contact phone numbers. This hash is an alternative code to the
                actual phone number and can be used only by HelloTalk to
                uniquely identify the number. It’s a bit like a fingerprint.
                This hashing process securely strips away the real phone number
                which means that we don’t store any of your contacts’ phone
                numbers and so we cannot use them to contact individuals or
                share them with anyone else.
              </p>
              <p className="py-5">
                We then try to match your contacts’ hashes with the hashed phone
                numbers that other HelloTalk learners have chosen to upload to
                use using the Contacts Sync feature. If we find a match we will
                recommend that learner as someone you may wish to follow.
              </p>
              <p className="py-5">
                If you turn off the Contacts Sync feature, the hashed contacts
                you have chosen to upload, along with your hashed phone number
                are automatically deleted from your account after 30 days.
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              3.
              <strong className="font-semibold">Cookies</strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">
                When you enter the Website, we collect your browser type and
                your IP address (a unique address that identifies your computer
                on the Internet). When you use our mobile Application, we
                collect your device type, your device ID, and your IP address.
              </p>
              <p className="py-5">
                In addition, we store certain information from your browser
                using cookies A cookie is a piece of data stored on the users
                computer tied to information about the user. We use session ID
                cookies to confirm that users are logged in. If you do not want
                information collected through the use of cookies, there is a
                simple procedure in most browsers that allows you to deny or
                accept the cookie feature; however, you should note that cookies
                may be necessary to provide you certain features available on
                the Website (e.g., customized delivery of information).
              </p>
              <p className="py-5">
                You can find more information about cookies and how to manage
                them at{" "}
                <Link href="#">
                  {" "}
                  <u>http://www.allaboutcookies.org</u>
                </Link>
                .
              </p>
              <p className="py-5">
                You can see a list of all cookies used at HelloTalk on{" "}
                <Link href="#">
                  {" "}
                  <u>our Cookie List page</u>
                </Link>{" "}
                or manage your cookies in the{" "}
                <Link href="#">
                  {" "}
                  <u>Privacy Preference Center</u>
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              4.
              <strong className="font-semibold">
                Information Obtained by Third Parties
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">
                To support and enhance the Service, we work with a variety of
                third party advertising networks, marketing analytics service
                providers and website analysis firms, such as Google, Facebook,
                Oath, and Unity (collectively, “
                <b>Third Party Advertising Service Providers</b>”). These Third
                Party Advertising Service Providers collect and use personal
                data about your visits to and use of the Website and mobile
                Application, as well as other websites in order to serve you
                with advertisements and content tailored to meet your
                preferences and likely interests or better understand ad
                effectiveness. Aggregate demographic and interest data will also
                be used for market research purposes.
              </p>
              <p className="py-5">
                We use Google Analytics which is a web analytics tool that helps
                us understand how users engage with the Website. Like many
                services, Google Analytics uses first-party cookies to track
                user interactions as in our case, where they are used to collect
                information about how users use our site. This information is
                used to compile reports and to help us improve our Website. The
                reports disclose website trends without identifying individual
                visitors. You can opt out of Google Analytics without affecting
                how you visit our site – for more information on opting out of
                being tracked by Google Analytics across all websites you use,
                visit this Google page:
                <Link href="#">
                  {" "}
                  <u>https://tools.google.com/dlpage/gaoptout</u>
                </Link>
                .
              </p>
              <p className="py-5">
                You can opt-out of receiving personalized ads from advertisers
                and ad networks that are members of the Network Advertising
                Initiative (“NAI”) or who follow the DAA Self-Regulatory
                Principles for Online Behavioral Advertising using their
                respective opt-out tools. The NAIs opt-out tool can be found
                here{" "}
                <Link href="#">
                  {" "}
                  <u>http://www.networkadvertising.org/choices/</u>
                </Link>{" "}
                and the DAAs opt out tool can be found here
                <Link href="#">
                  {" "}
                  <u>http://www.aboutads.info/choices/</u>
                </Link>
                .
              </p>
              <p className="py-5">
                In addition, your mobile devices may offer settings that enable
                you to make choices about the collection, use, or transfer of
                mobile app information for online behavioral advertising (for
                example, Apple iOS’ Advertising ID and Google Android’s
                Advertising ID). Please note that opting out does not prevent
                the display of all advertisements to you.
              </p>
            </div>
          </div>
          <div className="my-5 ">
            <h3 className="text-2xl mb-6">
              5.{" "}
              <strong className="font-semibold">
                Use of information obtained by HelloTalk
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 pl-5">
              <p className="py-5">
                HelloTalk may occasionally send you service related and product
                change announcements through the general operation of the
                Service. We will send you reminder notifications to support the
                HelloTalk teaching methodology by reinforcing the learning
                cadence and help maintain your learning streak. We process your
                data to help provide you with the Service and offer personalized
                features, to understand and improve our Service and to keep our
                Service safe and secure.
              </p>
              <p className="py-5">
                HelloTalk may use or share anonymous data collected through the
                Service, including Activity Data without limitation. As a
                business, it is critical that we perform our contract with you
                with the best service possible, and it is in our legitimate
                interests to perform these processing functions and to enable
                service e-mails by default to keep your data secure and provide
                our Service. You may opt out of any non-essential service
                e-mails at any time.
              </p>
              <p className="py-5">
                We may also use your contact information to send you
                notifications regarding new services, offers and promotions
                offered by HelloTalk if you affirmatively consent to receive
                such communications.
              </p>
              <p className="py-5">
                When you register with HelloTalk, some of your information is
                made public and available at various locations including
                HelloTalk.com/profile/your-username and
                HelloTalk.com/users/your-username. This will include the data
                from your HelloTalk Profile and Account (Name, Location, Bio,
                Username, User ID, Profile picture and HelloTalk Plus membership
                status); your followers and the people you follow; and your
                learning progress (XP, Streak, Lingots, Daily Progress,
                Languages being learned, progress level, Crowns, Skills, Lessons
                undertaken, Lexemes and Strength). Tinycards decks you create
                are also public by default, but can be made visible to only you
                or to people you have shared a link with. Your HelloTalk account
                email address is not shown publicly. Third party websites may be
                able to read, collect and use your public information for their
                own purposes.
              </p>
              <p className="py-5">
                Profile information is used by HelloTalk to be presented back to
                and edited by you when you access the Service and to be
                presented to other users. In some cases, other users may be able
                to supplement your profile, including by submitting comments
                (which can be deleted by you). HelloTalk uses this information
                to provide you with support, to send you essential
                notifications, to enforce our terms, conditions and policies, to
                communicate with you, to administer the Services, and for
                internal operations, including troubleshooting, data analysis,
                testing, research, statistical, and survey purposes. HelloTalk’s
                Terms and Conditions provide the contractual lawful basis for
                these processing activities.
              </p>
              <small>
                <i>
                  <u>HelloTalk English Test</u>
                </i>
              </small>
              <p className="py-5">
                When you take a test in the HelloTalk English Test, we will use
                your computers camera and microphone throughout the test to
                collect a Testing Video.
              </p>
              <p className="py-5">
                We will process information in connection with the HelloTalk
                English Test comprising given name(s), surname(s), date of
                birth, gender, native language, country, secondary school,
                self-reported test scores for other exams, application IDs, a
                picture or scan of a current, valid driver’s license, passport
                or other government issued ID, your Testing ID, Testing Video,
                biometric signals extracted from collected data, data about
                active software processes, information on connected external
                peripherals, and volume of network traffic, and answers to
                questions as part of the testing and evaluation process in
                order:
              </p>
              <div className="pl-5">
                <li>
                  To provide accurate testing results to Score Recipient(s) (as
                  defined below)
                </li>
                <li>
                  To compare your Testing ID to your Testing Video to ensure
                  that the person who registered for the examination (and whose
                  identity HelloTalk has validated) is the same person who took
                  the examination. In addition, this comparison may be carried
                  out on biometric signals that have been extracted from
                  collected data.
                </li>
                <li>
                  To store and review the Testing Video recording, the active
                  software processes and the volume of network traffic to
                  validate that you took the examination without improper
                  assistance
                </li>
                <li>
                  To evaluate your performance on the HelloTalk English Test, to
                  report results and to evaluate the usefulness, accuracy and
                  other aspects of the HelloTalk English Test
                </li>
                <li>
                  For our research team to validate and improve the examination,
                  in an anonymized format
                </li>
                <li>
                  To analyze audio recordings of verbal responses to improve our
                  ability to understand the spoken language
                </li>
                <li>
                  To share your Testing ID with your consent upon initiation of
                  a dispute by a Score Recipient
                </li>
              </div>
              <p className="py-5">
                HelloTalk’s Terms and Conditions provide the contractual lawful
                basis for these English Test processing activities.
              </p>
              <small>
                <i>
                  <u>HelloTalk ABC</u>
                </i>
              </small>
              <p className="py-5">
                HelloTalk ABC is separate from the HelloTalk Language app and
                does not share any account information between the two. The
                HelloTalk ABC app is designed to be set up by parents and will
                ask you to provide your child’s age. This information is kept
                anonymously for research purposes and not tied to your personal
                data in any way. You can then choose to enable speaking
                exercises. Speech data is stored on your phone and uses Apple’s
                speech recognition service to convert your voice into text. No
                speech data is shared with HelloTalk. As a parent you also have
                the option of providing your email address so that HelloTalk may
                send you information about product updates and to ask you about
                participating in product research. If you do provide your email
                address you can unsubscribe any time by emailing{" "}
                <Link href="#">
                  {" "}
                  <u>literacy-feedback@HelloTalk.com </u>
                </Link>
                or by clicking the unsubscribe link in any HelloTalk ABC emails.
                Your HelloTalk ABC data is backed up into Apple’s iCloud which
                allows you to synchronize and restore the data onto another
                Apple device.
              </p>
              <small>
                <i>
                  <u>HelloTalk Math</u>
                </i>
              </small>
              <p className="py-5">
                HelloTalk Math is a separate app to the HelloTalk Language app,
                and is intended for use by both children and adults. When you
                first open the app, you will have the option to (1) log in with
                an existing HelloTalk account, or (2) start using the app
                immediately without an account. Logging in with your HelloTalk
                account means you will share a single account across both apps.
              </p>
              <p className="py-5">
                Next, you will need to provide your age -- this helps us
                recommend the appropriate level of math content. You can then
                choose to continue with our recommended course, or switch to
                another course. You are able to switch courses using the Profile
                button in the app after your account is set up. Next, you can
                choose to enable practice reminder notifications. You are able
                to change your notification preferences in your device’s native
                Settings page.
              </p>
              <p className="py-5">
                If you did not log in with an existing HelloTalk account, you
                will be prompted to create an account after you complete a few
                lessons in the app. If you’re under 13, we will ask you to
                provide a parent’s email address, plus a username and password.
                If you’re 13 or older, we will ask you to provide your own email
                address, name, username, and password.
              </p>
              <p className="py-5">
                Your HelloTalk Math progress data is stored on your phone.
                Deleting the HelloTalk Math app will delete your progress.
                HelloTalk Math uses Google ML Kit for handwriting recognition in
                writing exercises in the app. Handwriting recognition happens
                entirely on your device, and none of this information is sent to
                external servers. Writing exercises can be disabled in the
                Profile section of the app.
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              6.{" "}
              <strong className="font-semibold">
                Sharing your personal data with third parties
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">
                HelloTalk shares your personal data only when it is necessary to
                offer the Service, legally required, or permitted by you.
              </p>
              <p className="py-5">
                We will provide personal data to hosting providers such as
                Amazon Web Services, search engine providers such as Google,
                analytics providers such as Crashlytics, and support providers
                such as ZenDesk.
              </p>
              <p className="py-5">
                These data processors help us bring you the Service. For
                example, we may share your information in order to detect where
                or how you encountered a bug when using our mobile application.
                In connection with these operations, our service providers will
                have access to personal data for a limited time. When we utilize
                service providers for processing any personal data, we implement
                contractual protections limiting the use of that personal data
                to the provision of services to HelloTalk.
              </p>
              <p className="py-5">
                We will be required to access and disclose personal data in
                response to lawful requests, such as subpoenas or court orders,
                or in compliance with applicable laws. Additionally, we will
                access and share account or other personal data when we believe
                it is necessary to comply with law, to protect our interests or
                property, to prevent fraud or other illegal activity perpetrated
                through the Service or using the HelloTalk name, or to prevent
                imminent harm. This will include accessing and sharing personal
                data with other companies, lawyers, agents or government
                agencies.
              </p>
              <p className="py-5">
                HelloTalk will share the complete and accurate results of
                HelloTalk English Tests with such institutions, including
                universities, potential employers, or other third parties,
                (collectively, “<b>Score Recipients</b>”) as specified when you
                send your results after finishing a test or when you apply a
                coupon sponsored by the Score Recipient before starting a test.
                These results will include your test score, a video of the
                interview section of your test, and your written responses to
                certain parts of the test. We will also share your full name,
                date of birth, e-mail address, and the photo you take of
                yourself. We will never share examination results with any party
                without your approval, except that anonymized examination
                results will be used by HelloTalk and its partners to improve
                the examination and for research and analysis. We will not share
                your Testing ID with any Score Recipients, except with your
                consent upon initiation of a dispute by a Score Recipient.
              </p>
              <p className="py-5">
                If the ownership of all or substantially all of the HelloTalk
                business, or individual business units or assets owned by
                HelloTalk that are related to the Service, were to change, your
                personal data will be transferred to the new owner. In any such
                transfer of information, your personal data would remain subject
                to this section.
              </p>
              <p className="py-5">
                HelloTalk will share aggregate or anonymous data collected
                through the Service, including Activity Data, for purposes such
                as understanding or improving the service.
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              7.{" "}
              <strong className="font-semibold">
                Data subject rights and data retention
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">
                You can manage your account settings at{" "}
                <Link href="#">
                  {" "}
                  <u>https://www.HelloTalk.com/settings/account </u>
                </Link>{" "}
                to update, amend, and correct your information.
              </p>
              <p className="py-5">
                You also have the following rights in relation to the personal
                data we hold about you, unless provided otherwise by local law:
              </p>
              <div className="pl-5">
                <li>
                  To request access to, or erasure of, the personal data we hold
                  about you.
                </li>
                <li>
                  To request us to restrict the processing of the personal data
                  we hold about you.
                </li>
                <li>
                  To object to us processing personal data relating to you.
                </li>
                <li>
                  Where you have given us consent to process your personal data,
                  you have the right to withdraw that consent at any time.
                </li>
                <li>
                  To export the personal data you have provided to HelloTalk in
                  a format that can be transferred electronically to a third
                  party.
                </li>
                <li>
                  To delete your account with HelloTalk by following the
                  instructions available through the Service.
                </li>
              </div>
              <p className="text-2xl text-gray-500 my-5 pl-5">
                HelloTalk will retain your data until your account is deleted,
                after which point we will retain anonymous data collected
                through the Service, including Activity Data, which may be used
                by HelloTalk and shared with third parties in any manner.
                Information associated with the HelloTalk English Test,
                including examination results and your Testing Video, will be
                collectively deleted from your HelloTalk account after five
                years have passed from the date you upload your test, but
                anonymized examination data, including your examination results
                and Testing Video, will be kept indefinitely by HelloTalk to
                improve the examination and for research and analysis.
              </p>
              <p className="text-2xl text-gray-500 my-5 pl-5">
                Please note that some of these rights are not absolute. In some
                cases, we may refuse a request to exercise particular rights if
                complying with it meant that we are no longer able to meet our
                contractual obligation to provide you with particular products
                and services. We will keep you informed as to the actions that
                we can take when you make your request.
              </p>
              <p className="text-2xl text-gray-500 my-5 pl-5">
                You may also have the right to make a GDPR complaint to the
                relevant Supervisory Authority. A list of EEA Supervisory
                Authorities is available here:{" "}
                <Link href="#">
                  {" "}
                  <u>
                    http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm{" "}
                  </u>
                </Link>
                and the UK here:
                <Link href="#">
                  {" "}
                  <u>https://ico.org.uk/global/contact-us/ </u>
                </Link>
                . If you need further assistance regarding your rights, please
                contact us using the contact information provided below and we
                will consider your request in accordance with applicable law. In
                some cases our ability to uphold these rights for you may depend
                upon our obligations to process personal information for
                security, safety, fraud prevention reasons, compliance with
                regulatory or legal requirements, or because processing is
                necessary to deliver the services you have requested. Where this
                is the case, we will inform you of specific details in response
                to your request.
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              8.{" "}
              <strong className="font-semibold">
                Third party websites and links
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">
                Please note that you may have cookies placed on your computer by
                third party websites that refer you to our Service. Although we
                do not share your personal data with these third party websites
                unless it is reasonably necessary to offer the Service, they may
                be able to link certain non-personally identifiable information
                we transfer to them with personal data they previously collected
                from you. Please review the privacy policies of each website you
                visit to better understand their privacy practices. In addition,
                HelloTalk would like to inform you that anytime you click on
                links (including advertising banners), which take you to third
                party websites, you will be subject to the third parties’
                privacy policies.
              </p>
              <p className="py-5">
                Our Services contain links to other sites operated by third
                parties. HelloTalk does not control such other sites and is not
                responsible for their content, their privacy policies, or their
                use of personal data, including any personal or financial
                information collected by our third party payment processor to
                process payments for in-app purchases. HelloTalk’s inclusion of
                such links does not imply any endorsement of the content on such
                sites or of their owners or operators except as disclosed on the
                Services. Any information submitted by you directly to these
                third parties is subject to that third party’s privacy policy.
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              9.{" "}
              <strong className="font-semibold">
                California privacy rights
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">Residents of California have the right to:</p>
              <div className="pl-5">
                <li>
                  Know what personal information we collect about you and from
                  where we collect it.
                </li>
                <li>
                  Access a copy of the personal information we hold about you.
                </li>
                <li>
                  Understand how we process your personal information and how it
                  may be shared.
                </li>
                <li>
                  Opt out of having your personal information shared with
                  certain third parties.
                </li>
                <li>
                  <Link href="#">
                    {" "}
                    <u>
                      Request we delete your HelloTalk account and personal
                      information
                    </u>
                  </Link>
                  .
                </li>
              </div>
              <p className="text-2xl text-gray-500 my-5 pl-5">
                To make such a request, please send an email to{" "}
                <Link href="#">
                  {" "}
                  <u>privacy@HelloTalk.com</u>
                </Link>
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              10.{" "}
              <strong className="font-semibold">
                Children under age of digital consent
              </strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <p className="py-5">
                We know that children deserve extra privacy protection. That’s
                why we treat child users differently to ensure their parents are
                in control and we only collect the bare minimum information we
                need to make HelloTalk work.
              </p>
              <p className="py-5">
                When a user creates a HelloTalk account we collect their age and
                compare it to the local standard of child online consent
                depending on the country they registered in. We refer to users
                under this age as “child users”. Child users are permitted to
                create a user account but we ask them to provide their parent’s
                email address instead of their own. We also prevent child users
                from supplying their own name because we don’t need that
                information.
              </p>
              <p className="py-5">
                After registration we will send an email notifying the parent
                about HelloTalk’s privacy and information practices regarding
                child users, including what personal data we collect and how we
                use, share, and protect that personal data. The email also
                explains how parents can request that HelloTalk access, change
                or delete the personal data about their child.
              </p>
              <h3 className="py-5">
                Child users receive the following special treatment:
              </h3>
              <div className="pl-5">
                <li>
                  Lessons are made age appropriate by removing mature words like
                  “beer” or “wine”.
                </li>
                <li>Advertisements are set to family safe content.</li>
                <li>
                  The Profile page is hidden, preventing the child from stating
                  their name, location or bio.
                </li>
                <li>Uploading an avatar photo is disabled.</li>
                <li>Promotional emails are disabled.</li>
                <li>Leaderboards are disabled.</li>
                <li>Discussion forums are disabled.</li>
                <li>
                  The child’s profile is made private and hidden from other
                  users’ searches.
                </li>
                <li>Other users are unable to follow the child.</li>
                <li>
                  The ability to follow other users or search for other users is
                  disabled.
                </li>
                <li>The ability to send an invitation email is disabled.</li>
                <li>Finding friends on Facebook is disabled.</li>
                <li>
                  Social logins with Facebook, Google or Apple are disabled.
                </li>
                <li>
                  Social follow buttons for Twitter, Facebook and Instagram are
                  disabled.
                </li>
              </div>
              <h3 className="py-5">
                In addition, all users under the age of 16 receive the following
                special treatment:
              </h3>
              <div className="pl-5">
                <li>Advertisements are set to non-personalised.</li>
                <li>Third party behavioral tracking is disabled.</li>
                <li>Third party analytics is disabled.</li>
              </div>
              <p className="text-2xl text-gray-500 my-5 pl-5">
                To prevent restricted users from amending these features, the
                settings will be hidden or grayed out. In the future, once we’re
                sure the user is old enough we will automatically remove the
                restrictions, reset the settings to their defaults and make the
                settings visible for them to configure how they choose.
              </p>
              <p className="text-2xl text-gray-500 my-5 pl-5">
                With regards to the Childrens Online Privacy Protection Rule
                (COPPA), HelloTalk only collects personal information from
                children under the age of 13 for the sole purpose of performing
                internal operations of the Service. If we discover that we have
                unknowingly collected additional personal information from these
                children we will delete it. If you believe this to be the case,
                please contact us at{" "}
                <Link href="#">
                  {" "}
                  <u>privacy@HelloTalk.com</u>
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              11. <strong className="font-semibold">Links</strong>
            </h3>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              The Service may contain links to other websites. We are not
              responsible for the privacy practices of other websites. We
              encourage users to be aware when they leave the Service to read
              the privacy statements of other websites that collect personally
              identifiable information. This Privacy Policy applies only to
              information collected by HelloTalk via the Service.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              12.{" "}
              <strong className="font-semibold">Information security</strong>
            </h3>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              HelloTalk has implemented administrative and technical safeguards
              it believes are appropriate to protect the confidentiality,
              integrity and availability of your personal data, Testing ID, User
              Photo, access credentials, and HelloTalk English Test results.
              However, given sufficient resources, a determined attacker could
              defeat those safeguards and may, as a result, gain access to the
              data we seek to protect.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              13. <strong className="font-semibold">Do Not Track</strong>
            </h3>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              The Service is not designed to respond to “do not track” signals
              sent by some browsers.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-2xl mb-6">
              14. <strong className="font-semibold">Contact Us</strong>
            </h3>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <h3>HelloTalk’s headquarters are located within the USA at:</h3>
              <h3>HelloTalk, Inc.</h3>
              <h3>5900 Penn Ave, Second Floor</h3>
              <h3>Pittsburgh, PA 15206</h3>
              <h3>United States of America</h3>
              <h3>Phone: +1-412-567-6602</h3>
            </div>
            <div className="text-2xl text-gray-500 my-5 pl-5">
              <h3>
                HelloTalk, Inc. is a registered Data Controller with the UK
                Information Commissioners Office (ICO), number ZA294891, at the
                address:
              </h3>
              <h3>HelloTalk, Inc.</h3>
              <h3>85 Great Portland Street</h3>
              <h3>London</h3>
              <h3>W1W 7LT</h3>
              <h3>United Kingdom</h3>
            </div>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              For all data privacy inquiries and any questions or concerns you
              have about this Privacy Policy, please contact our Data Protection
              Officer at{" "}
              <Link href="#">
                {" "}
                <u>privacy@HelloTalk.com</u>
              </Link>
            </p>
            <p className="text-2xl text-gray-500 my-5 pl-5">
              For all support inquiries, please go to
              <Link href="#">
                {" "}
                <u>https://support.HelloTalk.com</u>
              </Link>
              .
            </p>
          </div>
        </section>
        <h3 className="text-2xl text-black my-20">
          Last revised on October 24th, 2022
        </h3>
      </section>
    </div>
  );
};

export default index;
