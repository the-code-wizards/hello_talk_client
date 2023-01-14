import React from 'react';

const Leaderboard = () => {
  return (
    <>
      {/*------------------ Leaderboard data api theke data call kore map korte hbe ------------ */}

      <div className="max-w-[1240px] mx-auto">
        {/*----------------- User's position --------------*/}
        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Your Position</th>
                <th>Gems</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*------------------- Top 5 members are here ---------------------*/}

        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Your Position</th>
                <th>Gems</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
              {/* <!-- row 5 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*-------------------- Other members are here --------------------*/}

        <div className=" w-full my-5">
          <table className="bg-white table w-full text-center">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Your Position</th>
                <th>Gems</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <th>1</th>
                <td>165</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
