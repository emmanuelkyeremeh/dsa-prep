/*
to determine whether we can finish all courses, we need to figure out whether a cycle exists where each course seems to have unending duplicates. now first we create an adjancency matrix to represent our courses and the pre-requisites and then create a function which looks for a cycle for each course in the list and if we do find one, we return true.
*/
var canFinish = function (numCourses, prerequisites) {
  //helper function to check for cycles
  const isCyclic = (adj, visited, node) => {
    //if the node is currently being visited, then we know there is a cycle
    if (visited[node] === 2) return true;

    visited[node] = 2; //mark the node as currently being visited

    //loop through the adjancency list and call the helper function on each node(essentially BFS)
    //check for whether or not the value of the item inside of our visited array is not 1(visited). if it is 2 then we return false since we have found a cycle. if it is 0 then it is not visited so we continue.
    if (adj[node] !== undefined) {
      for (let i = 0; i < adj[node].length; i++) {
        if (visited[adj[node][i]] !== 1) {
          if (isCyclic(adj, visited, adj[node][i])) return true;
        }
      }
    }

    visited[node] = 1;
    return false;
  };

  const adjancencyList = {};

  //create the adjancency list
  for (let i = 0; i < prerequisites.length; i++) {
    //obtain the course and preReq and then add to or update the adjacency matrix.
    const [course, preReq] = prerequisites[i];
    if (!adjancencyList[course]) adjancencyList[course] = [];
    if (!adjancencyList[preReq]) adjancencyList[preReq] = [];

    adjancencyList[course].push(preReq);
  }

  //create the visited array
  const visited = new Array(numCourses).fill(0);

  //loop through the graph and call the helper function on each node for cyc\U0001f1f1e detection
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0) {
      if (isCyclic(adjancencyList, visited, i)) return false;
    }
  }

  return true;
};
