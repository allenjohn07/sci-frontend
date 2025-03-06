import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CardComponent from './card';

const PastCompetitions = ({ pastCompetitons }) => {
  return (
    <div className="space-y-5 pb-5">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b pb-2">
        Past Competitions
      </h4>
      <Carousel>
        <CarouselContent>
          {pastCompetitons?.map((competition) => (
            <CarouselItem
              key={competition.name}
              className="basis-1/2 md:basis-1/3"
            >
              <CardComponent
                compImg={`https://competition-posters.s3.us-west-2.amazonaws.com/${competition.compImg}`}
                name={competition.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PastCompetitions;
