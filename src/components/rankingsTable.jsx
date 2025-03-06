import React from 'react'
import { rankingData } from "@/lib/rankings";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RankingsTable = () => {
  return (
    <div>
        {/* Ranking Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='rw-[80px]'>Rank</TableHead>
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
  )
}

export default RankingsTable