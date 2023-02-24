import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const OurTeam = () => {
  return (
    <div>
      <Navbar />
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="text-[#4b4b4b] font-semibold p-2 mt-5 text-sm  tracking-wider text-center uppercase font-featherbold">
            HelloTalk Team
          </p>
          <h1 className="mb-10 md:mx-32 mx-3 sm:mx-32 text-[#61B800] text-center text-4xl font-bold">
            Meet Our Team
          </h1>
          {/* <div className="flex flex-row flex-wrap-reverse justify-center mt-8"> */}
          <div className="md:grid md:grid-cols-3 flex flex-row flex-wrap justify-center mt-8">
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 hover:bg-white hover:text-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                src="https://media.discordapp.net/attachments/1063400454056312872/1063400669802938478/HAS-V20.jpg?width=420&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Shaimon</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a href=" https://www.facebook.com/al.shaimon" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://github.com/al-shaimon" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaGithub></FaGithub>{' '}
                </a>
                <a href="https://www.linkedin.com/in/al-shaimon/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaLinkedin></FaLinkedin>{' '}
                </a>
              </div>
            </div>
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 "
                src="https://media.discordapp.net/attachments/1063400454056312872/1063405036702539846/322006678_898904951270318_570334744420783429_n.jpg?width=609&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Kasib</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a href="https://www.facebook.com/chowdhury.kasib/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://github.com/chykasib" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaGithub></FaGithub>{' '}
                </a>
                <a href="https://www.linkedin.com/in/chy-kasib-b4b2b5244/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaLinkedin></FaLinkedin>{' '}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.discordapp.net/attachments/1063400454056312872/1071491763044372661/Foysal.jpg?width=569&height=572"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Mosharaf</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a href="https://www.facebook.com/foysal1993dev/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://github.com/Mosharaf12" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaGithub></FaGithub>{' '}
                </a>
                <a href="https://www.linkedin.com/in/mosharaf-hossain-065407183/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaLinkedin></FaLinkedin>{' '}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.discordapp.net/attachments/1063400454056312872/1063400496607543306/FB_IMG_1673604804870.jpg"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Afnan Ferdousi</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a href="https://www.facebook.com/afnanferdousi2006/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.linkedin.com/in/afnanferdousi550/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaGithub></FaGithub>{' '}
                </a>
                <a href="https://www.linkedin.com/in/afnanferdousi550/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaLinkedin></FaLinkedin>{' '}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.discordapp.net/attachments/1063400454056312872/1063400975076962354/sujoypaul.jpg"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Sujoy Kumar Paul</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a href="https://www.facebook.com/spsujoy07" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://github.com/spsujoy007" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaGithub></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/spsujoy" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaLinkedin></FaLinkedin>{' '}
                </a>
              </div>
            </div>
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                src="https://media.discordapp.net/attachments/1060905971519586324/1068179136721465474/IMG_20221208_200202_351_1.jpg?width=515&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Md. Asadullah Al Galib</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a href="https://www.facebook.com/Galib.8/" target="_blank" rel="noreferrer noopener">
                  {''}
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://github.com/Galib6" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaGithub></FaGithub>{' '}
                </a>
                <a href="https://www.linkedin.com/in/algalib2/" target="_blank" rel="noreferrer noopener">
                  {' '}
                  <FaLinkedin></FaLinkedin>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurTeam;
