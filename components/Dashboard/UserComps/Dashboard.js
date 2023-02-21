import React from 'react';
import { FaArrowUp, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  AreaChart,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    users: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    users: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    users: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    users: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    users: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    users: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    users: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    users: 5460,
    pv: 2390,
    amt: 3652,
  },
  {
    name: 'Sept',
    users: 2450,
    pv: 3641,
    amt: 1045,
  },
  {
    name: 'Oct',
    users: 2014,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    users: 3490,
    pv: 4236,
    amt: 5123,
  },
  {
    name: 'Dec',
    users: 6428,
    pv: 4369,
    amt: 3459,
  },
];

const Dashboard = () => {
  return (
    <div className="md:pt-[6rem] pt-[4.5rem] px-2  ">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3">
        {/* Card 1 */}
        <div className="card card-compact bg-[#321FDB] text-white shadow-xl">
          <div className="p-5">
            <p>26K</p>
            <h2 className="card-title">Users</h2>
          </div>
        </div>
        {/* card 2 */}
        <div className="card card-compact bg-[#3399FF] text-white shadow-xl">
          <div className="p-5">
            <p>$6200</p>
            <h2 className="card-title">Income</h2>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card card-compact  bg-[#F9B115] text-white shadow-xl">
          <div className="p-5">
            <p>2.49%</p>
            <h2 className="card-title">Conversion Rate</h2>
            {/* <LineChart width={50} height={50}>
              <Line dataKey="pv" />
            </LineChart> */}
          </div>
        </div>
      </div>

      {/*------------- chart --------------------*/}
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      {/* Social Media Links */}
      <div className="grid md:gap-2 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:my-3 my-5">
        {/* Social FB */}
        <div className="card card-compact text-white shadow-xl">
          <div className="bg-[#3B5998]">
            <div className="p-5">
              <label className="flex justify-center">
                <FaFacebookF />
              </label>
            </div>
          </div>
          <div className="card card-body text-black">
            <div className="flex w-full">
              <div className="grid h-10 flex-grow place-items-center">
                <h2>89K</h2>
                <p>FRIENDS</p>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow place-items-center">
                <h2>459</h2>
                <p>FEEDS</p>
              </div>
            </div>
          </div>
        </div>
        {/* Social Twitter */}
        <div className="card card-compact text-white shadow-xl">
          <div className="bg-[#00ACED]">
            <div className="p-5">
              <label className="flex justify-center">
                <FaTwitter />
              </label>
            </div>
          </div>
          <div className="card card-body text-black">
            <div className="flex w-full">
              <div className="grid h-10 flex-grow place-items-center">
                <h2>973k</h2>
                <p>FOLLOWERS</p>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow place-items-center">
                <h2>792</h2>
                <p>TWEETS</p>
              </div>
            </div>
          </div>
        </div>
        {/* Social Linkedin */}
        <div className="card card-compact text-white shadow-xl">
          <div className="bg-[#4875B4]">
            <div className="p-5">
              <label className="flex justify-center">
                <FaLinkedin />
              </label>
            </div>
          </div>
          <div className="card card-body text-black">
            <div className="flex w-full">
              <div className="grid h-10 flex-grow place-items-center">
                <h2>500+</h2>
                <p>CONTACTS</p>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-10 flex-grow place-items-center">
                <h2>292</h2>
                <p>FEEDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
