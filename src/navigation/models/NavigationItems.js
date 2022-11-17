export class NavigationItems{
    items
}
export class NavigationItem{
    internalName;
    displayName;
    isDisabled = false;
    path;
}

export const navigationItems = `{
    "items": [
        {
            "internalName": "Home",
            "displayName": "Home",
            "isDisabled":"false",
            "path": "/"
        },
        {
            "internalName": "Login",
            "displayName": "Login",
            "isDisabled":"true",
            "path": "/login"
        },
        {
            "internalName": "Register",
            "displayName": "Register",
            "isDisabled":"true",
            "path": "/register"
        }
    ]
}`