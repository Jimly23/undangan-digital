
import React from "react";
import { 
  Carousel,
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto relative"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4 sm:pl-8">
            <TestimonialCard 
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="relative static mr-2 left-auto translate-y-0" />
        <CarouselNext className="relative static ml-2 right-auto translate-y-0" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
