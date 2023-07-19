// convert object to string and store in localStorage
// export function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("persistantState", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// load string from localStarage and convert into an Object
// invalid output must be undefined

export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export function clearLocalStorage() {
  localStorage.clear();
}
// export const setValueLocalStorage = (data) => {
//   localStorage.setItem("accessToken", JSON.stringify(data.payload.accessToken));
// };

// export const removeValueLocalStorage = () => {
//   if (localStorage.getItem("accessToken")) {
//     localStorage.removeItem("accessToken");
//   }
// };
