import { Button } from "../ui/button";
import { Typewriter } from 'react-simple-typewriter'

export const HeroSection = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-6 lg:py-2">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
             <h1 className="text-[#ff3e00] text-2xl sm:text-3xl md:text-4xl lg:text-5xl truncate font-bold tracking-tighter py-2">
      <Typewriter
        words={['Hey👋, I am Yash Parmar', "Full Stack Web Developer", "PHP Developer", "ReactJS Developer"]}
        loop={false}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experienced PHP and ReactJS developer specializing in creating
                  dynamic, user-friendly web applications. Passionate about
                  clean code, modern frameworks, and delivering high-quality
                  solutions. Adept in both front-end and back-end development,
                  ensuring seamless integration and functionality. Let build
                  something great together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant={"default"} size={"default"}>
                  View Projects
                </Button>
                <Button variant={"outline"} size={"default"}>
                  Contact Me
                </Button>
              </div>
            </div>

            <img
              src="https://keelanjon.com/static/illustration-keelanjon-68a9ba2959b48c1bef6a8a8246779e2b.png"
              width="350"
              height="350"
              alt="Hero"
              className="mx-auto aspect-auto overflow-hidden object-cover sm:w-full"
            />

          </div>
        </div>
      </section>
    </main>

  );
};
