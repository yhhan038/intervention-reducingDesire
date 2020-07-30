$('#d-done').click(function() {

    if (validCheck2()) {
        $('#desireControl').css("display", "none");
        $('#finish').css("display", "block");
    }
    else
        alert("모든 질문에 답해주세요.");
});

document.getElementById("task-done").addEventListener("click",
    function() {
    console.log("done");
    chrome.storage.sync.set({done:true});
    download();
    window.close();
}, false);
$('.btn-warning').on('click', function() {
    console.log('quit');
    chrome.storage.sync.set({quit:true});
    download();
    window.close();
});


function download() {
    var data = $('#reflection-ans1').val() + "//" + $('#reflection-ans2').text() + "//" + $('#reflection-ans3').val() + "//" + $('#desire-ans1').val() + "//" + $('#desire-ans2').val();
    var filename = "/data/test.txt";
    var file = new Blob([data], {type: 'txt'});
    var a = document.createElement("a"),
            url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

function validCheck2 () {
    var valid = true;
    if ($('#desire-ans1').val().length == 0 )
        valid  = false;
    if ($('#desire-ans2').val().length == 0)
        valid = false;

    return true;
};