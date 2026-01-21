import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType,
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        return state.sort((people1, people2) =>
          people1.name.localeCompare(people2.name, "ru"),
        );
      }
      if (action.payload === "down") {
        return state.sort((people1, people2) =>
          people2.name.localeCompare(people1.name, "ru"),
        );
      }

      return state; // need to fix
    }
    case "check": {
      return state.filter((el) => el.age > 18).reverse(); // need to fix
    }
    default:
      return state;
  }
};
