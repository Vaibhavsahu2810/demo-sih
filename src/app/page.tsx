import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function frontPage() {
  return (
    <>
      <Header />
      <Hero/>
      <section className="p-12 px-24 w-full flex justify-between items-center gap-16">
        <div className="flex h-screen mt-8">
          <div className="w-1/2 p-8">
            <div className="mb-6 text-3xl text-white-800">
              Find Your Perfect Job Match with AI-Powered Technology
            </div>
            <div className="mb-8 text-white-600">
              Our AI-driven job matching service uses advanced technology to
              connect you with the best job opportunities that match your skills
              and experience. Say goodbye to endless job searches and let our
              intelligent algorithms do the work for you.
            </div>
            <div className="flex h-screen">
              <div className="mb-8">
                <div className="text-xl font-semibold text-white-800">
                  Discover Opportunities
                </div>
                <p className="text-white-600">
                  Take our skill test to unlock a world of job opportunities
                  tailored for you.
                </p>
              </div>
              <div>
                <div className="text-xl font-semibold text-white-800">
                  Learn and Grow
                </div>
                <p className="text-white-600">
                  Access recommended courses through AI to enhance your skills
                  and career prospects.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src="https://st2.depositphotos.com/3591429/7157/i/950/depositphotos_71571591-stock-photo-job-search-qualification-concept.jpg"
              alt="Job Search"
              className="w-6/6 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="p-12 px-24 w-full flex justify-between items-center gap-16">
        <div className="flex h-screen">
          <div className="w-1/2 p-8">
            <div className="mb-6 text-2xl font-bold text-white-800">
              Build an Impressive Resume with Our User-Friendly Tool
            </div>
            <div className="mb-8 text-white-600">
              Craft a professional resume that highlights your skills and
              experience, and impress potential employers.
            </div>
            <div className="flex h-screen">
              <div className="mb-8">
                <div className="text-xl font-semibold text-white-800">
                  Easy-to-Use
                </div>
                <p className="text-white-600">
                  Our resume builder simplifies the process, allowing you to
                  create a polished resume quickly.
                </p>
              </div>
              <div>
                <div className="text-xl font-semibold text-white-800">
                  Customizable
                </div>
                <p className="text-white-600">
                  Tailor your resume to specific job applications with our
                  flexible templates and formatting options.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 justify-center items-center">
            <video
              src="https://cdn.enhancv.com/1080_ai_resume_builder_005c790816.mp4?updated_at=2023-12-21T13:15:17.985Z"
              autoPlay
              loop
              muted
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>Empower Your Career with AI-Driven Job Matches</div>
          <div>
            <div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84416316-stock-photo-hand-pointing-to-online-course.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-black">
                      AI-Recommended Courses for Skill Development{" "}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Discover job opportunities through skill tests and
                    assessments.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-black-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84416316-stock-photo-hand-pointing-to-online-course.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-black">
                        AI-Recommended Courses for Skill Development{" "}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Discover job opportunities through skill tests and
                      assessments.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-black-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84416316-stock-photo-hand-pointing-to-online-course.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-black">
                        AI-Recommended Courses for Skill Development{" "}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Discover job opportunities through skill tests and
                      assessments.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-black-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
