import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="bg-[#FAFAFA] min-h-screen">
          <Navbar />
          <div style={{
            padding: "12px 32px 12px 32px",
            height: "64px",
            fontSize: "16px"
          }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ratione dolorem autem id voluptas ad voluptates? Dolorem exercitationem tempora accusamus culpa rerum vel reprehenderit, ad odio dicta natus soluta delectus quam nam officia recusandae saepe, possimus harum fugiat. Sunt explicabo in, doloribus ipsam porro tempore numquam ducimus debitis illo, facere ea iure repellat repellendus nostrum? Eveniet ipsam officia debitis animi soluta deleniti tempora ducimus, veritatis fuga dolorem sed incidunt beatae ex, officiis fugit est minima laborum! Soluta, magni temporibus? Rerum reiciendis, temporibus porro exercitationem eum veritatis accusantium culpa numquam est expedita repellat, ex distinctio libero commodi, nesciunt iste dicta tempora?
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
