/*
 INSTRUCTIONS

    Note : read extra explanation of PDF
    
    We want to model   Menu and   MenuItem

  - An Menu has:
            - the menu label (string)
            - the list of menu items (array of MenuItem)


  - An MenuItem has:
            - the menu item label (string)
            - the callBack function called when click (string)

    Q1 : Create the 2 types.

    Q2 : Create the following menus :
                menu File
                        label : "File"
                        items :
                            name: "Save ...", callBack: "onClickSave"
                            name: "Open...", callBack: "onClickOpen"
                            name: "Preferences", callBack: "onClickPreferences"
   
                menu Edition
                        label : "Edition"
                        items :
                            name: "Copy", callBack: "onCopy"
                            name: "Paste", callBack: "onPaste"
*/
var saveItem = { name: "Save ...", callBack: "onClickSave" };
var openItem = { name: "Open...", callBack: "onClickOpen" };
var preferenceItem = {
    name: "Preferences",
    callBack: "onClickPreferences"
};
var file = {
    label: "File",
    items: [saveItem, openItem, preferenceItem]
};
var menuEdition = {
    label: "Edition",
    items: [
        { name: "Copy", callBack: "onCopy" },
        { name: "Paste", callBack: "onPaste" },
    ]
};
