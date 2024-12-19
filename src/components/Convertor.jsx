import React, { useState } from "react";
import DropdownItem from "./Dropdown";

const Convertor = () => {
  const [data, setData] = useState({
    paymentChoice: {},
    paymentToken: {},
    youPay: "1",
    youGet: "",
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="w-96 overflow-y-hidden bg-white border-2 border-black border-b-8 border-r-8 pb-2 rounded-3xl mt-16 h-fit ">
      <div
        id="mob"
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
              $2130{" "}
            </span>
            / $7330
          </div>
          $2,022,020 of $5,555,555
          <div className="h-[1px] bg-black"></div>
          <div className="flex w-full justify-between my-1 items-center">
            <div className="text-sm font-semibold flex items-center gap-1">
              Current Price{" "}
              <span className="text-yellow-800 bg-gray-100 px-1 rounded-sm">
                $0.009
              </span>
            </div>
            <div className="text-sm font-semibold flex items-center gap-1">
              Next Price{" "}
              <span className="text-yellow-800 bg-gray-100 px-1 rounded-sm">
                $0.009
              </span>
            </div>
          </div>
          <div className="w-full h-5 pt-3 py-2 bg-white rounded-full flex items-center">
            <div className="px-2 w-fit h-fit bg-black text-xs text-white py-2 rounded-xl">
              5.9%
            </div>
          </div>
          <p className="text-xs pt-3">
            Buy $GTPR before the price increases by 22.22%
          </p>
        </div>
      </div>
      <div className="px-4 flex flex-col ">
        <DropdownItem
          label={"Select Payment Method"}
          itm={data}
          namex="paymentChoice"
          setItem={setData}
          options={[
            {
              id: "1",
              title: "Bitcon_choice",
              src: "https://imgs.search.brave.com/QlbJL9MSDfanEuM2QM7pAng9wJb51u7HghyYiBcONvc/rs:fit:40:40:1:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy8x/L2xhcmdlL2JpdGNv/aW4ucG5nPzE2OTY1/MDE0MDA",
            },
            {
              id: "2",
              title: "Etherium_choice",
              src: "https://imgs.search.brave.com/ASU5HkLJLDzTMaUKqP1JeYiql6OwV7KPAu7my7sO8Kc/rs:fit:40:40:1:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy8y/NzkvbGFyZ2UvZXRo/ZXJldW0ucG5nPzE2/OTY1MDE2Mjg",
            },
          ]}
        />
        <DropdownItem
          label={"Select Token"}
          itm={data}
          namex="paymentToken"
          setItem={setData}
          options={[
            {
              id: "1",
              title: "USDT_selected",
              src: "https://imgs.search.brave.com/P4IVcNrVhKHGl6TKaauZhenfRflAukbdxE06ovzUZnc/rs:fit:40:40:1:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy8z/MjUvbGFyZ2UvVGV0/aGVyLnBuZz8xNjk2/NTAxNjYx",
            },
            {
              id: "2",
              title: "Etherium_selected",
              src: "https://imgs.search.brave.com/ASU5HkLJLDzTMaUKqP1JeYiql6OwV7KPAu7my7sO8Kc/rs:fit:40:40:1:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy8y/NzkvbGFyZ2UvZXRo/ZXJldW0ucG5nPzE2/OTY1MDE2Mjg",
            },
          ]}
        />
        <div className="flex h-24 gap-2 w-full">
          <div className="w-1/2 h-16 flex flex-col gap-1">
            <p className="pl-4">You Pay {data.paymentChoice?.title}</p>
            <div className="rounded-full flex gap-1 items-center bg-gray-300 p-2 w-full">
              <img
                src={
                  data.paymentChoice?.src ||
                  "https://imgs.search.brave.com/ASU5HkLJLDzTMaUKqP1JeYiql6OwV7KPAu7my7sO8Kc/rs:fit:40:40:1:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL2Nv/aW5zL2ltYWdlcy8y/NzkvbGFyZ2UvZXRo/ZXJldW0ucG5nPzE2/OTY1MDE2Mjg"
                }
                alt="payment-choice"
              />
              <p className="text-xl flex text-gray-500  font-semibold">
                $
                <input
                  name="youPay"
                  value={data.youPay}
                  className="bg-transparent w-24 active:border-0"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                ></input>{" "}
                <span className="text-xs"></span>
              </p>
            </div>
          </div>
          <div className="w-1/2 flex h-16 flex-col gap-1">
            <p className="pl-4">You Recieve</p>
            <div className="rounded-full flex gap-1 items-center bg-gray-300 p-2 w-full">
              <img src="/dollar.png" alt="goatcoin" className="h-10" />
              <p className="text-xl text-gray-500 font-semibold">
                $1.20 <span className="text-xs">(1.1)</span>
              </p>
            </div>
          </div>
        </div>
        <button
          aria-label="click-to-convert"
          name="click_to_convertor"
          className="px-4 bg-sky-600 py-3 rounded-full text-white "
          onClick={() => {
            console.log(data);
          }}
        >
          Connect To Wallet
        </button>
      </div>
    </div>
  );
};

export default Convertor;
