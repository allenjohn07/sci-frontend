import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Button } from "./ui/button";
  import { events, states } from "@/lib/rankings";
  import "@cubing/icons";

const RankingFilter = () => {
  return (
    <div>
        {/* Ranking Filters */}
      <div className="grid gap-3 md:gap-6 md:grid-cols-4 mb-8">
        <div className="space-y-2 md:col-span-1">
          <label htmlFor="event-select" className="text-sm font-medium">
            Event
          </label>
          <Select>
            <SelectTrigger id="event-select" className="w-full">
              <SelectValue placeholder="Select event" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {events?.map((event, index) => {
                  return (
                    <SelectItem value={event.eventId} key={index}>
                      <span
                        className={`cubing-icon event-${event.eventId} mr-2`}
                      ></span>
                      {event.eventName}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-1">
          <label htmlFor="state-select" className="text-sm font-medium">
            State
          </label>
          <Select>
            <SelectTrigger id="state-select" className="w-full">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {states.map((state, index) => {
                  return (
                    <SelectItem value={state} key={index}>
                      {state}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-1">
          <label htmlFor="type-select" className="text-sm font-medium">
            Type
          </label>
          <Select>
            <SelectTrigger id="type-select" className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="average">Average</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-1 flex items-end py-2 md:py-0">
          <Button className="w-full">Show Results</Button>
        </div>
      </div>
    </div>
  )
}

export default RankingFilter