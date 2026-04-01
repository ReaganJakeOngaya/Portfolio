import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from "./components/ui/carousel";
import { ThemeToggle } from "./components/ThemeToggle";

// HeroSlide loads eagerly — it's the first thing the user sees
import HeroSlide from "./components/HeroSlide";

// All other slides are lazy-loaded — each becomes its own JS chunk
// that is only fetched when the user navigates close to it
const AboutSlide    = lazy(() => import("./components/AboutSlide"));
const SkillsSlide   = lazy(() => import("./components/SkillsSlide"));
const ProjectsSlide = lazy(() => import("./components/ProjectsSlide"));
const ServicesSlide = lazy(() => import("./components/ServicesSlide"));
const ContactSlide  = lazy(() => import("./components/ContactSlide"));

// ---------------------------------------------------------------------------
// SlideShell — memoized wrapper so CarouselItem children never re-render
// unless their own props change. Renders a Suspense boundary per slide so a
// slow chunk only suspends that one slot, not the whole carousel.
// ---------------------------------------------------------------------------
const SlideShell = ({ children }) => (
  <Suspense
    fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          {/* Minimal pulsing skeleton that matches the design system */}
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-[hsl(var(--border))] animate-spin"
            style={{ animationDuration: '1.5s' }} />
          <span className="text-xs text-[hsl(var(--muted-foreground))] tracking-widest uppercase">
            Loading
          </span>
        </div>
      </div>
    }
  >
    {children}
  </Suspense>
);

// ---------------------------------------------------------------------------
// Carousel options — defined outside the component so the object reference
// is stable and Embla never re-initialises on re-renders
// ---------------------------------------------------------------------------
const CAROUSEL_OPTS = {
  align: "start",
  loop: false,
  dragFree: false,
  containScroll: "trimSnaps",
  skipSnaps: false,
  duration: 200,
  // Smooth easing function for natural animation
  easing: (t) => {
    // Ease-out cubic for smooth deceleration
    return 1 - Math.pow(1 - t, 3);
  },
};

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------
function App() {
  const [api, setApi]           = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Stable callback — won't be recreated on every render
  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  // Scroll to a specific slide by index
  const scrollToSlide = useCallback((slideIndex) => {
    if (!api) return;
    api.scrollTo(slideIndex, true);
  }, [api]);

  // Register / cleanup the Embla listener properly
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api, onSelect]);

  // Memoize the isActive flags so slides only re-render when the active
  // index actually changes, not on every parent render
  const activeFlags = useMemo(() => ({
    hero:     activeIndex === 0,
    about:    activeIndex === 1,
    skills:   activeIndex === 2,
    projects: activeIndex === 3,
    services: activeIndex === 4,
    contact:  activeIndex === 5,
  }), [activeIndex]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[hsl(var(--background))]">
      <ThemeToggle />
      <Carousel
        opts={CAROUSEL_OPTS}
        setApi={setApi}
        className="w-full h-screen"
      >
        <CarouselContent className="h-full m-0">

          {/* Slide 0 — Hero (eager, no Suspense needed) */}
          <CarouselItem>
            <HeroSlide isActive={activeFlags.hero} onNavigate={scrollToSlide} />
          </CarouselItem>

          {/* Slide 1 — About */}
          <CarouselItem>
            <SlideShell>
              <AboutSlide isActive={activeFlags.about} />
            </SlideShell>
          </CarouselItem>

          {/* Slide 2 — Skills */}
          <CarouselItem>
            <SlideShell>
              <SkillsSlide isActive={activeFlags.skills} />
            </SlideShell>
          </CarouselItem>

          {/* Slide 3 — Projects */}
          <CarouselItem>
            <SlideShell>
              <ProjectsSlide isActive={activeFlags.projects} />
            </SlideShell>
          </CarouselItem>

          {/* Slide 4 — Services */}
          <CarouselItem>
            <SlideShell>
              <ServicesSlide isActive={activeFlags.services} />
            </SlideShell>
          </CarouselItem>

          {/* Slide 5 — Contact */}
          <CarouselItem>
            <SlideShell>
              <ContactSlide isActive={activeFlags.contact} />
            </SlideShell>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </div>
  );
}

export default App;