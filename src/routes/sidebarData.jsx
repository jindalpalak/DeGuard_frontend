
export const rootSidebarData = () => {
    return [
        {
            path: "/user",
            label: "User"
        },
        {
            path: "/approval",
            label: "Approval"
        },
    ]
}

export const activeSidebar = {
    "/user": ["/user"],
    "/approval": ["/approval"]
};