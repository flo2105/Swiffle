

content = navigator.platform;
console.log(content);
if (content.match('Mac')) {
    document.getElementById("download").innerHTML = '<p> <a href="installers/Swiffle_latest.zip" id="osx" download="Swiffle_latest.zip">Download for OSX</a></p>';
} else if (content.match('Win')) {
    document.getElementById("download").innerHTML = '<p> <a href="installers/Swiffle_latest.zip" id="osx" download="Swiffle_latest.zip">Download for Windows</a></p>';
} else if (content.match('Linux')) {
    document.getElementById("download").innerHTML = '<p> <a href="installers/Swiffle_latest.zip" id="osx" download="Swiffle_latest.zip">Download for Linux</a></p>';
}
