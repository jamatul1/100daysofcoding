var carFleet = function (target, position, speed) {
  let cars = [];
  let stack = [];
  for (let i = 0; i < position.length; i++) {
    cars.push({ pos: position[i], spd: speed[i] });
  }
  cars.sort((a, b) => a.pos - b.pos);
  let j = position.length - 2;
  let fleet = 1;
  stack.push(cars[j + 1]);
  while (j >= 0) {
    let carAhead = stack.pop();
    if (
      cars[j].spd > carAhead.spd ||
      (cars[j].pos === carAhead.pos && cars[j].spd === carAhead.spd)
    ) {
      let fRT = (target - carAhead.pos) / carAhead.spd;
      let bRT = (target - cars[j].pos) / cars[j].spd;
      if (bRT <= fRT) {
        stack.push(carAhead);
        j--;
        continue;
      }
    }
    stack.push(cars[j]);
    fleet++;
    j--;
  }
  return fleet;
};

// More Optaimized
var carFleet = function (target, position, speed) {
  const indices = position.map((_, index) => index);

  indices.sort((a, b) => position[b] - position[a]);

  let timeArrival = (position = indices.map(
    (_, index) => (target - position[indices[index]]) / speed[indices[index]]
  ));

  let max = -Infinity;
  let groups = 0;
  for (let i = 0; i < timeArrival.length; i++) {
    if (timeArrival[i] > max) {
      groups++;
      max = timeArrival[i];
    }
  }

  return groups;
};
// console.log(carFleet(11, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// var decodeString = function (s) {
//   function decode(str, decoded = "") {
//     if (str === "") return "";
//     let l = str[0];
//     if (+l === +l) {
//       let i = 2;
//       let unit = "";
//       while (str[i] !== "]" && i < str.length) {
//         if (+str[i] === +str[i]) {
//           from = decode(str.slice(i));
//           i += from.length / +str[i] + 2;
//           unit += from;
//         } else {
//           unit += str[i];
//         }

//         i++;
//       }
//       if (str[i + 1] === "]") return unit.repeat(+l);
//       return unit.repeat(+l) + decode(str.slice(i + 1));
//     } else {
//       return str[0] + decode(str.slice(1));
//     }
//   }
//   return decode(s);
// };
// console.log(decodeString("ui5[e]ft2[a2[f]]fi"));
