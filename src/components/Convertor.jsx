import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import {
  Wallet,
  DollarSign,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Search,
  Clock,
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

// Constants
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 100000;

const API_BASE_URL = "https://api.faceafrika.com/api/v1";
const PAYMENT_API_URL = "https://api.faceafrika.com/api/v1/gotapper";
const NOWPAYMENTS_BASE_URL = "https://nowpayments.io";

const PaymentStatusModal = ({ status, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    if (status === "pending") {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onClose(); // Close the modal when countdown finishes
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer); // Cleanup timer
    }
  }, [status, onClose]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  const statusConfig = {
    pending: {
      icon: <Loader2 className="h-8 w-8 text-yellow-600 animate-spin" />,
      bgColor: "bg-yellow-50",
      title: "Processing Payment",
      message:
        "Your payment is being processed. Equivalent amount of GTPR tokens will be deposited once the payment is confirmed.",
    },
    finished: {
      icon: <CheckCircle2 className="h-8 w-8 text-green-600" />,
      bgColor: "bg-green-50",
      title: "Payment Successful!",
      message: "Your GTPR tokens will be credited to your wallet shortly.",
    },
    failed: {
      icon: <AlertCircle className="h-8 w-8 text-red-600" />,
      bgColor: "bg-red-50",
      title: "Payment Failed",
      message:
        "We couldn't process your payment. Please try again or contact support.",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center gap-4">
          <div className={`${currentStatus.bgColor} p-4 rounded-full`}>
            {currentStatus.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {currentStatus.title}
          </h3>
          <p className="text-center text-gray-600">{currentStatus.message}</p>
          {status === "pending" && (
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="h-5 w-5" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CurrencyList = ({ currencies, searchQuery, onSelect }) => {
  const filteredCurrencies = Array.isArray(currencies)
    ? currencies.filter(
        (currency) =>
          currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          currency.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="max-h-60 overflow-y-auto">
      {filteredCurrencies.length > 0 ? (
        filteredCurrencies.map((currency) => (
          <div
            key={currency.id}
            onClick={() => onSelect(currency)}
            className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
          >
            <img
              src={`${NOWPAYMENTS_BASE_URL}${currency.logo_url}`}
              alt={currency.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{currency.code}</span>
                <span className="px-1.5 py-0.5 text-xs font-medium bg-gray-100 rounded">
                  {currency.network}
                </span>
              </div>
              <div className="text-sm text-gray-500">{currency.name}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-sm text-gray-500">No currencies found.</div>
      )}
    </div>
  );
};

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-8 w-full mb-4 rounded-md"></div>
    <div className="bg-gray-200 h-8 w-3/4 mb-4 rounded-md"></div>
    <div className="bg-gray-200 h-8 w-1/2 mb-4 rounded-md"></div>
  </div>
);

const ProgressHeader = () => {
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        await axios.get(`${API_BASE_URL}/gotapper/update-campaigns`);
        await axios.get(`${API_BASE_URL}/gotapper/update-campaign-statuses`);
        const response = await axios.get(
          `${API_BASE_URL}/gotapper/active-campaigns`
        );
        const data = response?.data[0];
        setProgressData(data);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };

    fetchProgressData();
  }, []);

  if (!progressData) {
    return (
      <div>
        {" "}
        <SkeletonLoader />
      </div>
    );
  }
  const {
    raised_amount,
    target_amount,
    current_price,
    next_price,
    percentage,
  } = progressData;

  const progress = (raised_amount / target_amount) * 100;

  return (
    <div
      className="w-full mb-8 min-h-1/3 border-b-2 flex flex-col gap-2 p-4 border-black"
      style={{
        background:
          "linear-gradient(120deg, #F7A600 0%, #FFFF32 3.89%, #F7A600 39.07%)",
      }}
    >
      <div className="text-black font-bold text-2xl">Buy $GTPR Coin</div>
      <div className="flex flex-col">
        <div className="text-lg font-semibold">USD Raised</div>
        <div>
          <span
            className="text-5xl tracking-wider font-[boldx] text-white"
            style={{
              textShadow: "4px 5px 0 #000",
              WebkitTextStrokeWidth: "1.3px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            ${raised_amount}{" "}
          </span>
          / ${Number(target_amount).toLocaleString()}
        </div>
        <div className="h-[1px] bg-black"></div>
        <div className="flex w-full justify-between my-1 items-center">
          <div className="text-sm font-semibold flex items-center gap-1">
            Current Price{" "}
            <span className="text-yellow-800 bg-gray-100 px-1 rounded-sm">
              ${current_price}
            </span>
          </div>
          <div className="text-sm font-semibold flex items-center gap-1">
            Next Price{" "}
            <span className="text-yellow-800 bg-gray-100 px-1 rounded-sm">
              ${next_price}
            </span>
          </div>
        </div>
        <div className="w-full h-5 pt-3 py-2 bg-white rounded-full flex items-center">
          <div className="px-2 w-fit h-fit bg-black text-xs text-white py-2 rounded-xl">
            GTPR
          </div>
        </div>
        <p className="text-xs pt-3">
          Buy $GTPR before the price increases by {percentage}%
        </p>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-3">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Convertor = () => {
  const [data, setData] = useState({ youPay: "", youReceive: "" });
  const [currencies, setCurrencies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(
    "solana" in window
  );
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showCurrencyList, setShowCurrencyList] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gotapper/currency`);
        const data = await response.json();

        const currencies = data.currencies; // Access the currencies array
        if (!Array.isArray(currencies)) {
          throw new Error(
            "Invalid data format: Expected an array in data.currencies"
          );
        }
        setCurrencies(currencies); // Set the currencies state
      } catch (error) {
        console.error("Error fetching currencies:", error);
        setCurrencies([]); // Fallback to an empty array in case of an error
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const paymentId = localStorage.getItem("paymentId");
      if (!paymentId || !showModal) return;

      try {
        const response = await axios.post(`${PAYMENT_API_URL}/check`, {
          paymentId,
        });

        const status = response.data.data;
        setPaymentStatus(status);

        if (status === "finished" || status === "failed") {
          localStorage.removeItem("paymentId");
          setTimeout(() => {
            setShowModal(false);
            setPaymentStatus(null);
          }, 100000);
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
        toast.error("Failed to check payment status");
      }
    };

    const intervalId = setInterval(checkPaymentStatus, 4000);
    return () => clearInterval(intervalId);
  }, [showModal]);

  const validateAmount = (value) => {
    const numValue = parseFloat(value);

    if (value === "") {
      setInputError("");
      return false;
    }
    if (isNaN(numValue) || numValue <= 0) {
      setInputError("Amount must be a positive number");
      return false;
    }
    if (numValue < MIN_AMOUNT) {
      setInputError(`Minimum amount is $${MIN_AMOUNT}`);
      return false;
    }
    if (numValue > MAX_AMOUNT) {
      setInputError(`Maximum amount is $${MAX_AMOUNT}`);
      return false;
    }

    setInputError("");
    return true;
  };

  const handleChange = (name, value) => {
    const isValid = validateAmount(value);
    const numericValue = isValid ? parseFloat(value) : 0;

    setData({
      ...data,
      [name]: value,
      youReceive: isValid ? (numericValue / 0.04).toFixed(3) : "0.000",
    });
  };

  const connectWallet = useCallback(async () => {
    if (!isPhantomInstalled) {
      window.open("https://phantom.app/", "_blank");
      return;
    }

    try {
      const { solana } = window;

      if (solana?.isPhantom) {
        const response = await solana.connect();
        const publicKey = response.publicKey.toString();
        setWalletAddress(publicKey);

        solana.on("connect", () => {
          setWalletAddress(solana.publicKey.toString());
          toast.success("Wallet connected successfully!");
        });

        solana.on("disconnect", () => {
          setWalletAddress(null);
          toast.error("Wallet disconnected");
        });

        setStep(2);
      }
    } catch (error) {
      console.error("Error connecting to Phantom wallet:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  }, [isPhantomInstalled]);

  const handleSend = async () => {
    if (!validateAmount(data.youPay)) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (!selectedCurrency) {
      toast.error("Please select a currency");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${PAYMENT_API_URL}/request-pay`, {
        Address: walletAddress,
        amount: parseFloat(data.youPay),
        currency: selectedCurrency.ticker,
      });

      if (response.data?.invoiceUrl) {
        const paymentId = new URLSearchParams(
          new URL(response.data.invoiceUrl).search
        ).get("paymentId");

        if (paymentId) {
          localStorage.setItem("paymentId", paymentId);
          setPaymentStatus("pending");
          setShowModal(true);
        }

        toast.success("Transaction initiated successfully!");
        window.open(response.data.invoiceUrl, "_blank");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error(
        error?.response?.data?.message ||
          "Transaction failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      <Toaster position="top-right" />
      {showModal && (
        <PaymentStatusModal
          status={paymentStatus}
          onClose={() => {
            setShowModal(false);
            setPaymentStatus(null);
          }}
        />
      )}

      <ProgressHeader />

      <div className="p-6 space-y-6">
        {!isPhantomInstalled && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium flex items-center gap-2">
            <ExternalLink size={18} />
            Please install the Phantom Wallet to proceed
          </div>
        )}

        {step === 1 ? (
          <button
            id="wallet"
            onClick={connectWallet}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <Wallet size={20} />
            {!isPhantomInstalled
              ? "Install Wallet"
              : walletAddress
              ? `Connected: ${walletAddress.slice(
                  0,
                  4
                )}...${walletAddress.slice(-4)}`
              : "Connect Wallet"}
          </button>
        ) : (
          <div className="space-y-6">
            <div className="relative">
              <div
                onClick={() => setShowCurrencyList(!showCurrencyList)}
                className="cursor-pointer p-4 border rounded-xl flex items-center justify-between"
              >
                {selectedCurrency ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={`${NOWPAYMENTS_BASE_URL}${selectedCurrency.logo_url}`}
                      alt={selectedCurrency.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {selectedCurrency.code}
                        </span>
                        <span className="px-1.5 py-0.5 text-xs font-medium bg-gray-100 rounded">
                          {selectedCurrency.network}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {selectedCurrency.name}
                      </div>
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500">Select Currency</span>
                )}
                <ArrowRight className="text-gray-400" size={20} />
              </div>

              {showCurrencyList && (
                <div className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg">
                  <div className="p-3 border-b">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Type a currency"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      />
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                    </div>
                  </div>
                  <CurrencyList
                    currencies={currencies}
                    searchQuery={searchQuery}
                    onSelect={(currency) => {
                      setSelectedCurrency(currency);
                      setShowCurrencyList(false);
                    }}
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                You Pay (USD)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  name="youPay"
                  value={data.youPay}
                  onChange={(e) => handleChange("youPay", e.target.value)}
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step="0.01"
                  className={`block w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent ${
                    inputError ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Enter amount"
                />
              </div>
              {inputError && (
                <div className="text-red-500 text-sm flex items-center gap-1 mt-1">
                  <AlertCircle size={14} />
                  {inputError}
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <ArrowRight className="text-gray-400" size={24} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                You Receive (GTPR)
              </label>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="text-2xl font-semibold text-gray-900">
                  {data.youReceive || "0.000"} GTPR
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Rate: 1 GTPR = $0.01 USD
                </div>
              </div>
            </div>
            {walletAddress && (
              <button
                id="wallet"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                Connected: {walletAddress.slice(0, 6)}...
                {walletAddress.slice(-4)}
              </button>
            )}

            <button
              id="sendbtn"
              onClick={handleSend}
              disabled={
                loading || !!inputError || !data.youPay || !selectedCurrency
              }
              className={`w-full py-4 rounded-xl font-medium text-white transition-colors flex items-center justify-center gap-2 ${
                loading || !!inputError || !data.youPay || !selectedCurrency
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-spin">⚪</span>
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle2 size={20} />
                  Send
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Convertor;
