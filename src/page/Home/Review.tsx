import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Feedback() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="dark:bg-white ">
      <section className="pb-8 mx-auto  max-w-7xl">
        <div className="py-4 text-center md:py-8">
          <h4 className="text-base font-bold tracking-wide text-center uppercase text-[#FC7E01]">
            Customer Reviews
          </h4>
          <p className="mt-2 tracking-tight text-gray-900 dark:text-white text:2xl md:text-4xl">
            What Our Readers Say
          </p>
        </div>
        <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="user avatar"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Arif Hossain
                  </h6>
                  <p className="text-sm text-gray-500">College Student</p>
                </div>
              </div>
            </div>
            <p className="mt-8">
              I found all the books I needed for my semester here. Fast delivery
              and great packaging. The discounts on academic books are
              unbeatable!
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="user avatar"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Sima Akter
                  </h6>
                  <p className="text-sm text-gray-500">Book Lover</p>
                </div>
              </div>
            </div>
            <p className="mt-8">
              The collection of novels and poetry is amazing! I got my favorite
              author's latest release with a special bookmark. Highly
              recommended for fellow readers!
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="user avatar"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Rakib Ahmed
                  </h6>
                  <p className="text-sm text-gray-500">Freelance Writer</p>
                </div>
              </div>
            </div>
            <p className="mt-8">
              This book shop has a fantastic section for writing guides and
              literature. The website is user-friendly, and I love their quick
              support.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/55.jpg"
                alt="user avatar"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Nazma Begum
                  </h6>
                  <p className="text-sm text-gray-500">
                    Primary School Teacher
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-8">
              I bought storybooks for my students, and they absolutely love
              them. Colorful illustrations and engaging content make learning
              fun.
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/39.jpg"
                alt="user avatar"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Imran Kabir
                  </h6>
                  <p className="text-sm text-gray-500">Bookstore Owner</p>
                </div>
              </div>
            </div>
            <p className="mt-8">
              As a small bookstore owner, I source many of my titles from here.
              Their wholesale prices and prompt service help me keep my
              customers happy.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/42.jpg"
                alt="user avatar"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    Farzana Rahman
                  </h6>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
            </div>
            <p className="mt-8">
              My children love the activity books and educational materials I
              got from this shop. The quality is excellent, and it helps them
              stay engaged.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
