//Form JS File
function frm1_frm1_postshow_seq0(eventobject, neworientation) {
    frm1.browser1.enableJsInterface = true;
};

function frm1_button2_onClick_seq0(eventobject) {
    testJS.call(this);
};

function addWidgetsfrm1() {
    var button2 = new kony.ui.Button({
        "id": "button2",
        "isVisible": true,
        "text": "Display Document",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frm1_button2_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox99929673364119 = new kony.ui.Box({
        "id": "hbox99929673364119",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_HEADER,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox99929673364119.add(button2);
    var browser1 = new kony.ui.Browser({
        "id": "browser1",
        "text": "Browser",
        "isVisible": true,
        "htmlString": "<!DOCTYPE html>\n<html>\n<head><title>Evaluate JavaScript</title>\n<style>\n.democlass {\n color: red;\n}\n</style>\n</head>\n<body id=\"bg\">\n<h1 class=\"democlass\">Hello World</h1>\n<p id=\"intro\">Click the button to trigger a function that will output the elements.</p>\n\n<div class=\"input-wrap\">\n <input type=\"text\" name=\"userId\" placeholder=\"Enter your User ID\"></label> \n <hr class=\"form-hr\">\n <input type=\"password\" name=\"password\" placeholder=\"Enter Your Password\"></label> \n</div>\n<br/>\n<div id=\"rates\">\n<input type=\"radio\" id=\"r1\" name=\"rate\" value=\"Fixed Rate\"> Fixed Rate\n<input type=\"radio\" id=\"r2\" name=\"rate\" value=\"Variable Rate\"> Variable Rate\n<input type=\"radio\" id=\"r3\" name=\"rate\" value=\"Multi Rate\" checked=\"checked\"> Multi Rate \n</div>\n<br/> \n<button onclick=\"myFunction()\">Click me</button>\n\n<script>\nfunction myFunction() {\n \n alert(document.getElementById(\"intro\").innerHTML);\n alert(\"Username:\"+document.getElementsByName('userId')[0].value);\n alert(\"Password:\"+document.getElementsByName('password')[0].value);\n alert(\"Class:\"+document.getElementsByClassName(\"democlass\")[0].innerHTML);\n if (document.getElementById('r1').checked) {\n rate_value = document.getElementById('r1').value;\n alert(\"RadioGroupButton:\"+rate_value);\n }\n else if (document.getElementById('r2').checked) {\n rate_value = document.getElementById('r2').value;\n alert(\"RadioGroupButton:\"+rate_value);\n }\n else {\n rate_value = document.getElementById('r3').value;\n alert(\"RadioGroupButton:\"+rate_value);\n }\n \n}\n</script>\n\n</body>\n</html>",
        "screenLevelWidget": true,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [1, 1, 1, 1],
        "containerHeight": null,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 92
    }, {});
    frm1.add(hbox99929673364119, browser1);
};

function frm1Globals() {
    var MenuId = [];
    frm1 = new kony.ui.Form2({
        "id": "frm1",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "postShow": frm1_frm1_postshow_seq0,
        "addWidgets": addWidgetsfrm1
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        }
    });
};