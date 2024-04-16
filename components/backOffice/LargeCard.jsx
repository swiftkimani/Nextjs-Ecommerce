import { Layers } from 'lucide-react'

export default function LargeCard({className}) {
  return (
      <div className={`rounded-lg text-white shadow-md p-8 flex items-center
    flex-col gap-2 ${className}`}>
      <Layers />
      <h4>Todays Orders</h4>
      <h2 className='text-3xl'>Ksh 10800</h2>
    </div>
  );
}
