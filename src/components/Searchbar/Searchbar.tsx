import { Hero } from "../../types/types";

type DataMap = {
  data: Hero | undefined;
};

export function Searchbar({ data }: DataMap) {
  return (
    <div>
      <input type="text" name="" id="" />
      <h1 className="title">{data?.name} - Dossier</h1>
    </div>
  );
}
