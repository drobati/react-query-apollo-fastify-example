import { useQueryClient } from "react-query";

import { useFetchDesserts } from "../api/desserts";

function Desserts({ checked }) {
  const { selected = {}, handleCheckbox } = checked;
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useFetchDesserts();

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div class="pa4">
            <div class="overflow-auto">
              <table class="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                  <tr>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Calories
                    </th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Carbs
                    </th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Fats</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Proteins
                    </th>
                  </tr>
                </thead>
                <tbody class="lh-copy">
                  {data.Desserts.map((dessert) => (
                    <tr key={dessert.Id}>
                      <td class="pv3 pl2 bb b--black-20">
                        <input
                          type="checkbox"
                          id={dessert.Id}
                          value=""
                          onClick={() => handleCheckbox(dessert.Id)}
                          checked={selected[dessert.Id]}
                        ></input>
                      </td>
                      <td class="pv3 pr3 bb b--black-20">{dessert.Name}</td>
                      <td class="pv3 pr3 bb b--black-20">{dessert.Calories}</td>
                      <td class="pv3 pr3 bb b--black-20">{dessert.Carbs}</td>
                      <td class="pv3 pr3 bb b--black-20">{dessert.Fat}</td>
                      <td class="pv3 pr3 bb b--black-20">{dessert.Protein}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}

export default Desserts;
