import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "../App.css";
import img1 from "../img/download.png";
import img2 from "../img/teletalk-sim-operator-logo-290AA1EA98-seeklogo.com.png";

const SIngleResult = () => {
    // random number start
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  useEffect(() => {
    setNum1(parseInt(Math.random() * 100));
    setNum2(parseInt(Math.random() * 100));
  }, []);

  const result = num1 + num2;
// random number end

// state here
  const { register, handleSubmit, reset } = useForm();
  const [statusCode, setStatusCode] = useState("");
  const [results, setresults] = useState([]);
  // state here end

  // submit button and api call here
  const onSubmit = (data) => {
    fetch("https://radiant-sierra-69668.herokuapp.com/result", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setStatusCode(res.status);
        return res.json();
      })
      .then((data) => setresults(data));
  };

  const [helo, seHello] = useState(false);

  //onchange of sumation value of ui

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

  //sweetalart

  if (statusCode === 500) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No result found, Try again",
      footer: "Powerd by talitalk",
    });
  }
  
  if (statusCode === 200) {
    console.log(results);

    const reload = () => {
      window.location.reload();
    };

    return (
      <div className="flex justify-center items-center h-96">
        <div className="bg-gray-500 p-10 rounded-2xl text-white">
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Name : </span>
            {results?.name}
          </h1>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Examination : </span>
            {results?.examinition}
          </h1>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Board : </span>
            {results?.board}
          </h1>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Roll no : </span>
            {results?.roll}
          </h1>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Ragistration no : </span>
            {results?.ragistration}
          </h1>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Grade : </span>
            {results?.grade}
          </h1>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold">Passing year : </span>
            {results?.year}
          </h1>
          <div className="text-end mt-3">
            <button onClick={reload} class="btn btn-xs">
              ok
            </button>
          </div>
        </div>
      </div>
    );
  }
  //reload

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 bg-white p-4 border-2">
        <div className="bg-gray-300 rounded-lg flex mb-4">
          <div className="p-2 mr-5 flex items-center">
            <div className="p-5">
              <img className="w-32 rounded-full" src={img1} alt="" />
            </div>
          </div>
          <div className="bg-green-300 w-full">
            <div className="bgColor">
              <div className="flex justify-between bordeTop">
                <div>
                  <h3 className="ml-2 text-2xl font-bold pt-1 textColor">
                    Ministry of Education
                  </h3>
                </div>
                <div>
                  <img
                    className=""
                    src="http://www.educationboardresults.gov.bd/images/banner_flag.jpg"
                    alt=""
                  />
                </div>
              </div>
              <h2 className="ml-2 text-2xl font-bold pt-2 pb-1 text-white">
                Itermidiet and Secondary Education Boards Bangladesh
              </h2>
            </div>
            <hr />
            <div className="text-end bgDownColor">
              <p className="text-white pr-1">
                Official Website of Education board
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="m-5 md:mx-20 md:border-2">
            <form className="py-5 md:px-32" onSubmit={handleSubmit(onSubmit)}>
              {/* <label className="pr-20 bg-slate-400" htmlFor="">Examinition:</label>
              <input className="input input-bordered input-sm rounded-none" type="text" /> */}
              <div className="flex items-center justify-center md:justify-between">
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
                    {...register("examinition")}
                    className="input w-full input-bordered bg-white input-xs rounded-none"
                  >
                    <option value="HSC">H.S.C</option>
                    <option value="SSC">S.S.C</option>
                    <option value="DHAKIL">DHAKIL</option>
                  </select>
                  <br />
                  <select
                    {...register("year")}
                    className="input w-full bg-white input-bordered input-xs rounded-none"
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
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                  </select>
                  <br />
                  <select
                    {...register("board")}
                    className="input w-full bg-white input-bordered input-xs rounded-none"
                  >
                    <option value="barisal">Barisal</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="cumilla">Cumilla</option>
                    <option value="khulna">Khulna</option>
                    <option value="rashahi">Rashahi</option>
                    <option value="chattogram">Chattogram</option>
                    <option value="dinajpur">Dinajpur</option>
                  </select>
                  <br />
                  <input
                    {...register("roll")}
                    className="input bg-white input-bordered input-xs rounded-none"
                    type="number"
                  />
                  <br />
                  <input
                    {...register("ragistration")}
                    className="input bg-white input-bordered input-xs rounded-none"
                    type="number"
                  />
                  <br />
                  <input
                    onChange={handelImagUpload}
                    className="input bg-white input-bordered input-xs rounded-none"
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex justify-center md:justify-end mt-5">
                <button
                  onClick={resetData}
                  className="btn btn-xs px-2 text-black mr-2 bg-gray-200 rounded-md"
                >
                  {" "}
                  Reset
                </button>
                <input
                  disabled={!helo ? true : false}
                  className="btn btn-xs px-2 text-black mr-2 bg-gray-200 rounded-md"
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

export default SIngleResult;
