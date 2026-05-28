import { useState, useMemo } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convertedAmount = useMemo(() => amount * (currencyInfo[to] || 0), [amount, to, currencyInfo])

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
  }

  return (
    <div
        className="w-full min-h-screen flex flex-col justify-between bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="flex-1 flex items-center justify-center w-full py-10">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>

        <footer className="w-full py-3 text-center backdrop-blur-sm bg-black/30">
            <p className="text-white/60 text-xs tracking-wide">
                Made with <span className="text-red-400">❤️</span> by{" "}
                <a
                    href="https://github.com/Prem-Thakur786"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-300 font-semibold hover:text-white transition-colors duration-200"
                >
                    Prem.Thakur1618
                </a>
            </p>
        </footer>
    </div>
);
}

export default App