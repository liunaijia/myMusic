const filterNames = names => names.filter(n => n && n.trim() !== '');
const joinNames = names => names.join(' ');

// return args |> filterNames |> joinNames;
export const classNames = (...args) => args |> filterNames |> joinNames
