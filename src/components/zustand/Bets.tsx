import { useBetsStore } from '../../store/bets'

const Bets = () => {
  const { bets } = useBetsStore()
  return (
    <div>
      <h1 className="text-2xl">Bets</h1>
      <p>The bets displayed here are created in the <code className="bg-gray-200 text-red-700 font-semibold p-1">ZustandBasics.tsx</code> file and then
      displayed from the <code className="bg-gray-200 text-red-700 font-semibold p-1">Bets.tsx</code> file.</p>
      {bets.map((bet) => (
        <div key={bet.id}>{bet.name}</div>
      ))}
    </div>
  )
}

export default Bets