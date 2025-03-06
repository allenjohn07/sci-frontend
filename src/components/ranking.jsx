import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import "@cubing/icons";
import { Button } from "./ui/button";
import { events, rankingData, states } from "@/lib/rankings";

export default function RankingsPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container about_page_div px-4 md:px-8 py-8 md:py-14">
      <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Rankings
      </h1>

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

      {/* Ranking Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[80px]'>Rank</TableHead>
              <TableHead>WCA ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[100px] px-5">Result</TableHead>
              <TableHead>Competition</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankingData.map((item) => (
              <TableRow key={item.rank}>
                <TableCell className="font-semibold px-5">{item.rank}</TableCell>
                <TableCell className="text-nowrap">{item.wca_id}</TableCell>
                <TableCell className="text-nowrap">{item.name}</TableCell>
                <TableCell className="font-semibold px-5">{item.result}</TableCell>
                <TableCell className="text-nowrap">{item.competitionName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
