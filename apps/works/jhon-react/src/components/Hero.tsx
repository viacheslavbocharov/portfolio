import Container from './Container';
import jhon from '../assets/img/photo.png';

export default function Hero() {
  return (
    <section>
      <Container
        className={
          'flex flex-col-reverse items-center sm:items-start sm:flex-row sm:justify-between gap-8 mb-14 sm:mb-16'
        }
      >
        <div>
          <h1 className="text-page-title mb-5 md:mb-10 text-center sm:text-left">
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <p className="text-main max-w-lg mb-5 md:mb-10 text-center sm:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-[var(--color-accent)] px-5 py-2.5 rounded-xs text-xl text-white font-medium mx-auto sm:mx-0 block sm:inline-block">
            Download Resume
          </button>
        </div>
        <div className="relative size-44 md:size-60 flex">
          <img
            className="relative size-44 md:size-60 -z-10 object-cover shrink-0"
            src={jhon}
            alt="John"
          />
          <div className="absolute inset-0 size-44 md:size-60 rounded-full bg-[#EDF7FA] translate-y-2.5 -z-20"></div>
        </div>
      </Container>
    </section>
  );
}
