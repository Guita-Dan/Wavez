import Image from "next/image";
import BookAMeeting from "../BookAMeetingBtn";
import Link from "next/link";

const HeroPhoto = () => {
  return (
    <div className="hidden lg:block relative">

      <figure className="relative w-[340px] xl:w-[460px] h-[510px] xl:h-[690px]">
        <Image
          src="/hero.jpg"
          fill
          alt="Hero Illustration"
        />
        <figcaption className="text-xs text-center text-gray-300">
          Photo by <Link href="https://unsplash.com/@daria1life?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daria Pimkina</Link> on <Link href="https://unsplash.com/photos/tYaccl19A3Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Link>

        </figcaption>
      </figure>
      <span className="absolute -left-8 -bottom-8 z-[-1]">
        <svg
          width="93"
          height="93"
          viewBox="0 0 93 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
          <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
          <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
          <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
          <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
          <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
          <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
          <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
          <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
          <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
          <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
          <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
          <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
          <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
          <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
          <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
          <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
          <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
          <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
          <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
          <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
          <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
          <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
          <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
          <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
        </svg>
      </span>
    </div>
  )
}
export default function Hero() {
  return (

    <div className="flex flex-wrap py-8 lg:py-24 justify-between lg:px-8 xl:px-12 ">

      <div className="w-full lg:w-5/12 flex flex-col">
        <h1 className="capitalize mb-3 text-4xl font-bold leading-snug text-dark dark:text-white sm:text-[40px] lg:text-[42px] xl:text-[48px]">
          Your Website&apos;s Essence Captured in One Headline
        </h1>
        <p className="mb-8 max-w-5/12 text-base text-body-color">
          The hero section description is a succinct follow-up to a compelling headline. Keep it brief, straightforward, and pointedly descriptive.
        </p>

        <div className="flex flex-col items-center py-3 space-y-3 sm:space-x-4 lg:space-y-0 md:flex-row justify-center lg:justify-start">
          <BookAMeeting title="Book A Meeting" />
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-300">
            <svg
              role="img"
              width="24"
              height="24"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span> View on Github</span>
          </Link>
        </div>

        <div className="flex flex-wrap space-x-6 justify-center md:justify-around mt-auto py-8 lg:py-0">

          <img src="/amazon.svg" alt="" />
          <img src="/verizon.svg" alt="" />
          <img src="/microsoft.svg" alt="" />

        </div>

      </div>

      <HeroPhoto />

    </div>

  );
}


