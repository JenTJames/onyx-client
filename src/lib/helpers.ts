import Status from "../types/Status.type";

export const getStatusColor = (status: Status) => {
  switch (status) {
    case "Created":
      return "gray";
    case "Assigned":
      return "blue";
    case "In Progress":
      return "green";
    case "Completed":
      return "red";
    default:
      return "gray";
  }
};
