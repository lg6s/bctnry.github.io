var width = 0;
var blognameBlock = document.getElementById("blogname");
var blogpostList = document.getElementById("blogpostList");
var blogposts = blogpostList.children;

function updateWindowSize(){
    if(document.body && document.body.offsetWidth){
        width = document.body.offsetWidth;
    }
    if(
        document.compatMode == 'CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth
    ){
        width = document.documentElement.offsetWidth;
    }
    if(window.innerWidth){
        width = window.innerWidth;
    }

    // update blogname block.
    updateBlogname();
    // update blogpost list.
    updateBlogpostList();
    // update blogposts.
    updateBlogposts();
}

function updateBlogname(){
//    var blognameBlock = document.getElementById("blogname");
    blognameBlock.attributes["class"].value = "blogname "+(width >= 1200?"desktop":(width >= 768?"midwidth":"mobile"));
    // TODO: use external source for resource strings.
    blognameBlock.children[0].innerHTML = (width >= 768?"未为人知<br />之蝶":"未为人知之蝶");
}
function updateBlogpostList(){
    blogpostList.attributes["class"].value = "blogpostList "+(width >= 1000?"desktop":(width >= 768?"midwidth":"mobile"));
}
function updateBlogposts(){
    for(var i = 0; i < blogposts.length; i++){
        blogposts[i].attributes["class"].value = "blogpostSingl "+(width >= 768?"desktop":"mobile");
    }
}

updateWindowSize();

window.onresize = function(event){
    updateWindowSize();
}
