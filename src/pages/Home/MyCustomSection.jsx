// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
import image0 from '../../assets/myCustomSectionImages/images0.jpeg';
import image1 from '../../assets/myCustomSectionImages/images1.jpeg';
import image2 from '../../assets/myCustomSectionImages/images2.jpeg';
const MyCustomSection = () => {
    return (
        <section className='w-[95%] md:w-[90%] 2xl:w-[70%] mx-auto mt-20 mb-36'>
            <Fade className='text-center' cascade>
                <h2 className='text-2xl font-bold'>Our Success Stories</h2>
                <p className='font-semibold'>...There are some awesome people or kid...</p>
                <p className='font-semibold'>...Like you who may like...</p>
                <p className='font-semibold'>...Push their skills to a new level...</p>
                <p className='font-semibold'>...With a little bit of help and support...</p>
                <p className='font-semibold'>...From <span className='font-bold'>The Shutter Safari</span>...</p>
            </Fade>
            <AttentionSeeker>
                <h2 className='font-semibold mt-5'>Hello I am Emilly</h2>
            </AttentionSeeker>
            <Fade>
                <p>I am going to share with you my story. Once three years back I have come to learn courses from <span className='font-bold'>Shutter Safari</span> during my summer vacations. Photography was never my passion but I used to love it a lot. When I take the course from <span className='font-bold'>The Thinking Behind Photography.</span> It has changed my life forever. I never felt like I was doing a couse but going through a journey an adventure. It almost felt like exploring a story of the thinking process behind every photo that I took. Now some of the photos of my are in <span className='font-bold'>exhibision gallery</span>. I am so happy.</p>
            </Fade>
            <Slide className='mt-5 flex lg:justify-end'>
                <img src={image0} alt="Exhibision Image" />
            </Slide>

            <Slide>
                <AttentionSeeker>
                    <h2 className='font-semibold mt-9 text-center'>Hello I am Lara</h2>
                </AttentionSeeker>
            </Slide>
            <Fade direction='right'>
                <p className='text-center'>I was to shy to show my work publicly. I thought it is bad can&apos;t show to people. They will make fun of me. But I did&apos;t have the courage. While I was learning a course <span className='font-bold'>The Landscape Photography, <span className='font-semibold'>Michel Devis</span></span> saw my work and praise it. He said that, &ldquo;I appreciate your work you must reveal them. If it was bad you still sould reveal it. Just focus on your work, don&apos;t think much what other people will say.&rdquo;</p>
                <p className='text-center lg:text-right font-semibold'>That&apos;s how I gained control over my shyness and and reveald my work</p>
                <p className='mt-5 text-center font-bold'>Here is one of the photo my Exhibision Photo Gallery bellow.</p>
            </Fade>
            <Fade className='flex justify-center mt-4'>
                <img src={image2} alt="Exhibision Gallery Image" />
            </Fade>

            <Slide>
                <AttentionSeeker>
                    <h2 className='text-right md:text-left font-semibold mt-9'>Hello I am Khan</h2>
                </AttentionSeeker>
            </Slide>
            <Fade>
                <p>I was a graphic edition geek from childhook and love to create amazing graphical work and photo design. 1 years back I came to know about that summer camp school <span className='font-bold'>Shutter Safari</span> from a friend then visited to their site enrolled a course <span className='font-bold'>Photo Editing Workshop.</span> from sir <span className='font-semibold'>David Anderson</span>. I spent my whole sutter there and learn some cool techniques about photo editing which boot my skills to the next level. Thank you <span className='font-bold'>Mr.Devid Anderson</span>. I learned a lot from you and have gained the skills about how to keep learning new technologies and push me further.<span className='font-bold'> Here are some of my recent works bellow.</span></p>
            </Fade>
            <Slide className='mt-5' direction='right'>
                <img src={image1} alt="Exhibision Gallery Image" />
            </Slide>
        </section>
    );
};

export default MyCustomSection;