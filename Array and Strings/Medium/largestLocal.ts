// revision

// function largestLocal(grid: number[][]): number[][] {
//     const n = grid.length;

//     const maxLocal: number[][] = Array.from(
//         { length: n - 2 },
//         () => Array(n - 2).fill(0)
//     );

//     for (let i = 0; i < n - 2; i++) {
//         for (let j = 0; j < n - 2; j++) {

//             let max = 0;

//             for (let x = 0; x < 3; x++) {
//                 for (let y = 0; y < 3; y++) {
//                     max = Math.max(max, grid[i + x][j + y]);
//                 }
//             }

//             maxLocal[i][j] = max;
//         }
//     }

//     return maxLocal;
// }