import { FriendType } from "../../types/types";

type InitialSideBarPageType = {
      friends: FriendType[]
}
let initialSideBarPage = {
      friends: [
            { id: 0, name: "Olena", avatar: "" },
            { id: 1, name: "Andriy", avatar: "" },
            { id: 2, name: "Mir", avatar: "" }
      ]
}

let sidebarReducer = (sidebarPage = initialSideBarPage, action: any): InitialSideBarPageType => {
      switch (action.type) {
            default:
                  return sidebarPage;
      }
}

export default sidebarReducer;