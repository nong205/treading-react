import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
const AssetTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24H</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium flex items-center gap-2">
              <Avatar className="-z-50">
                <AvatarImage
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  className="h-6 w-6"
                />
              </Avatar>
              <span className="text-sm">Bitcoin</span>
            </TableCell>
            <TableCell>BTC</TableCell>
            <TableCell>31318326319</TableCell>
            <TableCell>2285239890721</TableCell>
            <TableCell>0.5075</TableCell>
            <TableCell className="text-right">$579.69</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default AssetTable
