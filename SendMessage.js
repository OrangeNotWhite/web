function flask() {
  var second = prompt("Enter your message")
  var _0x588b7f = prompt("Provide your Discord username");
  if (_0x588b7f === null) {
    alert("Operation cancelled");
  } else {
    var _0x1b001e = _0x588b7f.replace(/([*_~`])/g, "\\$1");
    var _0x5d722a = "@everyone An EMERGENCY Meeting has been called by **" + _0x1b001e + '**' + "*" + "With the reason: " + "*" + "**" + second + "**";
    var _0x3a1362 = new XMLHttpRequest();
    _0x3a1362.open("POST", "https://discord.com/api/webhooks/1228358257458806804/X32yc9_YuQ9rOCGd74TtX0H2st15ogesi5eMH10Ptswe2nkLoK6Cy4qWeNRw1GTZBZtp");
    _0x3a1362.setRequestHeader("Content-Type", "application/json");
    var _0x109867 = JSON.stringify({
      'content': _0x5d722a
    });
    _0x3a1362.send(_0x109867);
  }
}
