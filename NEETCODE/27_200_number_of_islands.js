/*
We given 1 to indicate an island and then 0 to indicate water, the solution is to traverse through each element . when we encounter a 1, we want to check out its neighbours,excluding diagonal neighbours just to see how far the island extends. Now we will recursively traverse each neighbour that is a 1 as it is a part of the island and change its value to 2 to mean that it has already been traversed. we do same for the existing index we are on so when we return back to the current index and we move on, if any element is a part of an exisitng island, its value will be a 2 and we can skip. so whenever we encounter a 1, we can increment our value for the number of islands
*/
var numIslands = function (grid) {
  let number_of_islands = 0;

  //helper function
  const dfs = (rows, cols, grid) => {
    //base case
    if (
      rows < 0 ||
      rows >= grid.length ||
      cols < 0 ||
      cols >= grid[0].length ||
      grid[rows][cols] !== "1"
    ) {
      return;
    }

    grid[rows][cols] = "2"; //change to visited

    //dfs
    dfs(rows + 1, cols, grid);
    dfs(rows - 1, cols, grid);
    dfs(rows, cols + 1, grid);
    dfs(rows, cols - 1, grid);
  };

  for (let rows = 0; rows < grid.length; rows++) {
    for (let cols = 0; cols < grid[0].length; cols++) {
      if (grid[rows][cols] === "1") {
        dfs(rows, cols, grid);
        number_of_islands += 1;
      }
    }
  }

  return number_of_islands;
};
