function testJS()
{
	var title=frm1.browser1.evaluateJavaScript("document.title");
	alert("Title:"+title);
	var username =frm1.browser1.evaluateJavaScript("document.getElementsByName('userId')[0].value");
	var password=frm1.browser1.evaluateJavaScript("document.getElementsByName('password')[0].value");
	alert("You have entered:"+username+","+password);

  var getClass=frm1.browser1.evaluateJavaScript("document.getElementsByClassName('democlass')[0].innerHTML");
  alert("Class:"+getClass);
  
  if (frm1.browser1.evaluateJavaScript("document.getElementById('r1').checked")) 
  {
  rate_value = frm1.browser1.evaluateJavaScript("document.getElementById('r1').value");
  alert("RadioGroupButton:"+rate_value);
  }
  else if (frm1.browser1.evaluateJavaScript("document.getElementById('r2').checked")) 
  {
  rate_value = frm1.browser1.evaluateJavaScript("document.getElementById('r2').value");
  alert("RadioGroupButton:"+rate_value);
  }
  else 
  {
  rate_value =frm1.browser1.evaluateJavaScript("document.getElementById('r3').value");
  alert("RadioGroupButton:"+rate_value);
  }
}

