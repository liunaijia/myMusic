const filterNames = names => names.filter(n => n && n.trim() !== '');
const joinNames = names => names.join(' ');

// return args |> filterNames |> joinNames;
export function classNames(...args) {
  return args |> filterNames |> joinNames;
}

export function omit(object, paths) {
  return Object.entries(object)
    .reduce((memo, [k, v]) => {
      if (!paths.includes(k)) {
        Object.assign(memo, { [k]: v });
      }
      return memo;
    }, {});
}
