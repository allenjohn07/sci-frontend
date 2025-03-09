import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { fetchRankings } from '@/api/fetchRankings';


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
              <TableRow key={item.rank}>
                <TableCell className="font-semibold px-5">{item.rank}</TableCell>
                <TableCell className="text-nowrap">{item.wca_id}</TableCell>
                <TableCell className="text-nowrap">{item.name}</TableCell>
                <TableCell className="font-semibold px-5">{(item.result/100).toFixed(2)}</TableCell>
                <TableCell className="text-nowrap">{item.competitionName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div> : <p>No data found</p>}
    </div>
  )
}

export default RankingsTable