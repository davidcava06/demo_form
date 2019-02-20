Survey
    .StylesManager
    .applyTheme("default");

var json = {
    clearInvisibleValues: "onHidden",
    questions: [
        {
            type: "text",
            name: "name",
            title: "Name",
            placeHolder: "Enter Name",
            isRequired: true
        },
        {
            type: "text",
            name: "lastname",
            title: "Last Name",
            placeHolder: "Enter Last Name",
            isRequired: true
        },
        {
            type: "radiogroup",
            name: "gender",
            title: "Gender",
            isRequired: true,
            choices: [
                "M", "F", "Other"
            ],
            colCount: 0
        }, 
        {
            type: "text",
            name: "age",
            title: "Age Group",
            isRequired: true,
            placeHolder: "Enter age",
            isRequired: true
        }, {
            type: "radiogroup",
            name: "haveKids",
            title: "Do you have a kid(s)?",
            visibleIf: "{age}>=17",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            colCount: 0
        }, {
            type: "dropdown",
            name: "kids",
            title: "How many kids do you have",
            visibleIf: "{haveKids}='Yes'",
            isRequired: true,
            choices: [1, 2, 3, 4, 5]
        }, {
            type: "dropdown",
            name: "kid1Age",
            title: "The first kid age:",
            visibleIf: "{kids} >= 1",
            isRequired: true,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid2Age",
            title: "The second kid age:",
            visibleIf: "{kids} >= 2",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid3Age",
            title: "The third kid age:",
            visibleIf: "{kids} >= 3",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid4Age",
            title: "The fourth kid age:",
            visibleIf: "{kids} >= 4",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid5Age",
            title: "The fifth kid age:",
            visibleIf: "{kids} >= 5",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});