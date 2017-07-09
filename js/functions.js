/**
 * Main app logic
 *
 * @author Evgeni Sviridenko <paratagas@gmail.com>
 * @version 0.0.1
 * @copyright Evgeni Sviridenko 2017
 */

/**
 * Provide form validation
 */
function validateForm() {
    validateFirstname();
    validateLastname();
    validateStreet();
    validateNumber();
    //validateZip();
    validateCity();
    validatePhoneNumber();
}

/**
 * Provide Firstname form element validation
 */
function validateFirstname() {
    var fieldName = "Firstname";
    validateThreeLetters(fieldName);
}

/**
 * Provide Lastname form element validation
 */
function validateLastname() {
    var fieldName = "Lastname";
    validateThreeLetters(fieldName);
}

/**
 * Provide Street form element validation
 */
function validateStreet() {
    var fieldName = "Street";
    validateThreeLetters(fieldName);
}

/**
 * Provide Number form element validation
 */
function validateNumber() {
    var fieldName = "Number";
    var elementValue = $$(fieldName).getValue();
    var elementValueLength = elementValue.length;

    if (elementValueLength < 1 || !(elementValue.match(/[A-F0-9]$/g))) {
        setInvalidElementStyle(fieldName);
    } else {
        setValidElementStyle(fieldName);
    }
}

/**
 * Provide Zip form element validation
 */
function validateZip() {
    var fieldName = "Zip";
}

/**
 * Provide City form element validation
 */
function validateCity() {
    var fieldName = "City";
    validateThreeLetters(fieldName);
}

/**
 * Provide PhoneNumber form element validation
 */
function validatePhoneNumber() {
    var fieldName = "PhoneNumber";
    var elementValue = $$(fieldName).getValue();
    var elementValueLength = elementValue.length;

    if (elementValueLength < 8 || !(elementValue.match(/[0-9]/g))) {
        setInvalidElementStyle(fieldName);
    } else {
        setValidElementStyle(fieldName);
    }
}

/**
 * Provide ThreeLetters form element validation
 *
 */
function validateThreeLetters(elementId) {
    var elementValue = $$(elementId).getValue();
    var elementValueLength = elementValue.length;
    //console.log("elementValue:", elementValue);
    //console.log("elementValueLength:", elementValueLength);

    if (elementValueLength < 3 || !(elementValue.match(/[A-Za-z]/g))) {
        setInvalidElementStyle(elementId);
    } else {
        setValidElementStyle(elementId);
    }
}

/**
 * Provide invalid form element style
 *
 * @param {object} elementId Webix element view_id
 */
function setInvalidElementStyle(elementId) {
    $$(elementId).define("css", "invalidElement");
}

/**
 * Provide valid form element style
 *
 * @param {object} elementId Webix element view_id
 */
function setValidElementStyle(elementId) {
    $$(elementId).define("css", "validElement");
}
