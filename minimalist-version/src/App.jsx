import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from "./components/ui/carousel";
import { ThemeToggle } from "./components/ThemeToggle";
// import "./App.css";
import HeroSlide from "./components/HeroSlide";
import AboutSlide from "./components/AboutSlide";
import SkillsSlide from "./components/SkillsSlide";
import ProjectsSlide from "./components/ProjectsSlide";
import ServicesSlide from "./components/ServicesSlide";
import ContactSlide from "./components/ContactSlide";

function App() {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index when carousel slides change
  const onSelect = () => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  };

  if (api) {
    api.on("select", onSelect);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <ThemeToggle />
      <Carousel
        opts={{
          align: "start",
          loop: false,
          dragFree: false,
          containScroll: "trimSnaps",
          skipSnaps: false,
          duration: 25
        }}
        setApi={setApi}
        className="w-full h-screen"
      >
        <CarouselContent className="h-full m-0">
          <CarouselItem>
            <HeroSlide isActive={activeIndex === 0} />
          </CarouselItem>
          <CarouselItem>
            <AboutSlide />
          </CarouselItem>
          <CarouselItem>
            <SkillsSlide isActive={activeIndex === 2} />
          </CarouselItem>
          <CarouselItem>
            <ProjectsSlide />
          </CarouselItem>
          <CarouselItem>
            <ServicesSlide />
          </CarouselItem>
          <CarouselItem>
            <ContactSlide />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md border-border/50 hover:bg-background/95 hover:border-border shadow-lg transition-all duration-200 h-10 w-10 md:h-12 md:w-12" />
        <CarouselNext className="right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md border-border/50 hover:bg-background/95 hover:border-border shadow-lg transition-all duration-200 h-10 w-10 md:h-12 md:w-12" />
        <CarouselDots className="bottom-4 md:bottom-6 left-1/2 -translate-x-1/2" />
      </Carousel>
    </div>
  );
}

export default App;
