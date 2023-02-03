import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useSingleUser from '../hooks/useSingleUser';

const Leaderboard = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [singleUser] = useSingleUser()
  const [userRank, setUserRank] = useState()
  const [sortedArray, setSortedArray] = useState()

  useEffect(() => {
    setLoading(true);
    axios.get(`https://hello-talk-webserver.vercel.app/allusers`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (users) {
      setSortedArray(users.sort((a, b) => b.gems - a.gems));
    }
  }, [users])

  useEffect(() => {
    if (sortedArray && singleUser) {
      let userRank;
      sortedArray.forEach((user, index) => {
        if (user.email === singleUser.email) {
          userRank = index + 1;
        }
      });
      setUserRank(userRank);
    }
  }, [sortedArray, singleUser])
  let rank = 1;
  return (
    <>
      {/*------------------ Leaderboard data api theke data call kore map korte hbe ------------ */}

      <div className="max-w-[1240px] mx-auto px-8">
        {/*----------------- User's position --------------*/}
        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead className="bg-white">
              <tr>
                <th className="bg-[#58cc02] text-[#fff]">Name</th>
                <th className="bg-[#58cc02] text-[#fff]">Email</th>
                <th className="bg-[#58cc02] text-[#fff]">Your Position</th>
                <th className="bg-[#58cc02] text-[#fff]">Gems</th>
              </tr>
            </thead>
            <tbody >
              {/* <!-- row 1 --> */}
              <tr>
                <td className="bg-[#fff] text-green-400">
                  <div>
                    <div className="font-bold capitalize">{singleUser?.name}</div>
                  </div>
                </td>
                <th className="bg-[#fff] text-green-400">{singleUser?.email}</th>
                <th className="bg-[#fff] text-green-400">{userRank}</th>
                <td className="bg-[#fff] text-green-400">{singleUser?.gems}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*------------------- Top 5 members are here ---------------------*/}

        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead>
              <tr className="bg-[#ddf3a1] text-[#58cc02]">
                <th>Name</th>
                <th>Email</th>
                <th>Your Position</th>
                <th>Gems</th>
              </tr>
            </thead>
            <tbody>
              {sortedArray?.map((user, index) => {

                return (
                  <>
                    {/* {user?.email === singleUser?.email && setUserRank(rank)} */}
                    <tr className="bg-[#edffdf] border-none text-[#333] shadow-lg">
                      <td className="bg-[#edffdf] border-none text-[#333]">
                        {user?.name}
                      </td>
                      <td className="bg-[#edffdf] border-none text-[#333]">{user?.email}</td>
                      <td className="bg-[#edffdf] border-none text-[#333]">{index + 1}</td>
                      <td className="bg-[#edffdf] border-none text-[#333]">{user?.gems}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>

        {/*-------------------- Other members are here --------------------*/}

      </div>
    </>
  );
};

export default Leaderboard;
