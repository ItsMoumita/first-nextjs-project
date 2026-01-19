import { Separator } from "@radix-ui/react-separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Refund",
        href: "#",
      },
      {
        title: "Cancellation",
        href: "#",
      },
    ],
  },

  {
    title: "Contact",
    links: [
      {
        title: "hello@earc.shop",
        href: "#",
      },
      {
        title: "01234567890",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className=" bg-[#52392C] flex flex-col text-white">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 grid grid-cols-1 md:grid-cols-5  gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}

              <h2 className="text-2xl font-bold">E.ARC</h2>

              <p className="mt-4 text-muted-foreground text-white w-2/3">
                The most popular and reliable website for buying branded
                products online. We are the first Bangladeshi website to sell
                100% authentic products from the world's most popular brands.
              </p>

              <div className="flex flex-col mt-14">
                <h1 className="text-white">Follow Us on Social Media</h1>
                <div className="flex items-center mt-6 gap-5 text-muted-foreground">
                  <Link
                    href="#"
                    target="_blank"
                    className=" border-2 rounded-full p-2"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className=" border-2 rounded-full p-2"
                  >
                    <DribbbleIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className=" border-2 rounded-full p-2"
                  >
                    <TwitchIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className=" border-2 rounded-full p-2"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-medium">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-white hover:text-foreground "
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="">
              <h1>DOWNLOAD OUR APP</h1>
              <div className="flex gap-4 mt-4">
                <img
                  src="/assets/PlayStoreButton.svg"
                  alt="Play store button"
                />
                <img src="/assets/AppStoreButton.svg" alt="App store button" />
              </div>
            </div>
          </div>
          <Separator />
        </div>
        <div className="bg-[#321C10]/70 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <div className="max-w-(--breakpoint-xl) mx-auto w-full text-center">
            {/* Copyright */}
            <span className="text-white text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Privacy Policy | Terms of Use Cookies and Interest - Based Ads
                Do not Sell My Info (Bangladesh) © 2026 e.Arc
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
