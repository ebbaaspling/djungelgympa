function buildMenu()
{
    var links = [
        ["STARTSIDA", "index.html"],
        ["ÅLDERSGRUPPER", "aldersgrupper.html"],
        ["VÅRA LEDARE", "varaledare.html"],
        ["INTRESSEANMÄLAN", "intresseanmalan.html"]
        
    ]

    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}