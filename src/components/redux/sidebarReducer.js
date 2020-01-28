
let initialSideBarPage = {

      friends: [
            { id: 0, name: "Olena", avatar: "" },
            { id: 1, name: "Andriy", avatar: "" },
            { id: 2, name: "Mir", avatar: "" }
      ]


}

let sidebarReducer = (sidebarPage = initialSideBarPage, action) => {
      switch (action.type) {
            default:
                  return sidebarPage;
      }

}

export default sidebarReducer;