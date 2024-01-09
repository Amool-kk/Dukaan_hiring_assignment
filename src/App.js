import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import icons from "./icons";

function App() {

  const cards = [
    { title: "Online orders", value: "231" },
    { title: "Amount received", value: "₹23,92,312.19" }
  ]

  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="flex">
      <Sidebar />
      <div style={{
        flex: 1,
        height: "100vh",
        overflowY: "auto"
        }}>
        <div className="bg-[#FAFAFA] min-h-full">
          <Navbar />
          <div style={{
            padding: "12px 32px 12px 32px",
            fontSize: "16px",
          }}>
            <div className="my-6">

              <div className="flex items-center mb-7" style={{ height: "36px" }}>
                <div className="flex-1" style={{ fontSize: "20px" }}>Overview</div>
                <div className="flex-1 text-right">
                  <span className="flex items-center float-right" style={{
                    backgroundColor: "white",
                    padding: "5px 8px",
                    border: "1px #D9D9D9 solid",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}>
                    Last Month <span className="ml-3" >{icons["Dropdown-dark"]}</span>
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                {cards.map((item, index) => (
                  <Card title={item.title} value={item.value} />
                ))}
              </div>
            </div>
            <div className="my-6">
              <div className="flex-1 mb-7" style={{ fontSize: "20px" }}>Transactions | This Month</div>

              <div className="bg-white" style={{
                padding: "12px 12px 24px 12px",
                marginBottom: "10px"
              }}>

                <div className="flex items-center mb-3">
                  <div style={{
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    padding: "9px 16px 9px 16px",
                    width: "fit-content",
                    border: "1px #D9D9D9 solid",
                    borderRadius: "4px",
                  }}>
                    <span className='mr-2 cursor-pointer'>{icons["search"]}</span>
                    <input type="text" placeholder='Search by Order ID...' style={{ backgroundColor: "transparent", outline: "none" }} />
                  </div>
                  <div className="ml-auto flex">
                    <button style={{
                      backgroundColor: "white",
                      padding: "5px 8px",
                      border: "1px #D9D9D9 solid",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center"
                    }}>Sort <span className="ml-2">{icons["sort"]}</span></button>
                    <button style={{
                      backgroundColor: "white",
                      padding: "5px 8px",
                      border: "1px #D9D9D9 solid",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}>{icons["download"]}</button>
                  </div>
                </div>

                <div>
                  <table className="w-full border-collapse border-gray-300 my-5 table-auto">
                    <thead>
                      <tr className="bg-[#F2F2F2]">
                        <th className="p-2 text-[#4C4C4C] text-left" style={{
                          fontWeight: "unset"
                        }}>Order ID</th>
                        <th className="p-2 text-[#4C4C4C] text-right" style={{
                          fontWeight: "unset"
                        }}>Order date</th>
                        <th className="p-2 text-[#4C4C4C] text-right" style={{
                          fontWeight: "unset"
                        }}>Order amount</th>
                        <th className="p-2 text-[#4C4C4C] text-right flex items-center float-right" style={{
                          fontWeight: "unset"
                        }}><span>Transaction fees</span> <span className="ml-1.5">{icons["info"]}</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr>
                          <td className="text-[#146EB4] border-b border-gray-300 p-2 text-left">#281209</td>
                          <td className="border-b border-gray-300 p-2 text-right">7 July, 2023</td>
                          <td className="border-b border-gray-300 p-2 text-right">₹1,283.83</td>
                          <td className="border-b border-gray-300 p-2 text-right">₹23</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div class="flex flex-col items-center mt-8">
                    <div className="flex items-center">
                      <div class="mr-1 flex justify-center items-cente cursor-pointer" style={{
                        padding: "6px 12px 6px 6px",
                        border: "1px #D9D9D9 solid",
                        borderRadius: "4px"
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span>Previous</span>
                      </div>
                      <div class="flex h-7 gap-2">
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">1</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">...</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer text-white " style={{ borderRadius: "4px", backgroundColor: "#146EB4" }}>12</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">13</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">14</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">15</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">16</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">17</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">18</div>
                        <div class="py-1.5 px-2 w-7 md:flex justify-center items-center cursor-pointer  ">19</div>
                      </div>

                      <div class="ml-1 flex justify-center items-cente cursor-pointer" style={{
                        padding: "6px 12px 6px 6px",
                        borderRadius: "4px",
                        border: "1px #D9D9D9 solid",
                      }}>
                        <span className="pl-1">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
