export const saveNotes = (data) => {
  localStorage.setItem("notes", JSON.stringify(data));
};

export const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || {};
};
