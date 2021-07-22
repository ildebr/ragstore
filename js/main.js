strsec = $(".store-section");

for (let index = 0; index < strsec.length; index++) {

    //select every first children of a .store-section and changes its text to the title of the section
    $(strsec[index].children[0]).text(strsec[index].id)
    $(strsec[index].children[2]).text("Buy " + strsec[index].id);

    //now first count the store items that will change background
    for(let idx = 0; idx < strsec[index].children[1].children.length; idx++){
        //now change it

        console.log("dentro");
        $(strsec[index].children[1].children[idx].children[0]).attr("style","background-image:url(img/" + strsec[index].id + "-" +(idx+1) + ".jpg)")
    }
}