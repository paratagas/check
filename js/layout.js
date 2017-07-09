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
