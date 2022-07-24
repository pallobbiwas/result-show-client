import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import img1 from "./img/download.png";
import img2 from "./img/teletalk-sim-operator-logo-290AA1EA98-seeklogo.com.png";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  useEffect(() => {
    setNum1(parseInt(Math.random() * 100));
    setNum2(parseInt(Math.random() * 100));
  }, []);

  const result = num1 + num2;

  // random number

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/result", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  const [helo, seHello] = useState(false);

  //img url set

  const handelImagUpload = (e) => {
    const res = parseInt(e.target.value);
    console.log(res, result);
    if (res === result) {
      seHello(true);
    }
  };

  //reset data

  const resetData = () => {
    reset();
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 bg-white p-4 border-2">
        <div className="bg-gray-300 rounded-lg flex mb-4">
          <div className="p-2 mr-5">
            <img className="w-20 rounded-full" src={img1} alt="" />
          </div>
          <div className="bg-green-300 w-full">
            <div className="bg-green-600 ">
              <h3 className="ml-2 text-3xl font-bold text-white">
                Ministry of Education
              </h3>
              <hr />
              <h2 className="ml-2 text-1xl font-bold text-white">
                Itermidiet and Secondary Education Board Bangladesh
              </h2>
            </div>
            <div className="text-end">
              <p className="">Official Website of Education board</p>
            </div>
          </div>
        </div>
        <div>
          <div className="m-5 mx-20 border-2">
            <form className="py-5 px-10" onSubmit={handleSubmit(onSubmit)}>
              {/* <label className="pr-20 bg-slate-400" htmlFor="">Examinition:</label>
              <input className="input input-bordered input-sm rounded-none" type="text" /> */}
              <div className="flex items-center justify-evenly">
                <div>
                  <label className="" htmlFor="">
                    Examinition :
                  </label>
                  <br />
                  <label className="" htmlFor="">
                    Year &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                  </label>
                  <br />
                  <label className="" htmlFor="">
                    Board &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
                  </label>
                  <br />
                  <label className="" htmlFor="">
                    Roll &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
                  </label>
                  <br />
                  <label className="" htmlFor="">
                    Reg.no &nbsp; &nbsp; &nbsp; &nbsp; :
                  </label>
                  <br />
                  <label className="" htmlFor="">
                    <span>
                      {num1} + {num2} ={" "}
                    </span>
                  </label>
                </div>
                <div>
                  <select
                    {...register("Examinition")}
                    className="input w-full input-bordered input-xs rounded-none"
                  >
                    <option value="hsc">H.S.C</option>
                    <option value="ssc">S.S.C</option>
                    <option value="dhakil">DHAKIL</option>
                  </select>
                  <br />
                  <select
                    {...register("year")}
                    className="input w-full input-bordered input-xs rounded-none"
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2010">2011</option>
                    <option value="2011">2000</option>
                  </select>
                  <br />
                  <select
                    {...register("board")}
                    className="input w-full input-bordered input-xs rounded-none"
                  >
                    <option value="Barishal">Barishal</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Cumilla">Cumilla</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rashahi">Rashahi</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Dinajpur">Dinajpur</option>
                  </select>
                  <br />
                  <input
                    {...register("roll")}
                    className="input input-bordered input-xs rounded-none"
                    type="number"
                  />
                  <br />
                  <input
                    {...register("ragistration")}
                    className="input input-bordered input-xs rounded-none"
                    type="number"
                  />
                  <br />
                  <input
                    onChange={handelImagUpload}
                    className="input input-bordered input-xs rounded-none"
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex justify-center mt-5">
                <button
                  onClick={resetData}
                  className="btn btn-sm bg-red-500 mr-5 outline-0"
                >
                  {" "}
                  Reset
                </button>
                <input
                  className="btn btn-sm bg-red-500 mr-5 outline-0"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mt-20 bordertop bg-gray-300 h-20 flex justify-between items-center px-4 rounded-lg">
          <div>
            <small>
              &copy;2005-2022,Ministry of education board, All right reserved
            </small>
          </div>
          <div>
            <img className="w-20" src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
