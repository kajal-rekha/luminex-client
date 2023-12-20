import { buttonVariants } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { data } from "@/data/blogeContent";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <main className='wrapper sp'>
      <SectionTitle title='blog' />
      <div className='grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-10 shadow-md shadow-gray'>
        {data.map((blog,i) => (
          <div key={i}>
            <div className='group inline-block h-[20rem] w-full overflow-hidden rounded-sm shadow-md shadow-gray relative '>
              <Image
                src={blog.image}
                alt={blog.tittle}
                width={500}
                height={500}
                priority
                className='eq h-full w-full object-cover group-hover:scale-125 '
              />
            </div>
            <div className=' absolute -mt-40 ml-24 bg-orange '>
              <p className='py-2 px-5 text-light'>{blog.date}</p>
            </div>
            <div className='eq flex w-full flex-col gap-2.5 rounded-xl  bg-gray/25 p-5 hover:bg-gray/50'>
              <h3 className='text-orange'>{blog.tittle}</h3>
              <p className='text-dark/75'>
                {blog.description.substring(0, 100)}...
              </p>
              <Link
                href={blog.link}
                className={buttonVariants({ variant: "orange" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
