const shuffleIt = (arr, ...rest) => rest.reduce((acc, [a, b]) => ([acc[a], acc[b]] =
   [acc[b], acc[a]], acc), arr)