import RobotArm from "@/assets/robot-arm.svg";

const SiteFooter = () => {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8">
        <div className="flex gap-16 justify-between">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-24">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Developer
              </h3>
              <ul role="list" className="md:mt-4 space-y-2">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="/platform"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="https://studio.jacobirobotics.com"
                  >
                    Studio
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="https://account.jacobirobotics.com"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="https://docs.jacobirobotics.com"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Company
              </h3>
              <ul role="list" className="md:mt-4 space-y-2">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="/company"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="/technology"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="mailto:contact@jacobirobotics.com"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="/press"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="/cookies"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Community
              </h3>
              <ul role="list" className="md:mt-4 space-y-2">
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="https://www.linkedin.com/company/jacobi-robotics/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="https://github.com/jacobirobotics"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                    href="https://jacobirobotics.com/blog"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm leading-6 text-gray-400">
              The latest news sent to you every couple of months.
            </p>
            <form
              className="mt-6 sm:flex sm:max-w-md"
              action="https://jacobirobotics.us18.list-manage.com/subscribe/post?u=a45f698bc70870955fe0f156b&amp;id=f082ce78e1&amp;f_id=002927e7f0"
              method="post"
              target="_self"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1
                ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-jac-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
                name="EMAIL"
              />
              <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="b_a45f698bc70870955fe0f156b_f082ce78e1"
                  value=""
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-jac-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-jac-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jac-500 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <img
          alt="Robot Arm"
          loading="lazy"
          width="48"
          height="48"
          decoding="async"
          data-nimg="1"
          className="mt-16 sm:mt-20 lg:mt-24 text-white"
          style={{ color: "transparent" }}
          src={RobotArm}
        />
        <div className="border-t border-gray-400 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              className="text-gray-500 hover:text-gray-400"
              href="https://www.linkedin.com/company/jacobi-robotics/"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
            <a
              className="text-gray-500 hover:text-gray-400"
              href="https://github.com/jacobirobotics"
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62
                  .069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            © 2024 Jacobi Robotics, Inc. All rights reserved.
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" className="underline">
            {" "}
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>
          apply.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
