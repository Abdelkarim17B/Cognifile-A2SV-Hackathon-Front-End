import Link from 'next/link';

const CTA = () => {
  return (
    <section className="p-20">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-3xl lg:text-5xl font-extrabold leading-normal lg:leading-normal text-center w-[80%] lg:w-[100%] m-auto dark:text-white text-[#191919]">
          Want to use CogniFile?
        </h2>
        <p className="lg:text-xl leading-normal w-[80%] lg:w-[100%] m-auto text-center dark:text-white text-[#727272]">
          Discover our range of innovative services designed to help you organize your files. Our
          team of experts is dedicated to simplifying and enhancing your experience in this area.
        </p>
        <div className="flex justify-center flex-col lg:flex-row items-center gap-4">
          <Link
            className="lg:scale-100 scale-75 dark:bg-Gray-gradient bg-Blue-gradient transition-all opacity-80 hover:opacity-100 dark:text-cf-dark text-white rounded-full px-16 py-4 font-bold text-lg text-center text-nowrap"
            href="/auth/register"
          >
            Try For Free
          </Link>
          <Link
            className=" bg-transparent border dark:border-white border-[#191919] dark:text-white text-[#191919] transition-all hover:bg-white hover:text-black rounded-full px-16 py-4 font-bold text-lg"
            href="/auth/login"
          >
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CTA;
