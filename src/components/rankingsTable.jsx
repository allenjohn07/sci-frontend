import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useQuery } from '@tanstack/react-query';
import { fetchRankings } from '../api/fetchRankings';
import { formatAttemptResult } from '../lib/attempt';


const RankingsTable = ({filterParams}) => { 

  //filterParams is converted to a string to be used as a query key
  const filterString = `${filterParams.event}-${filterParams.state}-${filterParams.type}`;
   
  const {data, isFetching, isError} = useQuery({
    queryKey: ['rankings'],
    queryFn: () => fetchRankings()
  })

  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <div>
      {data && data[filterString] ? <div className="rounded-md border">
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
            {data[filterString]?.map((item) => (
              <TableRow key={item.wca_id}>
                <TableCell className="font-semibold px-5">{item.rank}</TableCell>
                <TableCell className="text-nowrap">{item.wca_id}</TableCell>
                <TableCell className="text-nowrap">{item.name}</TableCell>
                <TableCell className="font-semibold px-5 text-nowrap">{formatAttemptResult(item?.result, filterParams?.event)}</TableCell>
                <TableCell className="text-nowrap">{item.competition_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div> : <p>No data found</p>}
    </div>
  )
}

export default RankingsTable