import imgCard1 from "../assets/images/image-retro-pcs.jpg"
import imgCard2 from "../assets/images/image-top-laptops.jpg"
import imgCard3 from "../assets/images/image-gaming-growth.jpg"

function Cards() {
  return (
    <section className="my-8 flex flex-wrap items-center  lg:flex-nowrap lg:gap-6">
        <article className="w-full grid grid-cols-2 mb-5 items-center justify-center gap-3 md:items-stretch md:justify-between md:gap-3 md:grid-cols-3">
            <img src={imgCard1} className="md:w-[100%] lg:h-[90%] lg:m-auto" alt="" />               
            
            <div className="card-text md:flex flex-col gap-3 md:col-span-2 lg:gap-0">
                <h4 className="text-Soft-red text-3xl font-bold md:text-7xl lg:text-[2rem]">01</h4>
                <a href="#" className="text-Very-dark-blue font-bold md:text-4xl lg:text-[1.5rem] ">Reviving Retro PCs</a>
                <p className="md:text-2xl text-Dark-grayish-blue lg:text-[1rem]">What happens when old PCs are given modern upgrades?</p>
            </div>
        </article>
        
        <article className="w-full grid grid-cols-2 mb-5 items-center justify-center gap-3 md:items-stretch md:gap-3 md:grid-cols-3">

            <img src={imgCard2} className="md:w-[100%] lg:h-[90%] lg:m-auto" alt="" />
            
            <div className="card-text md:flex flex-col gap-3 md:col-span-2 lg:gap-0">
                <h4 className="text-Soft-red text-3xl font-bold md:text-7xl lg:text-[2rem]">02</h4>
                <a href="#" className="text-Very-dark-blue font-bold md:text-4xl lg:text-[1.5rem]">Top 10 Laptops of 2022</a>
                <p className="md:text-2xl text-Dark-grayish-blue lg:text-[1rem]">Our best picks for various needs and budgets.</p>
            </div>
        </article>

        <article className="w-full grid grid-cols-2 mb-5 items-center justify-cente gap-3 md:items-stretch md:gap-3 md:grid-cols-3">
            
            <img src={imgCard3} className="md:w-[100%] lg:h-[90%] lg:m-auto" alt="" />            
            <div className="card-text md:flex flex-col gap-3 md:col-span-2 lg:gap-0">
                <h4 className="text-Soft-red text-3xl font-bold md:text-7xl lg:text-[2rem]">03</h4>
                <a href="#" className="text-Very-dark-blue font-bold md:text-4xl lg:text-[1.5rem]">The Growth of Gaming</a>
                <p className="md:text-2xl text-Dark-grayish-blue lg:text-[1rem]">How the pandemic has sparked fresh opportunities.</p>
            </div>
        </article>
    </section>
  )
}

export default Cards