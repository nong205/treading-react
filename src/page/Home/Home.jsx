import { Button } from '@/components/ui/button'
import React from 'react'
import AssetTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DotIcon, MessageCircle } from 'lucide-react'
import { Cross1Icon } from '@radix-ui/react-icons'

const Home = () => {
  const [category, setCategory] = React.useState('all')
  const handleCategory = (value) => {
    setCategory(value)
  }
  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory('all')}
              variant={category == 'all' ? 'default' : 'outline'}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory('top50')}
              variant={category == 'top50' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory('topGainers')}
              variant={category == 'topGainers' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory('topLosers')}
              variant={category == 'topLosers' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>

        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center mt-5">
            <div>
              <Avatar>
                <AvatarImage
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  className="h-6 w-6"
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm">ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400 text-sm">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5565</p>
                <p className="text-red-600">
                  <span>-1319049822.578</span>
                  <span>(-0.29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot section */}
      <section className="absolute bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900 relative">
          <div className="absolute top-2 right-2">
            <Button variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>
          <div className="p-4 text-white text-base font-semibold">Chat Bot</div>

          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                <p>hello</p>
                <p>how are you?</p>
                <p>what is your name?,and me toi khong noi nua....</p>
              </div>
            </div>

            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                <p>hi,...</p>
              </div>
            </div>

            {[1, 1, 1, 1, 1, 1].map((item, i) => (
              <div
                key={i}
                className={` ${i % 2 == 0 ? 'self-start' : 'self-end'} 'pb-5 w-auto'`}
              >
                {i % 2 == 0 ? (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>prompt who are you</p>
                  </div>
                ) : (
                  //cho nay ne...........xong se tách xen kẽ tin nhắn ra
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>ans hi, hehee</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-[10rem] cursor-pointer group">
          <Button className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-2xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
