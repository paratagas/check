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

/**
 * Main app structure
 *
 * @author Evgeni Sviridenko <paratagas@gmail.com>
 * @version 0.0.1
 * @copyright Evgeni Sviridenko 2017
 */

/**
 * Create main layout
 */
webix.ready(function() {
	webix.ui({
		view: "form",
		id: "mainForm",
		elements: [
            {
                view: "layout",
                id: "FirstnameGroup",
                width: 400,
                cols:[
                    {
                        view: "text",
                        id: "Firstname",
                        width: 400,
                        placeholder: "Firstname"
                    }
                ]
            },
            {
                view: "layout",
                id: "LastnameGroup",
                width: 400,
                cols:[
                    {
                        view: "text",
                        id: "Lastname",
                        width: 400,
                        placeholder: "Lastname"
                    }
                ]
            },
			{
                view: "layout",
                id: "AddressGroup",
                width: 400,
                cols:[
                    {
                        view: "text",
                        id: "Street",
                        width: 300,
                        placeholder: "street"
                    },
                    {
                        view: "text",
                        id: "Number",
                        width: 100,
                        placeholder: "nr."
                    }
                ]
            },
            {
                view: "layout",
                id: "CityGroup",
                width: 400,
                cols:[
                    {
                        view: "text",
                        id: "Zip",
                        width: 100,
                        placeholder: "zip",
                        suggest:[
                            {id:1, value: 12578},
                            {id:2, value: 96587},
                            {id:3, value: 23568},
                            {id:4, value: 99999},
                            {id:5, value: 45678}
                        ]
                    },
                    {
                        view: "text",
                        id: "City",
                        width: 300,
                        placeholder: "city"
                    }
                ]
            },
            {
                view: "layout",
                id: "PhoneGroup",
                width: 400,
                cols:[
                    {
                        view: "combo",
                        id: "PhoneCode",
                        width: 100,
                        value: "1",
                        options:[
                            {
                            	id: 151,
								value: "0151"
							},
                            {
                            	id: 152,
								value: "0152"
							},
                            {
                            	id: 153,
								value: "0153"
                            }
                        ]
                    },
                    {
                        view: "text",
                        id: "PhoneNumber",
                        width: 300,
                        placeholder: "cellphone number"
                    }
                ]
            },
			{
                view: "label",
				label: "I know:",
				inputWidth: 100,
				align: "left"
			},
            {
                view: "layout",
                id: "IKnowGroup",
                width: 400,
                cols:[
                    {
                        view: "checkbox",
                        id: "html",
                        labelRight: "HTML",
                        width: 150,
                        value: 1,
                        css: "checkbox_HTML"
                    },
                    {
                        view: "checkbox",
                        id: "jQuery",
                        labelRight: "jQuery",
                        width: 150,
                        value: 1,
                        css: "checkbox_jQuery"
                    },
                    {
                        view: "checkbox",
                        id: "CSS",
                        labelRight: "CSS",
                        width: 150,
                        value: 0,
                        css: "checkbox_CSS"
                    }
                ]
            },
			{
                view: "button",
                id: "frontend",
                value: "Frontend",
                inputWidth: 100,
                on: {
                    onItemClick: validateForm
                }
			}
    ]
	});
});

//# sourceMappingURL=bundle.js.map
