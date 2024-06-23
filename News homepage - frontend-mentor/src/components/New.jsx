import hero from "../assets/images/image-web-3-desktop.jpg"
import heroMobile from "../assets/images/image-web-3-mobile.jpg"

import useScreenSize from '../logic/heroImg'

function New() {
    const screenWidth = useScreenSize();
    const isMobile = screenWidth <= 390;


  return (
    <section className="w-full  grid gap-7 grid-cols-1 wrapper lg:grid-cols-3 lg:grid-rows-1:">
        <article className="mobile:row-span-1 h-max lg:col-span-2 lg:row-span-2[new-area-mobile:hero] ">
            <img src={isMobile ? heroMobile : hero} className="" alt="" />

            <article className="lg:grid lg:my-10 lg:grid-cols-2 lg:col-span-2">
                <article className="lg:col-span-1 lg:row-span-2">
                <h1 className="text-[3rem] font-bold text-Very-dark-blue">The Bright Future of Web 3.0?</h1>
            </article>
            <article className="flex flex-wrap  text-justify gap-8">

                <p className="text-[1.2em] text-Dark-grayish-blue">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                <button className="button bg-Soft-red font-bold uppercase text-Very-dark-blue text-[1.2rem]">read more</button>
            </article>
            </article>
        </article>
        <aside className="bg-Very-dark-blue lg:col-span-1 lg:row-span-1">
            <h3 className="text-Soft-orange text-6xl py-6 px-4">New</h3>

            <article className="pb-2 flex gap-2 flex-col text-Off-white p-5  mx-auto ">
                <a href="#" className="text-[1.6rem] font-bold">Hydrogen VS Electric Cars</a>
                <p className="">Will hydrogen-fueled cars ever catch up to EVs?</p>
                <div className="h-[1px] w-[100%] mx-auto bg-Grayish-blue my-4"></div>
            </article>
            <article className="pb-2 flex gap-2 flex-col text-Off-white p-4 mx-auto">
                <a href="#" className="text-[1.6rem] font-bold">The Downsides of AI Artistry</a>
                <p className="">What are the possible adverse effects of on-demand AI image generation?</p>
                <div className="h-[1px] w-[100%] mx-auto bg-Grayish-blue my-4"></div>
            </article>
            <article className="pb-2 flex gap-2 flex-col text-Off-white p-4 mx-auto">
                <a href="#" className="text-[1.6rem] font-bold">Is VC Funding Drying Up?</a>
                <p className="pb-5">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
        </aside>
        

        
    </section>
  )
}

export default New