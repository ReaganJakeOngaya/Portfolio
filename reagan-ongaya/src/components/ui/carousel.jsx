import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => api?.off("select", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden w-full h-full">
      <div ref={ref} className={cn("flex h-full", orientation === "horizontal" ? "" : "flex-col", "will-change-transform", className)} {...props} style={{ transform: 'translateZ(0)' }} />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("min-w-0 shrink-0 grow-0 basis-full h-full overflow-y-auto will-change-transform", className)} {...props} style={{ transform: 'translateZ(0)' }} />
));
CarouselItem.displayName = "CarouselItem";

// Shared nav button styles
const navBtnClass = cn(
  "absolute z-20 h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center",
  "bg-[hsl(var(--card))] border border-[hsl(var(--border))]",
  "shadow-[var(--shadow-soft)]",
  "hover:shadow-[var(--shadow-card)] hover:scale-110 active:scale-95",
  "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100",
  "transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
);

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      ref={ref}
      className={cn(
        navBtnClass,
        orientation === "horizontal"
          ? "left-2 md:left-4 lg:left-5 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4 text-[hsl(var(--foreground))]" />
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      ref={ref}
      className={cn(
        navBtnClass,
        orientation === "horizontal"
          ? "right-2 md:right-4 lg:right-5 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-[hsl(var(--foreground))]" />
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselDots = ({ className, ...props }) => {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  React.useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, [api]);

  const scrollTo = (index) => api?.scrollTo(index);

  if (!scrollSnaps.length) return null;

  return (
    <div
      className={cn("flex justify-center items-center gap-1.5 py-3 absolute bottom-3 left-1/2 -translate-x-1/2 z-20", className)}
      {...props}
    >
      {/* Pill container */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
        bg-[hsl(var(--card)/0.85)] backdrop-blur-sm
        border border-[hsl(var(--border))]
        shadow-[var(--shadow-soft)]">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : "false"}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 ease-out",
              "focus-visible:outline-none",
              "hover:opacity-80",
              index === selectedIndex
                ? "w-5 bg-[hsl(var(--foreground))]"
                : "w-1.5 bg-[hsl(var(--muted-foreground)/0.4)]"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots };