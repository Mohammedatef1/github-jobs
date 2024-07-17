import FilterOptions from "./FilterOptions";
import Jobs from "./Jobs";

const Content = () => {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] grid-cols-[1fr] gap-x-8">
      <FilterOptions></FilterOptions>
      <Jobs></Jobs>
    </div>
  );
};

export default Content;
