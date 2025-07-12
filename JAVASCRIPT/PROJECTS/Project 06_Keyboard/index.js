let table=document.querySelector(".box");
window.addEventListener('keydown',(e)=>{
    table.innerHTML=`
    <div id="color">
    <table border=1>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key==" " ? e.key="SPACE":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
});